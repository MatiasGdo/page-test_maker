const questions_lpi_201 = [
  {
    question: "What is the minimum number of disks required in a RAID5 array?",
    type: "opcion",
    answers: ["A. 2", "B. 5", "C. 4", "D. 3", "E. 1"],
    correct: 3
  },
  {
    question: "To initialize 5GB of additional swap space, which combination of commands should be used?",
    type: "opcion",
    answers: ["A. touch -5G /tmp/swapfile; swapon /tmp/swapfile", "B. mkswap /tmp/swapfile 512000; swapon /tmp/swapfile", "C. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; mount /tmp/swapfile", "D. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon /tmp/swapfile", "E. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; swapon /tmp/swapfile"],
    correct: 3
  },
  {
    question: "How can the label root be added to the ext2 filesystem on /dev/sda1?",
    type: "opcion",
    answers: ["A. labelfs --device /dev/sda1 root", "B. tune2fs -L root /dev/sda1", "C. echo 'root' > /proc/fs/sda1/label", "D. relabel /dev/sda1 root"],
    correct: 1
  },
  {
    question: "Which of the following is a CD-ROM filesystem standard?",
    type: "opcion",
    answers: ["A. ROM-EO", "B. ISO9660", "C. OSI9660", "D. ISO8859", "E. SR0FS"],
    correct: 1
  },
  {
    question: "Which single command will simulate a failed device within a RAID 5 array?",
    type: "opcion",
    answers: ["A. mdadm --force-fault /dev/md2 /dev/sde2", "B. mdadm --remove /dev/md0 /dev/sdd1", "C. mdadm --zero-superblock /dev/sdf3", "D. mdadm /dev/md0 --offline /dev/sdc1", "E. mdadm --fail /dev/md0 /dev/sdc1"],
    correct: 4
  },
  {
    question: "A system has one hard disk and one CD writer which are both connected to SATA controllers. Which device represents the CD writer?",
    type: "opcion",
    answers: ["A. /dev/scd1", "B. /dev/sr1", "C. /dev/sr0", "D. /dev/sdd", "E. /dev/hdb"],
    correct: 2
  },
  {
    question: "The following is an excerpt from the output of tcpdump -nli eth1. Which network service or protocol was used?",
    type: "opcion",
    answers: ["A. DNS", "B. SSH", "C. FTP", "D. DHCP", "E. HTTP"],
    correct: 2
  },
  {
    question: "A network client has an ethernet interface (eth0) configured with an IP address in the subnet 192.168.0.0/24. This subnet has a router, with the IP address 192.168.0.1, that connects this subnet to the Internet. What needs to be done on the client to enable it to use the router as its default gateway? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. echo defaultroute 192.168.0.1 >> /etc/resolv.conf", "B. ip route add default via 192.168.0.1 dev eth0", "C. route add default gw 192.168.0.1 eth0", "D. ifconfig eth0 defaultroute 192.168.0.1", "E. route add defaultgw=192.168.0.1 if=eth0"],
    correct: [2, 1]
  },
  {
    question: "Which commands below are useful to collect data about remote filesystem connections? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. cifsiostat", "B. pidstat", "C. sadf", "D. nfsiostat"],
    correct: [3, 0]
  },
  {
    question: "What should be done to ensure a client machine uses the recursive nameserver running on the IP address 192.168.0.1? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. Run route add nameserver 192.168.0.1.", "B. Run ifconfig eth0 nameserver 192.168.0.1.", "C. Ensure that the dns service is listed in the hosts entry in the /etc/nsswitch.conf file.", "D. Add nameserver 192.168.0.1 to /etc/resolv.conf.", "E. Run bind add nameserver 192.168.0.1."],
    correct: [3, 2]
  },
  {
    question: "Which of the following files will be looked for and used by GNU make, if one of them exists, unless a different file is specified on the command line when trying to compile software from source code? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. makefile", "B. config.h.in", "C. Makefile", "D. configure", "E. Makefile.in"],
    correct: [2, 0]
  },
  {
    question: "A regular user, joe, has just run: ./configure && make && make install to build and install a program. However, the installation fails. What could be done to install the program? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. Do not run ./configure in order to maintain the default configuration for correct installation.", "B. Run make install with root privileges.", "C. Install the binaries manually with suinstall.", "D. Run make install_local to install into /usr/local/.", "E. Rerun ./configure with a --prefix option where the user has permissions to write."],
    correct: [1, 4]
  },
  {
    question: "How is the source code for the main Linux kernel modules distributed?",
    type: "opcion",
    answers: ["A. The kernel modules are downloaded on demand as they are used during compilation.", "B. It is provided as a separate download alongside the Linux kernel source code of the same version.", "C. It is included with the Linux kernel source code.", "D. The kernel modules have their own release cycle and can be maintained separately from the Linux kernel source."],
    correct: 2
  },
  {
    question: "What component of a system does smartd monitor?",
    type: "opcion",
    answers: ["A. Hard drives", "B. RAM", "C. Ethernet traffic", "D. CPU"],
    correct: 0
  },
  {
    question: "What action should be performed after increasing the size of a logical volume?",
    type: "opcion",
    answers: ["A. Run vgresize.", "B. Remount the logical volume.", "C. Increase the size of the filesystem used for the logical volume.", "D. Run lvresize."],
    correct: 2
  },
  {
    question: "The following command has just been run successfully: cd /opt; tar xvf /dev/nst0; What will happen if the command sequence is run again?",
    type: "opcion",
    answers: ["A. The entire contents of /opt will be replaced with the contents of the next file on the tape.", "B. The contents of /opt will have additional content added from the next file on the tape.", "C. The contents of /opt will be restored again.", "D. An error saying that there is no tape present is generated because the tape has been ejected after being used."],
    correct: 1
  },
  {
    question: "In order to gather performance data with sar over a longer period of time, which command should be run periodically from cron?",
    type: "opcion",
    answers: ["A. sarec", "B. sadf", "C. sarmon", "D. sa1", "E. sarcron"],
    correct: 3
  },
  {
    question: "In which directory tree are files modified when changing kernel parameters using the command sysctl?",
    type: "opcion",
    answers: ["A. /sys/kernel/", "B. /sys/proc/", "C. /lib/sys/", "D. /proc/kernel/", "E. /proc/sys/"],
    correct: 4
  },
  {
    question: "In the following output, the load averages represent the system load averages for what time frames?\n# uptime\n12:10:05 up 18 days, 19:00, 2 users, load averagE. 0.47, 24.71, 35.31",
    type: "opcion",
    answers: ["A. 1, 15 and 30 minutes", "B. 1, 5 and 15 minutes", "C. 15, 30 and 60 minutes", "D. 15, 30 and 60 seconds", "E. 1, 15, and 30 seconds"],
    correct: 1
  },
  {
    question: "What information is found in the following excerpt from the file /proc/mdstat? (Choose two.)",
    type: "varias",
    answers: ["A. The information [3/2] means that 3 RAID disks belong to the array and 2 disks are spare. Together they equal the number of available disks", "B. The spare disk /dev/sda1 is used to restore full redundancy after the current recovery", "C. One of the disks in /dev/md0 has failed and a spare disk is used to recreate full redundancy", "D. The information [UU_] means, that the raid is missing one disk and is not fully redundant", "E. The device is using version 1.2 metadata to allow LILO and GRUB Legacy to use /dev/md0 as the boot partition.This would not have been necessary with GRUB2"],
    correct: [3, 2]
  },
  {
    question: "Which command is used to make an exact copy, at a single point in time, of a logical volume while still allowing the original logical volume to be updated?",
    type: "opcion",
    answers: ["A. lvsnapshot", "B. lvm2", "C. lvcclone", "D. lvcreate", "E. lvsnap"],
    correct: 3
  },
  {
    question: "Which of the following commands shows capabilities and usable frequencies for the wireless interface wlan0?",
    type: "opcion",
    answers: ["A. iw phy pyh0 info", "B. iw dev wlan0 show", "C. iw phy wlan0 show", "D. iw phy0 show", "E. iw dev wlan0 info"],
    correct: 4
  },
  {
    question: "What effect does the -f option to the update-rc.d command have on files in the /etc/rcX.d/ and /etc/init.d/ directories?",
    type: "opcion",
    answers: ["A. It will remove the init script in /etc/init.d/ and the symlinks in /etc/rcX.d/ and update the package information of installed files", "B. It will remove both the symlinks in /etc/rcX.d/ and the init script in /etc/init.d/", "C. It will force the removal of the symlinks in /etc/rcX.d/ even when the links are read only", "D. It will force the removal of symlinks in /etc/rcX.d/ even if the corresponding init script still exists in /etc/init.d/"],
    correct: 3
  },
  {
    question: "Which of the following commands lists IPv4 addresses and MAC addresses of network nodes that the local system has seen on its directly connected IP networks?",
    type: "opcion",
    answers: ["A. ipadm", "B. ifconfig", "C. arp", "D. iwlist"],
    correct: 2
  },
  {
    question: "Which of the following commands restores only those files containing lpi in their name from the archive lpifiles.tar.gz?",
    type: "opcion",
    answers: ["A. tar -xvfz lpifiles.tar.gz --deep `*lpi*'", "B. tar xvzwf lpifiles.tar.gz `*lpi*'", "C. tar xvzf lpifiles.tar.gz --globbing `*lpi*'", "D. tar xvzf lpifiles.tar.gz --wildcards `*lpi*'"],
    correct: 3
  },
  {
    question: "Which sub command to crypsetup shows information about an encrypted LUKS partition?",
    type: "opcion",
    answers: ["A. luksDebug", "B. luksShow", "C. luksDump", "D. luksInfo", "E. luksLS"],
    correct: 2
  },
  {
    question: "In the output of sar -b, what does tps stand for?",
    type: "opcion",
    answers: ["A. Terrabit per second", "B. Transfers per second", "C. Traffic per second", "D. Total data per second", "E. Terrabyte per second"],
    correct: 1
  },
  {
    question: "Which of the following properties should be recorded in order to monitor the quality of a network link? (Choose two.)",
    type: "varias",
    answers: ["A. Number of used TCP ports", "B. Bandwidth in both directions", "C. Number of nodes using the link", "D. Number of IPv4 and IPv6 packets", "E. Effective Latency"],
    correct: [4, 1]
  },
  {
    question: "Which of the following commands displays the physical path of the kernel module named dummy?",
    type: "opcion",
    answers: ["A. modinfo •n dummy", "B. depmod •n dummy", "C. modpath •v dummy", "D. modshow •p dummy", "E. modprobe •i dummy"],
    correct: 0
  },
  {
    question: "Which of the following commands will provide the PIDs of the processes sorted by which are using the most CPU cycles on the Linux system?",
    type: "opcion",
    answers: ["A. top", "B. ps aux", "C. vmstat", "D. freemem", "E. uptime"],
    correct: 0
  },
  {
    question: "Which command is used to install a GRUB boot loader into the master boot record?",
    type: "opcion",
    answers: ["A. grub-mkconfig", "B. grub-glue-mbr", "C. grub-install-mbr", "D. grub-install", "E. grub-mbr-setup"],
    correct: 3
  },
  {
    question: "After manually compiling and installing a new kernel, what has to be done regarding the initramfs?",
    type: "opcion",
    answers: ["A. During the compilation of the Linux kernel, a new initramfs is built automatically. The new initramfs only needs to be installed", "B. The system should be restarted since the initramfs reconfigures itself for the new kernel during the startup of the system", "C. Since the initramfs contains kernel modules, a new initramfs must be built for the new kernel", "D. To initramfs is independent of the kernel and should not be modified unless the hardware configuration of the machine has changed"],
    correct: 2
  },
  {
    question: "Which of the following is a userspace application used to modify EFI entries on a Linux system?",
    type: "opcion",
    answers: ["A. efimanager", "B. efieditor", "C. configefi", "D. efibootedit", "E. efibootmgr"],
    correct: 4
  },
  {
    question: "On a Linux node with multiple active networks interfaces, each having a default route to the Internet, which default route is preferred?",
    type: "opcion",
    answers: ["A. The default route with the highest MTU value", "B. The default route with the highest TTL value", "C. The default route with the lowest metric value", "D. The default route with the highest metric value", "E. The default route with the lowest TTL value"],
    correct: 2
  },
  {
    question: "Which of the following commands creates a Btrfs subvolume named volume in /mnt?",
    type: "opcion",
    answers: ["A. btrfs subvolume create /mnt/volume", "B. btrfs create subvolume /mnt volume", "C. btrfs subvolume new volume /mnt", "D. btrfs-subvolume create /mnt/volume", "E. btrfs subvolume add -n volume /mnt"],
    correct: 0
  },
  {
    question: "Which of the filter keywords below could be used in the following command: tcpdump •i eth0 203.0.113.8 (Choose three.)",
    type: "varias",
    answers: ["A. ip", "B. src", "C. host", "D. dst", "E. ipv6"],
    correct: [2, 1, 3]
  },
  {
    question: "Which of the following commands adds a static IPv6 address to the network interface eth0?",
    type: "opcion",
    answers: ["A. ip -6 add addr 2001:db8::1337/64 dev eth0", "B. ip addr add 2001:db8::1337/64 dev eth0", "C. ip -6 addr add 2001:db8::1337/64 dev eth0", "D. ip add addr 2001:db8::1337/64 dev eth0", "E. ip addr add -6 2001:db8::1337/64 dev eth0"],
    correct: 2
  },
  {
    question: "A Linux server running systemd booted to rescue.target for maintenance. Which commands are used to restore the server to its usual target? (Choose two.)",
    type: "varias",
    answers: ["A. systemctl emergency", "B. telinit 0", "C. systemctl reboot", "D. systemctl default", "E. sync"],
    correct: [3, 2]
  },
  {
    question: "What is the purpose of an initramfs during the Linux system start?",
    type: "opcion",
    answers: ["A. It copies the root file system's content to RAM to speed up the system and reduce writes to disk", "B. It creates a ram disk to store volatile data for directories like /tmp to reduce writes to disk", "C. It loads required modules and starts sub sytems like LVM to make the root file system accessible to the kernel", "D. It moves the kernel from normal system memory to initram memory to speed up kernel access"],
    correct: 2
  },
  {
    question: "Which of the following commands erases the contents of the /dev/sdb3 partition?",
    type: "opcion",
    answers: ["A. umount /dev/sdb3", "B. dd of=/dev/zero if=/dev/sdb3", "C. rm /dev/sdb3", "D. dd if=/dev/zero of=/dev/sdb3"],
    correct: 3
  },
  {
    question: "Which command will report information on memory usage, paging and block input/output?",
    type: "opcion",
    answers: ["A. Memshow", "B. Ps", "C. Free", "D. Top", "E. Vmstat"],
    correct: 4
  },
  {
    question: "Which of the following configuration files are used by tcpwrapper?",
    type: "opcion",
    answers: ["A. /etc/tcpd.allow and etc/tcpd.deny", "B. /etc/service.allow and /etc/service.deny", "C. /etc/hosts.allow and /etc/hosts.deny", "D. /etc/tcpwrapper.allow and /etc/tcpwrapper.deny"],
    correct: 2
  },
  {
    question: "What is the purpose of a system mount unit?",
    type: "opcion",
    answers: ["A. It is created by the command systemd-fstab-generator to integrate entries from /etc/fstab into the system boot process", "B. It is used only to mount network file systems to local mount points. It cannot be used for local media", "C. It is used by the command mount when using system to mount and unmount file systems", "D. It is used by the command systemd-mount and allows users to mount partitions to mount points of their choice"],
    correct: 3
  },
  {
    question: "After the downloading patch-4.6.4.xz from http://kernel.org, what are the next steps to prepare the build of a version 4.6.4 Linux kernel? (Choose two.)",
    type: "varias",
    answers: ["A. Uncompress the file using xz to get the uncompressed patch file", "B. Use patch to apply the uncompressed patch file to the source directory of any previous kernel version", "C. Apply the patch file to the kernel source directory containing kernel version 4.6.0", "D. Uncompress the file and move the resulting directory to /usr/src/linux", "E. Apply the patch file to the kernel source directory containing kernel version 4.6.3"],
    correct: [2, 0]
  },
  {
    question: "Which of the following init systems comes along with an own UEFI boot loader?",
    type: "opcion",
    answers: ["A. systemd", "B. SysVinit", "C. OpenRC", "D. Upstart", "E. launchd"],
    correct: 0
  },
  {
    question: "If the file containing the Linux kernel is deleted, what happens when the system boots?",
    type: "opcion",
    answers: ["A. Instead of the kernel, the initramfs is loaded and instructed to mount the root filesystem and reinstall the kernel from the original package or from source", "B. The system starts normally since the bootloader copies the kernel to the master boot record of the hard disk", "C. The bootloader mounts the root filesystem read-only and launches /bin/sh directly in order to allow the administrator to reinstall the kernel", "D. Without a kernel system cannot boot and, depending on the bootloader, an error is displayed"],
    correct: 3
  },
  {
    question: "A web application server contains 64GB of RAM and two swap partitions on normal hard disk drives, each with a size of 64 GB. Within the last month, the average number of user sessions on this server has grown by 20 percent. At the same time, the average usage of RAM increased from 65 to 75 percent, while the swap space is almost not used at all. It is expected that the number of user sessions will continue to increase by about 15 to 20 percent each month. Which of the following reactions would be appropriate in response to these observations? (Choose two.)",
    type: "varias",
    answers: ["A. Consider the installation of an additional application server to distribute the load if the expected growth continues over several months", "B. Move the web application's scripts and content a ram disk in order to ensure fast access and to avoid the need for swap space", "C. Delay any hardware upgrade until there is a significant consumption of swap space to ensure an efficient usage of the available hardware", "D. Update the hardware to increase the amount of available RAM to avoid using swap space", "E. Create a RAID 1 device on the two swap partitions to avoid data loss in case swap space has to be used in the future"],
    correct: [3, 0]
  },
  {
    question: "On a server running the 3.4.50-11 Linux kernel, which file in the /boot directory contains the kernel configuration parameters?",
    type: "opcion",
    answers: ["A. rc.config-3.4.50-11", "B. vmlinuz-3.4.50-11", "C. config-3.4.50-11", "D. config-linux-3.4.50-11", "E. system-3.4.50-11"],
    correct: 2
  },
  {
    question: "What is the correct parameter to pass to the kernel at boot time to force it to use only one of the available processors?",
    type: "opcion",
    answers: ["A. smpcpus=1", "B. vcpumx=1", "C. maxcpus=1", "D. usecpus=1"],
    correct: 2
  },
  {
    question: "What is the purpose of the command udevadm monitor?",
    type: "opcion",
    answers: ["A. It communicates with D-Bus to setup new devices.", "B. It monitors the udev process and prints performance statistics to the console.", "C. It listens to kernel events produced by a udev rule and print information to the console.", "D. It monitors the /dev directory for new devices."],
    correct: 2
  },
  {
    question: "What keyword is missing in the following line from /etc/fstab in order to make a USB flash device writeable by the user fred when mounted:\n/dev/sda1 /mnt/usbflash vfat defaults,users,      =fred,umask=022, 0 0\n(Provide the option name only without any settings)",
    type: "escribir",
    correct: "uid"
  },
  {
    question: "What command will remove a physical volume from a volume group? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "vgreduce"
  },
  {
    question: "Which program lists information about files and network connections opened by processes? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "lsof"
  },
  {
    question: "The users of the local network complain that name resolution is not fast enough. Enter the command, without the path or any options, that shows the time taken to resolve a DNS query.",
    type: "escribir",
    correct: "dig"
  },
  {
    question: "What command discards unused blocks on a mounted file system in order to support SSD devices? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "fstrim"
  },
  {
    question: "What command ensures that the file systems are written to disk after a lot of write operations? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "sync"
  },
  {
    question: "Which directory contains system-specific systemd unit files? (Specify the full path to the directory.)",
    type: "escribir",
    correct: "/lib/systemd/system"
  },
  {
    question: "Which is the main configuration file for the SystemV init process? (Specify the full name of the file, including path.)",
    type: "escribir",
    correct: "/etc/inittab"
  },
  {
    question: "What command is used to send messages to all users currently logged in? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "wall"
  },
  {
    question: "After installing a compiled kernel, it can not find any modules that are needed to be loaded. What make target was likely missed while installing the kernel?",
    type: "escribir",
    correct: "modules_install"
  },
  {
    question: "When is historical data of resource usage important? (Select THREE correct answers.)",
    type: "varias",
    answers: ["A. Identifying processes killed during out of memory occurrences.", "B. Predicting when resources will need to be increased.", "C. Diagnosing capacity problems.", "D. Troubleshooting a software problem.", "E. Selecting a computer vendor."],
    correct: [1, 2, 3]
  },
  {
    question: "In order to display information about the hardware of a Linux system, which of the following commands can be used? (Choose THREE correct answers.)",
    type: "varias",
    answers: ["A. lsusb", "B. lsdev", "C. lsmem", "D. lskvm", "E. lspci"],
    correct: [1, 0, 4]
  },
  {
    question: "Which of the following terms are used to describe 3.x and 4.x kernel releases? (Choose THREE correct answers.)",
    type: "varias",
    answers: ["A. stable", "B. longterm", "C. releasecandidate", "D. prerelease", "E. beta"],
    correct: [1, 2, 0]
  },
  {
    question: "Which of the following commands changes into the directory which contains the modules of the running kernel?",
    type: "opcion",
    answers: ["A. cd /lib/modules/$(kernel -v)", "B. cd /lib/modules/current", "C. cd /lib/modules/running", "D. cd /lib/modules/$(uname -r)", "E. cd /lib/modules/$(uptime -k)"],
    correct: 3
  },
  {
    question: "Which compression formats can be used to create initramfs images? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. bzip2", "B. rar", "C. gzip", "D. cpio", "E. arc"],
    correct: [2, 0]
  },
  {
    question: "Which command can be used to add upgrades or updated code to the kernel source code from a file generated by the command diff?",
    type: "opcion",
    answers: ["A. patch", "B. upgrade-kernel", "C. upgrade", "D. kernel.update", "E. patch-kernel"],
    correct: 0
  },
  {
    question: "How can the kernel parameter for the maximum size of the shared memory segment (shmmax) be changed to 2 GiB (2,147,483,648 Bytes) on a running system? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. Edit /etc/shmmax and set the parameter to 2147483648", "B. export kernel.shmmax=2147483648", "C. sysctl shmmax=2147483648", "D. sysctl -w kernel.shmmax=2147483648", "E. echo 2147483648 > /proc/sys/kernel/shmmax"],
    correct: [3, 4]
  },
  {
    question: "What is the command mt used for?",
    type: "opcion",
    answers: ["A. It is used to mount SCSI tape drives.", "B. It positions a SCSI tape to a specified position.", "C. It formats SCSI tapes to be used with tar.", "D. It marks an SCSI tape with a unique identifier (UUID)", "E. It is an replacement for dd to write data to SCSI tape drives."],
    correct: 1
  },
  {
    question: "Which of the following commands securely copies the directory ./fyf/ to /var/tmp/ on the remote host deltaur using the remote user account alice?",
    type: "opcion",
    answers: ["A. rsync -a -e ssh fyf/ alice@deltaur:/var/tmp", "B. rsync -a -u alice -e ssh fyf/ deltaur:/var/tmp/", "C. rsync -a -u alice -e ssh deltaur:/var/tmp/ fyf/", "D. rsync -a -e ssh alice@deltaur:/var/tmp/ fyf/"],
    correct: 0
  },
  {
    question: "Why should the command zip not be used to created backups from Linux file systems?",
    type: "opcion",
    answers: ["A. It does not exist for the Linux operating system.", "B. It can only stores files up to a size of 1 GiB and is therefor not suitable for large Linux files", "C. It does not store ownership and rights.", "D. It can only be used to compress single files but not for directory structures."],
    correct: 2
  },
  {
    question: "In the following output from the command vmstat 1 100, what percentage of time was the CPU waiting for pending I/O?",
    type: "opcion",
    answers: ["A. 35.9", "B. 0", "C. 100", "D. 57.7"],
    correct: 1
  },
  {
    question: "Which of the following targets are usually included in a makefile that is included in a source code package?",
    type: "opcion",
    answers: ["A. clean, install, uninstall", "B. prefix, exec_prefix, bindir, mandir", "C. CFLAGS, CPPFLAGS, LIBS, LDFLAGS", "D. PATHS, DESTDIR, LIBS, LDFLAGS"],
    correct: 0
  },
  {
    question: "Which of the following commands can be used to script interactions with various TCP or UDP services?",
    type: "opcion",
    answers: ["A. wget", "B. strings", "C. ftp", "D. nc", "E. tcpdump"],
    correct: 3
  },
  {
    question: "Which of the following commands lists the IPv4 neighbors of the local system, including IP and MAC addresses? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. netstat -al", "B. ip neigh show", "C. ifconfig -lv eth0", "D. arp"],
    correct: [3, 1]
  },
  {
    question: "Which command can be used to scan a specified network by looking for IP addresses that appear to be in use?",
    type: "opcion",
    answers: ["A. nmap", "B. hostdiscover", "C. tcpdump", "D. ip", "E. netscan"],
    correct: 0
  },
  {
    question: "Which of the following actions can be performed with the command hostname? (Choose THREE correct answers.)",
    type: "varias",
    answers: ["A. Display all used host names set in the past, including the current host name.", "B. Display all IP addresses associated with the local node.", "C. Display all MAC addresses of the local node.", "D. Display the local node´s host name including domain.", "E. Set a new host name for the local node."],
    correct: [3, 4, 1]
  },
  {
    question: "Under which of the following circumstances would the command ping output the string (DUP!)?",
    type: "opcion",
    answers: ["A. When the recipient host is on a different network.", "B. When the host sending the ICMP packet is the same host as the one receiving the ICMP packets.", "C. When the recipient host is running multiple pingd server processes.", "D. When the ICMP packets are sent to a broadcast address and multiple hosts respond."],
    correct: 3
  },
  {
    question: "Which /etc/hosts.allow entries permit access to sshd for users from the 192.168.1.0/24 subnet? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. sshd : 192.168.1.0", "B. sshd : 192.168.1.0 netmask 255.255.255.0", "C. sshd : 192.168.1", "D. sshd : 192.168.1.0/255.255.255.0", "E. sshd : 192.168.1."],
    correct: [4, 3]
  },
  {
    question: "Which of the following is a side effect of extensive usage of swap space?",
    type: "opcion",
    answers: ["A. Applications need to restart because their virtual memory addresses change to reflect memory relocation to the swap address area.", "B. The root filesystem may become full because swap space is always located on the system`s root partition.", "C. The overall system performance may degrade because of heavy hard disk use and memory reorganization.", "D. The memory may become fragmented and slow down the access to memory pages. However, this can be kept to a minimum by the regular use of memfrag -d", "E. Since processes always exist completely in either RAM or swap, regular RAM may become unused if the kernel does not move processes back from the swap space to memory."],
    correct: 2
  },
  {
    question: "Which of the following commands lists all wireless networks visible to the interface wlan0?",
    type: "opcion",
    answers: ["A. iwlist scan wlan0", "B. iw scan wlan0", "C. iwlist wlan0 scan", "D. iw dev wlan0 list", "E. iw list wlan0"],
    correct: 2
  },
  {
    question: "Which of the following actions ensure that changes become effective after updating the configuration file for syslogd? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. Restart syslogd service", "B. No action is required, syslogd will notice the updated configuration file after a few minutes.", "C. Send the HUP signal to the syslogd process.", "D. Run the command syslogd -u"],
    correct: [2, 0]
  },
  {
    question: "Which network service or protocol was most likely used? (tcpdump output shows traffic to port 22)",
    type: "opcion",
    answers: ["A. DHCP", "B. SSH", "C. DNS", "D. HTTP", "E. FTP"],
    correct: 1
  },
  {
    question: "Which file in /proc contains information on the status of local software RAID devices?",
    type: "opcion",
    answers: ["A. /proc/mdstat", "B. /proc/raidstatus", "C. /proc/raid/status", "D. /proc/raidstat", "E. /proc/mdstatus"],
    correct: 0
  },
  {
    question: "The hard drive /dev/sda does not have write caching enabled. Which command is used to enable write caching on /dev/sda?",
    type: "opcion",
    answers: ["A. hdparm -W 1 /dev/sda", "B. hdparm –enable-write-cache /dev/sda", "C. hdparm -c 1 /dev/sda", "D. hdparm –wce 1 /dev/sda", "E. hdparm -D 1 /dev/sda"],
    correct: 0
  },
  {
    question: "Which RAID level value must be used with Linux software RAID in order to create an array of mirrored devices?",
    type: "opcion",
    answers: ["A. 5", "B. 1", "C. mirrorstripe", "D. 6", "E. container"],
    correct: 1
  },
  {
    question: "What are the possible values to node.startup in the iscsid.conf file? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. iniciate", "B. login", "C. automatic", "D. manual", "E. discover"],
    correct: [3, 2]
  },
  {
    question: "Which of the following is an example of a path to a Linux software RAID array?",
    type: "opcion",
    answers: ["A. /dev/md1", "B. /dev/rd1", "C. /dev/pr0", "D. /dev/raid0"],
    correct: 0
  },
  {
    question: "Which processes contribute to the percentage of time that the CPU spent in the state of wa, according to the following output from top?",
    type: "opcion",
    answers: ["A. Processes that have not been scheduled yet because they haven´t been fully loaded into RAM or are in swap", "B. Processes waiting for user interaction.", "C. Processes waiting for IO operations to complete.", "D. Processes that were already closed and are waiting to be launched again."],
    correct: 2
  },
  {
    question: "Which two LVM commands are missing from the following sequence which is used to create, format, mount and make use of a logical volume?\nPvcreate, ____________________, _____________, mkfs, mount",
    type: "opcion",
    answers: ["A. lvmcreate, vgcreate", "B. vgcreate, mdadm", "C. vgcreate, lvcreate", "D. lvcreate, mdadm", "E. lvcreate, vgcreate"],
    correct: 2
  },
  {
    question: "A server requires a GRUB2 boot option which will always boot to runlevel 1. Which command in a GRUB2 configuration file starts the beginning of the settings needed to make this new choice available?",
    type: "opcion",
    answers: ["A. runlevel", "B. menuentry", "C. initrd", "D. linux"],
    correct: 1
  },
  {
    question: "Which type systemd unit types provides a functionality similar to SysV init runlevels?",
    type: "opcion",
    answers: ["A. target", "B. destination", "C. level", "D. service", "E. mode"],
    correct: 0
  },
  {
    question: "A system with SysV-init has a service installed called apache2. Which file controls the start and stop of this service and is referenced by the various runlevel directories?",
    type: "opcion",
    answers: ["A. /etc/rc2.d/70apache2", "B. /etc/rc2.d/apache2", "C. /etc/rc2.d/apache2.start", "D. /etc/init.d/apache2"],
    correct: 3
  },
  {
    question: "During booting, when the Linux kernel loads an initramfs file, which command from the initramfs will be executed first, if present?",
    type: "opcion",
    answers: ["A. /linuxrd", "B. /init", "C. /sbin/init", "D. /initrd", "E. /rc.local"],
    correct: 1
  },
  {
    question: "What is the functionality that PXE provides?",
    type: "opcion",
    answers: ["A. The ability to verify a system´s configuration after completing the process.", "B. The ability to launch a remote X11 desktop on a computer.", "C. The ability to verify a system´s configuration before completing the boot process.", "D. The ability to boot a computer using its network interface."],
    correct: 3
  },
  {
    question: "Which of the following file systems can be used when preparing an EFI System Partition (ESP)?",
    type: "opcion",
    answers: ["A. Btrfs", "B. ext4", "C. XFS", "D. FAT32", "E. CramFS"],
    correct: 3
  },
  {
    question: "Which of the following items are alternate Linux boot loaders? (Choose THREE correct answers.)",
    type: "varias",
    answers: ["A. UEFILINUX", "B. ISOLINUX", "C. PXELINUX", "D. NTLINUX", "E. SYSLINUX"],
    correct: [4, 2, 1]
  },
  {
    question: "Which of the following tools assist in capacity planning by listing and identifying Linux processes of interest? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. acpid", "B. telinit", "C. pstree", "D. lsof", "E. lsproc"],
    correct: [3, 2]
  },
  {
    question: "The main configuration file for autofs has this entry:\n/home /etc/auto.home\nWhat is the meaning of the /etc/auto.home file?",
    type: "opcion",
    answers: ["A. It has configuration information, such as passwords and keys, for the remote file server.", "B. It has the indirect maps for the mounting of file systems", "C. It is the holds the SSL key to allow authentication to the remote file server.", "D. It has configuration information on setting for the /home mount point"],
    correct: 1
  },
  {
    question: "When doing automated file system checks during system startup, what value is typically used for the system in the last field (fsck order) of /etc/fstab?",
    type: "opcion",
    answers: ["A. A value of 2 (two) is used.", "B. A value of 0 (zero) is used.", "C. A value of 1 (one) is used.", "D. It is left blank", "E. The value depends on how many root filesystems are present."],
    correct: 2
  },
  {
    question: "Which of the following commands displays the UUID, label and type for all partitions and volumes of a Linux system?",
    type: "opcion",
    answers: ["A. blkid", "B. blkinfo", "C. blkls", "D. lsmount", "E. lsdevs"],
    correct: 0
  },
  {
    question: "Which of the following are common Linux filesystem types used for root partitions? (Choose THREE correct answers.)",
    type: "varias",
    answers: ["A. XFS", "B. Btrfs", "C. NTFS", "D. VFAT", "E. ext4"],
    correct: [4, 0, 1]
  },
  {
    question: "Which files are updated as devices are mounted and unmounted to provide information on the currently mounted devices and the options used?",
    type: "opcion",
    answers: ["A. /proc/dtab", "B. /etc/fstab", "C. /etc/mtab", "D. /proc/mounts", "E. /proc/devices"],
    correct: 2
  },
  {
    question: "Where would fsck put any unreferenced file or file fragments on a ext4 filesystem?",
    type: "opcion",
    answers: ["A. lost", "B. recover", "C. lost+found", "D. back"],
    correct: 2
  },
  {
    question: "How many different passwords can be used for a LUKS partition at the same time?",
    type: "opcion",
    answers: ["A. 4", "B. 8", "C. 64", "D. 16", "E. 32"],
    correct: 1
  },
  {
    question: "What is the correct order of the fields in the /etc/fstab file?",
    type: "opcion",
    answers: ["A. mount point; device name; filesystem type; mount options; dump filesystem;fsck order", "B. device name; mount point; mount options; filesystem type; dump filesystem;fsck order", "C. device name; filesystem type; mount point; mount options; dump filesystem;fsck order", "D. mount point;filesystem type; device name; mount options; dump filesystem;fsck order", "E. device name; mount point; filesystem type; mount options; dump filesystem;fsck order"],
    correct: 4
  },
  {
    question: "Which of the following is a side effect of extensive usage of swap space?",
    type: "opcion",
    answers: ["A. The overall system performance may degrade because os heavy hard disk use and memory reorganization.", "B. Applications need to restart because their virtual memory addresses change to reflect memory relocation to the swap address area.", "C. The root filesystem may become full because swap space is always located on the system´s root partition.", "D. Since processes always exist completely in either RAM or swap, regular RAM may become unused if the kernel does not move processes back from the swap space to memory.", "E. The memory may become fragmented and slow down the access to memory pages. However this can be kept to a minimum by the regular use os memfrag   -d"],
    correct: 0
  },
  {
    question: "In order to monitor the operations of a web application cluster, a special web page has been created on all application server which outputs either OK OF FALLURE, based on the current health of the respective server. Which of following tools provides capabilities to regularly query these web pages and generate an alert in case one or more application servers are in a failed state? (Choose TWO correct answers).",
    type: "varias",
    answers: ["A. Cacti", "B. Icinga 2", "C. collectd", "D. MRTG", "E. Nagios"],
    correct: [4, 1]
  },
  {
    question: "Which of the following are possible names for the first logical volume named vo101 in the volume group vg01 on a Linux system? (Choose THREE correct answers.)",
    type: "varias",
    answers: ["A. /dev/md-0", "B. /dev/mapper/vg01-vo101", "C. /dev/vg01/vo101", "D. /dev/mapper-vg01-vo11", "E. /dev/dm-0"],
    correct: [4, 1, 2]
  },
  {
    question: "In the following output of the command uptime, what is the 5 minute load average for the system?\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31",
    type: "opcion",
    answers: ["A. There is no 5 minute interval. It is some value between 0.47 and 24.71", "B. 24.71", "C. 0.47", "D. There is no 5 minute interval. It is some value between 24.71 and 35.31", "E. 35.31"],
    correct: 1
  },
  {
    question: "Which of the following tools can be used to collect capacity planning data? (Select TWO corrects answers.)",
    type: "varias",
    answers: ["A. sysio", "B. hwtop", "C. psstat", "D. sar", "E. iostat"],
    correct: [4, 3]
  },
  {
    question: "What is a key difference between a zImage and bzImage kernel image?",
    type: "opcion",
    answers: ["A. zImage is limited to 512k, bzImage has no such restriction.", "B. zImage is limited to 64k, bzImage has no such restriction.", "C. zImage is compressed using gzip, bzImage is compressed using bzip2", "D. zImage is for 2.6 series kernels, bzImage is for 3.x series kernels and later."],
    correct: 0
  },
  {
    question: "Which command is used to unload a single module currently loaded by the kernel without unloading any modules that it depends upon? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "rmmod"
  },
  {
    question: "What command can be used to place a file into a specified position within the file system tree and set owner, group and permissions with just one invocation? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "install"
  },
  {
    question: "Which file contains the message that is displayed above the login prompt of the system console? (Specify the full name of the file, including path.)",
    type: "escribir",
    correct: "/etc/issue"
  },
  {
    question: "A multihomed server shows the following output when using the command ip route show:\nDefault via 192.168.0.1 dev wwan0 proto static metric 50\nDefault via 192.168.1.1 dev wwan1 metric 500\n192.168.0.0/24 dev wwan0 proto kernel scope link src 192.168.0.2 linkdown\n192.168.1.0/24 dev wwan1 proto kernel scope link src 192.168.1.2 metric 500\nWhich interface is used to route packages to 192.168.3.1? (Specify ONLY the interface name)",
    type: "escribir",
    correct: "wwan0"
  },
  {
    question: "What is the default sub-command of the command ip addr when no sub-command such as add or del is provided at the command line? (Specify ONLY the sub command without any parameters.)",
    type: "escribir",
    correct: "show"
  },
  {
    question: "What command is used to add an additional physical volume to a volume group? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "vgextend"
  },
  {
    question: "Which systemd command finds and displays overridden systemd configuration file? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "systemd-delta"
  },
  {
    question: "In which directory is the GRUB 2 configuration file grub.cfg stored? (Specify the full path to the directory.)",
    type: "escribir",
    correct: "/boot/grub2"
  },
  {
    question: "Which command is used to retrieve SMART values from a hard disk? (Specify ONLY without any path or parameters.)",
    type: "escribir",
    correct: "smartctl"
  }
];