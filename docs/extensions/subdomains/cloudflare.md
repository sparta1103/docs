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

### Add DNS Records
Go to the **DNS page** of the **zone of your node's FQDN**, NOT the zones you selected in the previous step! For example, if your node's FQDN is `node1.example.com`, go to the zone `example.com` and create a CNAME record:
```
Name: subdomain.node1
Target: node1.@
TTL: Auto
Proxy status: DNS only (Gray Cloud)
```

**NOTE:** If you have multiple nodes, you should add CNAME records to all your node's FQDN.
**NOTE:** If there is a warning message about exposing the IP, you may safely ignore it.

PteroBilling will create SRV records (subdomain names) with that hostname.

### Edit Settings
Log into PteroBilling admin area and go to the Cloudflare settings page. (e.g. https://example.com/admin/extension/Cloudflare) Enter your **Cloudflare account email** and the **API key/token** you have just created. Click `Save Changes` and `Reload Config`.
