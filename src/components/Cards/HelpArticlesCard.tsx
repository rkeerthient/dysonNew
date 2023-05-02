import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
import RTF from "../RTF";
import HelpArticle from "../../types/help_articles";

export default function HelpArticlesCard(props: CardProps<HelpArticle>) {
  const { result } = props;
  const helpArticlesRawData = result.rawData;

  return (
    <>
      {helpArticlesRawData.body && (
        <div className="w-full px-4 pt-2">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200  px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                    <span className="text-lg font-medium">
                      {helpArticlesRawData.name.replace(" | Dell US", "")}
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col">
                    <RTF>{helpArticlesRawData.body}</RTF>
                    <a
                      href={helpArticlesRawData.landingPageUrl}
                      className="p-4 bg-blue-500 text-white text-center w-fit"
                    >
                      Learn more
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      )}
    </>
  );
}
