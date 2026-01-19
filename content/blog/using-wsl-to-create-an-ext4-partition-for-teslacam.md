---
title: "Using the Windows Subsystem for Linux to create an ext4 partition for Tesla's Dashcam/Sentry Mode"
date: "2020-10-04"
tags: ["teslacam", "sentry mode", "dashcam", "windows subsystem for linux", "wsl", "ext4", "partition", "tesla"]
---

I recently wanted to set up the Dashcam/Sentry Mode in my new Model Y. After doing some research on the best removable storage device to use, I settled on the [Samsung T5 SSD](https://www.bestbuy.com/site/samsung-t5-1tb-external-usb-type-c-portable-solid-state-drive-deep-black/6026202.p?skuId=6026202). While researching, I found a number of folks saying that if I was using Windows, I'd need to download a third-party utility to format the drive as FAT32 since Windows 10 only supports FAT32 partition sizes up to 32GB. After doing a bit more digging, I found some other folks saying that formatting the drive as ext4 (a Linux-only filesystem format) also worked.

I couldn't help but think that **this sounded like a perfect job for the Windows Subsystem for Linux (WSL)**. All in all, I went from not having the WSL installed to having a new SSD working with Dashcam/Sentry Mode in under 15 minutes with no third-party tools required! Here's how:

1. **Install WSL 2**

    I followed [Microsoft's official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and selected [Ubuntu](https://www.microsoft.com/store/productId/9NBLGGH4MSV6) as my distribution of choice.

1. **Plug in the drive to your computer**

    Nothing too fancy here.

1. **Open an elevated ("As Administrator") PowerShell prompt and run the following commands**:

    ```powershell
    wmic diskdrive list brief
    ```

    This lists the available drives in Windows. My SSD had a DeviceID of `\\.\PHYSICALDRIVE3`.

    ```powershell
    wsl --mount <your disk's DeviceID> --bare
    ```

    This will mount the drive in WSL.

    ```powershell
    wsl
    ```

    This will open a WSL terminal. You can exit this terminal at any time by typing `exit`.

1. **In the WSL terminal, run the following commands**:

    ```bash
    sudo fdisk -l
    ```

    This will list all drives and partitions accessible to WSL. You should see your newly mounted SSD appear here. If you're not sure which device/partition is which, you can always unmount the SSD by running `wsl --unmount <your disk's DeviceID>` in an elevated PowerShell prompt. And re-running the command above to see which drive disappeared. Note that you'll need to re-mount it again before continuing.

    My SSD was accessible at `dev/sdc` and had a single `dev/sdc1` partition.

    ```bash
    sudo fdisk /dev/sdc
    ```

    This will begin the process of formatting the drive. Once `fdisk` is running, you can execute the following commands. Note that `fdisk` runs all commands in memory until you write them to disk.

    ```bash
    d
    ```

    This deletes the current filesystem on disk.

    ```bash
    n
    ```

    This creates a new partition.

    ```bash
    p
    ```

    This makes the new partition a primary partition.

    ```bash
    1
    ```

    This is the primary partition's partition number.

    ```bash
    t
    83
    ```

    This changes the partition type to "Linux"

    ```bash
    w
    ```

    This writes the changes to disk (**please note that this is a destructive action and cannot be undone**). `fdisk` should now output the name of your new partition. In my case, this partition was still called `dev/sdc1`

    ```bash
    mkfs.ext4 /dev/sdc1
    ```

    This formats the new partition to ext4. **Be sure to replace `dev/sdc1` with your new partition's name**. This command might take a few minutes to complete, but once it's done, you'll have a new ext4 partition!

1. **Return to your elevated PowerShell prompt and run the following commands**:

    ```bash
    wsl --mount <your disk's DeviceID> --partition 1
    ```

    You may have to unmount the drive first by running `wsl --unmount <your disk's DeviceID>`. From here, the drive should now be viewable in Windows Explorer. From the sidebar in Windows Explorer, select **Linux**, then choose your distribution (mine was **Ubuntu**), and find the location of your mounted partition. Per the [documentation](https://docs.microsoft.com/en-us/windows/wsl/wsl2-mount-disk#access-the-disk-content), the default location is `/mnt/wsl`.

    Open your mounted partition and create a new `TeslaCam` folder at its root. You may also see a pre-existing `lost+found` directory. That's not important for this exercise, but you can read more about what it's for [here](https://www.howtogeek.com/282374/what-is-the-lostfound-folder-on-linux-and-macos/).

    Once you have the `TeslaCam` folder created, that should be it! You can run the following command in your elevated PowerShell prompt to unmount your drive:

    ```bash
    wsl --unmount <your disk's DeviceID>
    ```

1. **Plug your newly formatted drive into your Tesla and make sure it's recognized**:

    You should see the following icon appear:

    ![*An image of Tesla's recording indicator from [PureTesla](https://puretesla.com/how-to-setup-tesla-dashcam-and-sentry-mode/)*](/public/images/blog/images/tesla.jpg)

1. **That's it!**

    I hope this guide was helpful for others who are looking to format a SSD for their Tesla without requiring third-party tools! Thanks as well to the WSL Team at Microsoft who (apparently) just [recently shipped](https://devblogs.microsoft.com/commandline/access-linux-filesystems-in-windows-and-wsl-2/) the support for ext4 that made this possible!
