---
id: dev
title: Between Dev Versions
---

## Warning!
Dev versions are unstable and may contain bugs. They are only used for testing and not suitable for production. Use them at your own risk.

## Backup Current Installation (Optional)
This step is only required if you have customized the theme/template or installed your own extensions since the upgrade may overwrite the files.
```bash
cd /var/www
cp pterobilling pterobilling-backup
mysqldump -u username -p password mydatabase > pterobilling-backup.sql
```

## Enable Maintenance Mode
```bash
cd /var/www/pterobilling
php artisan down
```

## Install the New Dev Version
```bash
cd /var/www

# You may add --no-dev to the end of the command below if you just want to test and not going to contribute
composer create-project pterobilling/pterobilling pterobilling --stability=dev

chmod -R 755 /var/www/pterobilling
chown -R www-data:www-data /var/www/pterobilling
```

## Update Database Tables
```bash
php artisan migrate --seed --force
```

## Cache Config Files and Views
```bash
php artisan config:cache
php artisan view:cache
```

## Restart Queue Workers
```bash
php artisan queue:restart
```

## Disable Maintenance Mode
```bash
php artisan up
```
