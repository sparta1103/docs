---
id: faq
title: Frequently Asked Questions
---

## Can I install PteroBilling and Pterodactyl panel on the same server?
Yes, you can. In fact, it is much easier to install PteroBilling on the server which hosts/contains the Pterodactyl panel. Since they use the same dependencies, you don't need to take extra steps when installing them on the same server. Therefore, you can safely skip the steps on the [requirements page](start/require) and follow the rest of the [getting started section](start/install).

## Can I install PteroBilling and Pterodactyl Wings (nodes) on the same server?
Yes, that is also possible. In most cases, they don't have any incompatibility. However, you have to install and set up the [required dependencies](start/require) before installing PteroBilling.

## Can I install PteroBilling on shared hosting?
PteroBilling and Laravel 8 don't officially support shared hosting environment. However, you may succeed if your web hosting provider gives you SSH access (for running Composer and Artisan commands). If you don't have SSH access, there is a high chance you will fail.
