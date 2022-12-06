import { useState, useCallback } from "preact/hooks";

function Collapsible() {
  const [open, setOpen] = useState(true);
  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, [open]);

  return (
    <>
      <div
        class="relative flex items-center justify-between px-8 cursor-pointer h-[70px] bg-slate-100"
        onClick={handleClick}
      >
        <div class="absolute inset-0">
          <svg
            aria-hidden="true"
            class="absolute inset-0 h-full w-full text-slate-200"
          >
            <defs>
              <pattern
                id=":R6lm:"
                width="64"
                height="64"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="20%"
              >
                <path
                  d="M0 12V.5H12"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:R6lm:)"></rect>
          </svg>
        </div>
        <h1 class="text-lg text-slate-800">Upkeepr </h1>
      </div>
      {open ? (
        <div class="border border-slate-20 p-8">
          <h1 class="font-bold mb-4">Front-end developer</h1>
          <p class="mb-6">
            The Upkeepr is an American startup that helps create item-centric
            plans, get things done, and live life well. I allow to keep item
            details, warranty info, and receipts easily accessible, create
            upkeep plans to avoid breakdowns and expensive repairs.
          </p>
          <ul class="list-disc pl-4 mb-8">
            <li>migrated REST api to Apollo GraphQl</li>
            <li>
              integrated Apollo GraphQL in a right way (move most state from
              redux to Apollo Cache)
            </li>
            <li>
              implemented sophisticated google inspired due date notification UI
            </li>
            <li>implemented authentication with Auth0 and refresh tokens</li>
          </ul>

          <a href="#" class="text-sm" target="_blanc">
            https://app.upkeepr.com/
          </a>
          <div class="text-xs">
            React, Apollo, Apollo Client, Redux, styled-components, Microsoft
            azure, PWA, Typescript,
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Collapsible;
