# API Basejump: URL Shortener Microservice

## User stories:

1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

    https://url-shortener-vst.herokuapp.com/new/https://www.google.com
    https://url-shortener-vst.herokuapp.com/new/http://foo.com:80

## Example creation output

    { "original_url":"http://foo.com:80", "short_url":"https://url-shortener-vst.herokuapp.com/SyA-X2Sbz" }

## Usage:

    https://url-shortener-vst.herokuapp.com/SyA-X2Sbz

Will redirect to:

    https://www.google.com/
