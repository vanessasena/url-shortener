# API Basejump: URL Shortener Microservice

## User stories:

1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

    https://url-shortener-vst.herokuapp.com/new/https://www.google.com
    https://url-shortener-vst.herokuapp.com/new/http://foo.com:80

## Example creation output

    { "original_url":"https://www.google.com", "short_url":"http://url-shortener-vst.herokuapp.com/Syq-ChS-f }

## Usage:

    http://url-shortener-vst.herokuapp.com/Syq-ChS-f

Will redirect to:

    https://www.google.com/
