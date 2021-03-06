import $ from 'jquery';

module.exports = {

    baseURL: () => 'http://www.flyingant.me:3001',

    baseURI: () => '/i',

    post: (url, data) => $.post(url, data),

    get: (url, data) => $.get(url, data),

    put: (url, data) => $.ajax({
        url,
        type: 'put',
        data: JSON.stringify(data)
    }),

    upload: (url, data) => $.ajax({
        type: 'post',
        url,
        processData: false,
        contentType: false,
        data
    })

}