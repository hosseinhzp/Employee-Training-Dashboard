import * as React from "react";
import { Table } from "@tanstack/react-table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  table: Table<any>;
};

function buildPages(pageIndex: number, pageCount: number) {
  const pages: (number | "left-ellipsis" | "right-ellipsis")[] = [];

  // show small sets fully
  if (pageCount <= 7) {
    for (let i = 0; i < pageCount; i++) pages.push(i);
    return pages;
  }

  const left = Math.max(1, pageIndex - 1);
  const right = Math.min(pageCount - 2, pageIndex + 1);

  pages.push(0);

  if (left > 1) pages.push("left-ellipsis");

  for (let i = left; i <= right; i++) pages.push(i);

  if (right < pageCount - 2) pages.push("right-ellipsis");

  pages.push(pageCount - 1);

  return pages;
}

const PaginationComponent: React.FC<Props> = ({ table }) => {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination?.pageIndex ?? 0;

  const goto = (index: number) => table.setPageIndex(index);
  const next = () => table.nextPage();
  const prev = () => table.previousPage();

  if (pageCount <= 1) return null;

  const pages = buildPages(pageIndex, pageCount);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              if (!table.getCanPreviousPage()) return;
              prev();
            }}
            aria-disabled={!table.getCanPreviousPage()}
          />
        </PaginationItem>

        {pages.map((p, i) => (
          <PaginationItem key={i}>
            {typeof p === "number" ? (
              <PaginationLink
                isActive={p === pageIndex}
                onClick={(e) => {
                  e.preventDefault();
                  goto(p);
                }}
                aria-current={p === pageIndex ? "page" : undefined}
              >
                {p + 1}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              if (!table.getCanNextPage()) return;
              next();
            }}
            aria-disabled={!table.getCanNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
