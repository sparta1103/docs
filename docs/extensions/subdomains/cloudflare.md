---
id: cloudflare
title: Cloudflare
---

## Set Up Guide

### Supported Games
This extension only supports **Minecraft: Java Edition**. Bedrock Edition does not support SRV records, so we cannot create subdomain names for Bedrock servers. Other games or softwares are also not yet supported.

### Obtain an API Key
First, log into [Cloudflare dashboard](https://dash.cloudflare.com/profile/api-tokens) and click `Create Token`.

Then, click the `Use template` button beside **Edit zone DNS**.

Keep the default permission, which is `Zone - DNS - Edit`.

Under **Zone Resources**, add `Include - Specific zone - example.com`. You may also choose `Include - All zones`, which allows your clients to create subdomain names with any domains added to your Cloudflare account.

Click `Continue to summary`, and then click `Create Token`. Copy the API token.

PteroBilling will use those selected domains to create SRV records (subdomain names) that are pointed to the nodes' FQDN. The DNS record of the FQDN must be unproxied (grey-clouded).

### Edit Settings
Log into PteroBilling admin area and go to the Cloudflare settings page. (e.g. https://example.com/admin/extension/Cloudflare) Enter the **API token** you have just created. Click `Save Changes` and `Reload Config`.
