---
id: install
title: Installation
---

## THIS DOCUMENTATION CONTAINS UPCOMING FEATURES!

:::warning
## Please read!
**PteroBilling has not yet been released.** The Dev version contains known or unknown bugs. Install it now at your own risk. Please wait for a more stable version.

All commands below are made for the `unstable` branch, don't ask for help if something goes wrong.
:::

## Download Source Code
First, go to the directory where the website files are stored, for example:
```shell
cd /var/www
```

Next, run the following commands and a new folder named ‘pterobilling’ will be created automatically in your current working directory:
```shell
composer create-project pterobilling/pterobilling pterobilling --no-dev --stability=dev
```

Then, set the correct permissions of the files so that the web server can access them.
```shell
chmod -R 755 /var/www/pterobilling
chown -R www-data:www-data /var/www/pterobilling
```

## Configure MySQL Database & SMTP Server
Please make sure you have already [set up a MySQL database](mysql.md) and [edited the .env file](config.md) before continuing the installation.

After editing the .env file, migrate all tables to the database.
```shell
php artisan migrate --seed --force
```

## Edit Settings (Optional)
The settings can be changed later in the admin area.
```shell
php artisan p:update:settings
```

## Optimize Performance
Cache the configurations and views to optimize the performance.
```shell
php artisan config:cache
php artisan view:cache
```

## Set Up Cron Job
Then, let's set up a cron job. Run the following command to open the crontab configuration.
```shell
crontab -e
```

Copy and paste the following line to the file.
```shell
* * * * * php /var/www/pterobilling/artisan schedule:run >> /dev/null 2>&1
```

## Configure Web Server
After that, you should [create an SSL certificate and set up your web server](webserver.md). You may also [make some changes to the .env file of Pterodactyl panel](pterodactyl.md) (optional).

## Log into Admin Area
Finally, create an admin account by running the following artisan command. **Make sure the email address matches with that of your Pterodactyl panel account!**
```shell
php artisan p:make:client {email} --admin
```

Now, log into the admin area and update the [important settings](../admin/admin-area.md).
