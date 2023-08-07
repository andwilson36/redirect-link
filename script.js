const urlParams = new URLSearchParams(window.location.search);
const titleReg = /(\b[a-z](?!\s))/g;
const title = urlParams
                .get("sitename")
                .replace(/-/g, ' ')
                .replace(titleReg, function(x){return x.toUpperCase();});

document
    .title(`${title}'s Store`);

document
    .querySelector('meta[http-equiv="refresh"]')
    .setAttribute("content", `0;url=https://${urlParams.get("sitename")}.company.site`);
