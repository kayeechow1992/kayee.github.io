import {FC, memo} from 'react';

import Image from "next/image";
import {alertService} from "../../services/alert.service";

const copyContent = (contentId: string) => {
  function listener(e: ClipboardEvent) {
    const contentElement = document.getElementById(contentId)!;
    e.clipboardData!.setData("text/plain", contentElement.innerText);
    let htmlContent = contentElement.innerHTML;
    const childElement = contentElement.firstElementChild?.firstElementChild;
    if (childElement) {
      htmlContent = childElement.innerHTML
        .replaceAll("<b>", "")
        .replaceAll("</b>", "");
    }
    const html = `<p style="margin-left: 0.5in; text-indent: -0.5in;">${htmlContent}</p>`;
    e.clipboardData!.setData("text/html", html);
    alertService.info(`Copied: ${contentElement.innerText}`, {autoClose: true, keepAfterRouteChange: true});
    e.preventDefault();
  }

  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

const CopyIcon: FC<{ className: string, contentId: string }> = memo(({className, contentId}) => (
  <Image className={className}
         src="/assets/icons8-copy-96.png"
         width={24}
         height={24}
         alt="Copy Bibliography Icon"
         onClick={() => copyContent(contentId)}
  />
));

export default CopyIcon;
