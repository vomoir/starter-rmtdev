import { forwardRef } from "react";
import { useBookmarksContext } from "../lib/hooks";
import JobList from "./JobList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(
  // _ means you aren't using props
  function (_, ref) {
    const { bookmarkedJobItems, isLoading } = useBookmarksContext();
    // means popover will sit on top of dom (under document.body) - not affected by parent z-index
    return createPortal(
      <div ref={ref} className="bookmarks-popover">
        <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
      </div>,
      document.body
    );
  }
);

export default BookmarksPopover;
