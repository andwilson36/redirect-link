const urlParams = new URLSearchParams(window.location.search);

document
    .querySelector('meta[http-equiv="refresh"]')
    .setAttribute("content", `0;url=https://${urlParams.get("sitename")}.company.site`);
