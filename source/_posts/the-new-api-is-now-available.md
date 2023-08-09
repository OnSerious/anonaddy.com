---
extends: _layouts.post
ogtype: article
image: https://addy.io/assets/img/api-access-token.png
section: content
title: The new API is now available
date: 2019-10-25
description: This post gives some more details on the release of the new addy.io API that can be used to manage aliases, recipients, domains and additional usernames. In order to use the API you first need to generate an API access token in your account settings.
categories: [updates]
---

This post gives some more details on the release of the new addy.io API that can be used to manage aliases, recipients, domains and additional usernames. In order to use the API you first need to generate an API access token in your account settings.

## What is an API?

API stands for **Application Programming Interface**, it is essentially a way of communicating with a server (in this case the addy.io server) by making requests to different URLs (endpoints).

For example, if you were to make a `GET` request to `/api/v1/aliases` you would receive a response containing a list of all of your email aliases.

Using an API, developers can create their own software such as browser extensions or mobile applications to interact with the API server.

The above example ignores authentication for simplicity but when making a request to an API they typically use tokens to authenticate users. The tokens need to be included in each request so that the API can properly authenticate the user.

For authentication the addy.io API uses [Laravel Passport](https://laravel.com/docs/6.x/passport), which provides a full OAuth2 server implementation.

One of the great things about Laravel Passport is that it allows you to simply add the `CreateFreshApiToken` middleware to your web routes so that users can be securely authenticated using an encrypted cookie.

This enables logged in users to easily consume the same API that is used by other apps e.g. the browser extension.

## How do I get started using the API?

First things first, you need to generate a new API personal access token from your [account settings](https://app.addy.io/settings/api). After choosing a short name for the token it will be displayed on the screen.

This is the only time the token will ever be displayed, so please make a note of it in a safe place (e.g. password manager)!

If you just want to use this token for the browser extension, then all you need to do now is to paste this access token into it.

If you'd like to test out some of the other API endpoints then you can use software such as [Insomnia](https://insomnia.rest/), [Postman](https://www.getpostman.com/) or just plain old curl.

There is a [Postman Collection](https://app.addy.io/docs/collection.json) available for download too (also works with Insomnia)!

<div class="flex justify-center">
  <img class="shadow" src="/assets/img/api-access-token.png" alt="API access token" title="API access token">
</div>

## Where can I find the API documentation?

You can find documentation for the API here - [https://app.addy.io/docs/](https://app.addy.io/docs/)

The documentation walks you through authentication and lists all available endpoints. Each endpoint includes an example request and example response.

The different error codes that can be returned by the API are also listed with explanations.

## Feedback and suggestions

If you have any feedback or suggestions please just [get in touch](/contact/) and make sure to sign up to the newsletter if you'd like to receive updates on new features!
