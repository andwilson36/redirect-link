document
    .querySelector('meta[http-equiv="refresh"]')
    .setAttribute("content", `0;url=https://${window.location.pathname.split('/')[1]}.company.site`);
