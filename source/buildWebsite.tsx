import { renderToString } from "preact-render-to-string";
import { createElement, FunctionComponent } from "preact";
import { ResumePage } from "./ResumePage.tsx";

await renderPages({
  websiteDirectoryPath: "/home/coder/project",
  sourceDirectoryPath: "/home/coder/project/source",
  pageDescriptions: [
    {
      pageFileName: "index",
      PageComponent: ResumePage,
    },
  ],
});

interface RenderPagesApi {
  websiteDirectoryPath: string;
  sourceDirectoryPath: string;
  pageDescriptions: Array<{
    pageFileName: string;
    PageComponent: FunctionComponent;
  }>;
}

async function renderPages({
  websiteDirectoryPath,
  sourceDirectoryPath,
  pageDescriptions,
}: RenderPagesApi) {
  // try {
  //   Deno.mkdirSync(websiteDirectoryPath);
  // } catch {
  //   // noop
  // }
  Deno.copyFileSync(
    `${sourceDirectoryPath}/main.css`,
    `${websiteDirectoryPath}/main.css`
  );
  await Promise.all(
    pageDescriptions.map(async ({
      PageComponent,
      pageFileName,
    }) => {
      const pageHtml = renderToString(
        createElement(PageComponent, {}),
      );
      await Deno.writeTextFile(
        `${websiteDirectoryPath}/${pageFileName}.html`,
        `<!DOCTYPE html>${pageHtml}`,
      );
    }),
  );
}
