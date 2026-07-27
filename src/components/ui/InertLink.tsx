"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes, MouseEvent, KeyboardEvent, ReactNode } from "react";

type InertLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children?: ReactNode;
};

/**
 * Renders link-looking markup that never navigates.
 *
 * All internal pages are intentionally unreachable: clicking does nothing and the
 * user stays exactly where they are — no navigation, no `#` hash jump, no scroll.
 * There is deliberately no `href` on the element, so the browser has nothing to
 * follow even via middle-click, Enter, or "open in new tab".
 */
const InertLink = forwardRef<HTMLAnchorElement, InertLinkProps>(function InertLink(
    { children, onClick, onKeyDown, ...rest },
    ref
) {
    const block = (e: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <a
            {...rest}
            ref={ref}
            role="link"
            aria-disabled="true"
            tabIndex={-1}
            onClick={(e) => {
                block(e);
                onClick?.(e);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") block(e);
                onKeyDown?.(e);
            }}
        >
            {children}
        </a>
    );
});

export default InertLink;
