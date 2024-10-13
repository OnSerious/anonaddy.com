---
extends: _layouts.post
ogtype: article
image: https://addy.io/assets/img/anonaddy-app-stjin.jpeg
section: content
title: Mobile apps, crypto payments and a new domain
date: 2021-01-26
description: This post goes over some recent updates, including the mobile apps available for addy.io, the new automatic cryptocurrency payments and a new alias domain for paid plans.
categories: [updates]
---

This post goes over some recent updates, including the mobile apps available for addy.io, the new automatic cryptocurrency payments and a new alias domain for paid plans.

## Mobile apps for addy.io

First of all you may be wondering why I haven't created a mobile app myself. The reason is because mobile development is not my area of expertise.

Luckily there are many great mobile developers out there and a couple of awesome developers have even created apps for addy.io!

You can find Exodus privacy reports for the app [here](https://reports.exodus-privacy.eu.org/en/reports/host.stjin.anonaddy/latest/).

### Android

Official Android app created by [Stjin](https://x.com/Stjinchan), available to download from the [Play Store](https://play.google.com/store/apps/details?id=host.stjin.anonaddy) and [F-Droid](https://f-droid.org/packages/host.stjin.anonaddy).

### iOS

Official iOS app created by [Stjin](https://x.com/Stjinchan), available to download from the [App Store](https://apps.apple.com/app/addy-io/id6563138633).

<div class="flex justify-center">
  <img class="shadow" src="/assets/img/anonaddy-app-stjin.jpeg" alt="Stjin mobile app" title="Stjin mobile app">
</div>

## New automatic cryptocurrency payments

Up until now, if you wanted to subscribe using cryptocurrency, the subscription would have to be added manually. I have finally added support for automatic crypto payments using [NOWPayments](https://nowpayments.io) to process them.

NOWPayments supports the following cryptocurrencies:

- BTC (Bitcoin)
- XMR (Monero)
- LTC (Litecoin)
- DOGE (Dogecoin)
- DCR (Decred)
- ETH (Ethereum)
- LNBT (Bitcoin Lightning)
- and many more [full list here](https://nowpayments.io/supported-coins)

There are some limitations such as a minimum invoice value of $10, so at the moment you can only pay with cryptocurrency for a yearly plan. The integration is currently quite basic so you cannot automatically swap plans yet, so please contact me if you wish to upgrade.

## A new domain

I recently added a new domain that is available for anyone on a paid plan. A common request was to have a domain that didn't suggest "hiding", "forwarding" or "anonymity". I won't actually be naming the new domain here because I don't want to publicly talk about it in hope that it can stay under the radar.

Users on paid plans can use the new domain as a shared domain *@newdomain.com and also as a standard domain *@johndoe.newdomain.com, where `johndoe` is the account's username.

The domain was the first premium domain I've ever purchased; I'm pretty happy with it and I hope you like it too.

## Moving from SpamAssassin to Rspamd

A short while ago I migrated from [SpamAssassin](https://spamassassin.apache.org/) to [Rspamd](https://www.rspamd.com/) for spam filtering on the server.

One of the main reasons for this was that Rspamd is much faster and uses less memory than SpamAssassin. Another reason was that Rspamd has support for [Authenticated Received Chain](https://tools.ietf.org/html/rfc8617) (ARC) which is used to help improve how DKIM and SPF results are passed from one mail server to the next during forwarding. Without ARC, DKIM and SPF checks can fail if messages are passed to intermediaries like mailing lists or they are forwarded.

So far I'm really happy with the performance.

## Feedback and suggestions

If you have any feedback or suggestions please just [get in touch](/contact/) and make sure to sign up to the newsletter if you'd like to receive updates on new features!
