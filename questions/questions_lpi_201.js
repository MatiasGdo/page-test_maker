Pregunta 1
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the minimum number of disks required in a RAID5 array?

Seleccione una:
a. 2
b. 5
c. 4
d. 3
e. 1
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: 3
Pregunta 2
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Due to extreme system use, a Linux system requires some additional swap space. To initialize 5GB of additional swap space, which combination of commands should be used?

Seleccione una:
a. touch -5G /tmp/swapfile; swapon /tmp/swapfile
b. mkswap /tmp/swapfile 512000; swapon /tmp/swapfile
c.
dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; mount /tmp/swapfile

d.
dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon /tmp/swapfile

e. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; swapon /tmp/swapfile
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es:
dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon /tmp/swapfile

Pregunta 3
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
How can the label root be added to the ext2 filesystem on /dev/sda1?

Seleccione una:
a. labelfs --device /dev/sda1 root
b. tune2fs -L root /dev/sda1
c. echo 'root' > /proc/fs/sda1/label
d. relabel /dev/sda1 root
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: tune2fs -L root /dev/sda1
Pregunta 4
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following is a CD-ROM filesystem standard?

Seleccione una:
a. ROM-EO
b. ISO9660
c. OSI9660
d. ISO8859
e. SR0FS
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: ISO9660
Pregunta 5
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which single command will simulate a failed device within a RAID 5 array?

Seleccione una:
a. mdadm --force-fault /dev/md2 /dev/sde2
b. mdadm --remove /dev/md0 /dev/sdd1
c. mdadm --zero-superblock /dev/sdf3
d. mdadm /dev/md0 --offline /dev/sdc1
e. mdadm --fail /dev/md0 /dev/sdc1
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: mdadm --fail /dev/md0 /dev/sdc1
Pregunta 6
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A system has one hard disk and one CD writer which are both connected to SATA controllers. Which device represents the CD writer?

Seleccione una:
a. /dev/scd1
b. /dev/sr1
c. /dev/sr0
d. /dev/sdd
e. /dev/hdb
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /dev/sr0
Pregunta 7
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
The following is an excerpt from the output of tcpdump -nli eth1:

 

13:03:17.277327 IP 192.168.123.5.1065 > 192.168.5.112.21: Flags [.],

ack 1 (truncated)

13:03:17.598624 IP 192.168.5.112.21 > 192.168.123.5.1065: Flags [P.],

seq (truncated)

 

Which network service or protocol was used?

Seleccione una:
a. DNS
b. SSH
c. FTP
d. DHCP
e. HTTP
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: FTP
Pregunta 8
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A network client has an ethernet interface (eth0) configured with an IP address in the subnet 192.168.0.0/24. This subnet has a router, with the IP address 192.168.0.1, that connects this subnet to the Internet. What needs to be done on the client to enable it to use the router as its default gateway? (Choose TWO correct answers.)

Seleccione una o más de una:
a. echo defaultroute 192.168.0.1 >> /etc/resolv.conf
b. ip route add default via 192.168.0.1 dev eth0
c. route add default gw 192.168.0.1 eth0
d. ifconfig eth0 defaultroute 192.168.0.1
e. route add defaultgw=192.168.0.1 if=eth0
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: route add default gw 192.168.0.1 eth0, ip route add default via 192.168.0.1 dev eth0
Pregunta 9
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which commands below are useful to collect data about remote filesystem connections? (Choose TWO correct answers.)

Seleccione una o más de una:
a. cifsiostat
b. pidstat
c. sadf
d. nfsiostat
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: nfsiostat, cifsiostat
Pregunta 10
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What should be done to ensure a client machine uses the recursive nameserver running on the IP address 192.168.0.1? (Choose TWO correct answers.)

Seleccione una o más de una:
a. Run route add nameserver 192.168.0.1.
b. Run ifconfig eth0 nameserver 192.168.0.1.
c. Ensure that the dns service is listed in the hosts entry in the /etc/nsswitch.conf file.
d. Add nameserver 192.168.0.1 to /etc/resolv.conf.
e. Run bind add nameserver 192.168.0.1.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Add nameserver 192.168.0.1 to /etc/resolv.conf., Ensure that the dns service is listed in the hosts entry in the /etc/nsswitch.conf file.
Pregunta 11
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following files will be looked for and used by GNU make, if one of them exists, unless a different file is specified on the command line when trying to compile software from source code? (Choose TWO correct answers.)

Seleccione una o más de una:
a. makefile
b. config.h.in
c. Makefile
d. configure
e. Makefile.in
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: makefile, Makefile
Pregunta 12
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A regular user, joe, has just run:

 ./configure && make && make install

 to build and install a program. However, the installation fails. What could be done to install the program? (Choose TWO correct answers.)

Seleccione una o más de una:
a. Do not run ./configure in order to maintain the default configuration for correct installation.
b. Run make install with root privileges.
c. Install the binaries manually with suinstall.
d. Run make install_local to install into /usr/local/.
e. Rerun ./configure with a --prefix option where the user has permissions to write.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Run make install with root privileges., Rerun ./configure with a --prefix option where the user has permissions to write.
Pregunta 13
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
How is the source code for the main Linux kernel modules distributed?

Seleccione una:
a. The kernel modules are downloaded on demand as they are used during compilation.
b. It is provided as a separate download alongside the Linux kernel source code of the same version.
c. It is included with the Linux kernel source code.
d. The kernel modules have their own release cycle and can be maintained separately from the Linux kernel source.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It is included with the Linux kernel source code.
Pregunta 14
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What component of a system does smartd monitor?

Seleccione una:
a. Hard drives
b. RAM
c. Ethernet traffic
d. CPU
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Hard drives
Pregunta 15
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What action should be performed after increasing the size of a logical volume?

Seleccione una:
a. Run vgresize.
b. Remount the logical volume.
c. Increase the size of the filesystem used for the logical volume.
d. Run lvresize.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Increase the size of the filesystem used for the logical volume.
Pregunta 16
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
The following command has just been run successfully:

 

cd /opt; tar xvf /dev/nst0;

 

What will happen if the command sequence is run again?

Seleccione una:
a. The entire contents of /opt will be replaced with the contents of the next file on the tape.
b. The contents of /opt will have additional content added from the next file on the tape.
c. The contents of /opt will be restored again.
d. An error saying that there is no tape present is generated because the tape has been ejected after being used.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: The contents of /opt will have additional content added from the next file on the tape.
Pregunta 17
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In order to gather performance data with sar over a longer period of time, which command should be run periodically from cron?

Seleccione una:
a. sarec
b. sadf
c. sarmon
d. sa1
e. sarcron
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: sa1
Pregunta 18
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In which directory tree are files modified when changing kernel parameters using the command sysctl?

Seleccione una:
a. /sys/kernel/
b. /sys/proc/
c. /lib/sys/
d. /proc/kernel/
e. /proc/sys/
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /proc/sys/
Pregunta 19
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In the following output, the load averages represent the system load averages for what time frames?

 

# uptime

12:10:05 up 18 days, 19:00, 2 users, load averagE. 0.47, 24.71, 35.31

Seleccione una:
a. 1, 15 and 30 minutes
b. 1, 5 and 15 minutes
c. 15, 30 and 60 minutes
d. 15, 30 and 60 seconds
e. 1, 15, and 30 seconds
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: 1, 5 and 15 minutes
Pregunta 20
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What information is found in the following excerpt from the file /proc/mdstat? (Choose two.)



Seleccione una o más de una:
a. The information [3/2] means that 3 RAID disks belong to the array and 2 disks are spare. Together they equal the number of available disks
b. The spare disk /dev/sda1 is used to restore full redundancy after the current recovery
c. One of the disks in /dev/md0 has failed and a spare disk is used to recreate full redundancy
d. The information [UU_] means, that the raid is missing one disk and is not fully redundant
e.
The device is using version 1.2 metadata to allow LILO and GRUB Legacy to use /dev/md0 as the boot partition.This would not have been necessary with GRUB2

Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: One of the disks in /dev/md0 has failed and a spare disk is used to recreate full redundancy, The information [UU_] means, that the raid is missing one disk and is not fully redundant
Pregunta 21
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command is used to make an exact copy, at a single point in time, of a logical volume while still allowing the original logical volume to be updated?

Seleccione una:
a. lvsnapshot
b. lvm2
c. lvcclone
d. lvcreate
e. lvsnap
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: lvcreate
Pregunta 22
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands shows capabilities and usable frequencies for the wireless interface wlan0?

Seleccione una:
a. iw phy pyh0 info
b. iw dev wlan0 show
c. iw phy wlan0 show
d. iw phy0 show
e. iw dev wlan0 info
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: iw dev wlan0 info
Pregunta 23
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What effect does the -f option to the update-rc.d command have on files in the /etc/rcX.d/ and /etc/init.d/ directories?

Seleccione una:
a. It will remove the init script in /etc/init.d/ and the symlinks in /etc/rcX.d/ and update the package information of installed files
b. It will remove both the symlinks in /etc/rcX.d/ and the init script in /etc/init.d/
c. It will force the removal of the symlinks in /etc/rcX.d/ even when the links are read only
d. It will force the removal of symlinks in /etc/rcX.d/ even if the corresponding init script still exists in /etc/init.d/
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It will force the removal of symlinks in /etc/rcX.d/ even if the corresponding init script still exists in /etc/init.d/
Pregunta 24
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands lists IPv4 addresses and MAC addresses of network nodes that the local system has seen on its directly connected IP networks?

Seleccione una:
a. ipadm
b. ifconfig
c. arp
d. iwlist
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: arp
Pregunta 25
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands restores only those files containing lpi in their name from the archive lpifiles.tar.gz?

Seleccione una:
a. tar -xvfz lpifiles.tar.gz --deep `*lpi*'
b. tar xvzwf lpifiles.tar.gz `*lpi*'
c. tar xvzf lpifiles.tar.gz --globbing `*lpi*'
d. tar xvzf lpifiles.tar.gz --wildcards `*lpi*'
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: tar xvzf lpifiles.tar.gz --wildcards `*lpi*'
Pregunta 26
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which sub command to crypsetup shows information about an encrypted LUKS partition?

Seleccione una:
a. luksDebug
b. luksShow
c. luksDump
d. luksInfo
e. luksLS
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: luksDump
Pregunta 27
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In the output of sar -b, what does tps stand for?

Seleccione una:
a. Terrabit per second
b. Transfers per second
c. Traffic per second
d. Total data per second
e. Terrabyte per second
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Transfers per second
Pregunta 28
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following properties should be recorded in order to monitor the quality of a network link? (Choose two.)

Seleccione una o más de una:
a. Number of used TCP ports
b. Bandwidth in both directions
c. Number of nodes using the link
d. Number of IPv4 and IPv6 packets
e. Effective Latency
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Bandwidth in both directions, Effective Latency
Pregunta 29
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands displays the physical path of the kernel module named dummy?

Seleccione una:
a. modinfo •n dummy
b. depmod •n dummy
c. modpath •v dummy
d. modshow •p dummy
e. modprobe •i dummy
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: modinfo •n dummy
Pregunta 30
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands will provide the PIDs of the processes sorted by which are using the most CPU cycles on the Linux system?

Seleccione una:
a. top
b. ps aux
c. vmstat
d. freemem
e. uptime
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: top
Pregunta 31
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command is used to install a GRUB boot loader into the master boot record?

Seleccione una:
a. grub-mkconfig
b. grub-glue-mbr
c. grub-install-mbr
d. grub-install
e. grub-mbr-setup
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: grub-install
Pregunta 32
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
After manually compiling and installing a new kernel, what has to be done regarding the initramfs?

Seleccione una:
a. During the compilation of the Linux kernel, a new initramfs is built automatically. The new initramfs only needs to be installed
b. The system should be restarted since the initramfs reconfigures itself for the new kernel during the startup of the system
c. Since the initramfs contains kernel modules, a new initramfs must be built for the new kernel
d. To initramfs is independent of the kernel and should not be modified unless the hardware configuration of the machine has changed
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Since the initramfs contains kernel modules, a new initramfs must be built for the new kernel
Pregunta 33
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following is a userspace application used to modify EFI entries on a Linux system?

Seleccione una:
a. efimanager
b. efieditor
c. configefi
d. efibootedit
e. efibootmgr
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: efibootmgr
Pregunta 34
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
On a Linux node with multiple active networks interfaces, each having a default route to the Internet, which default route is preferred?

Seleccione una:
a. The default route with the highest MTU value
b. The default route with the highest TTL value
c. The default route with the lowest metric value
d. The default route with the highest metric value
e. The default route with the lowest TTL value
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: The default route with the lowest metric value
Pregunta 35
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands creates a Btrfs subvolume named volume in/mnt?

Seleccione una:
a. btrfs subvolume create /mnt/volume
b. btrfs create subvolume /mnt volume
c. btrfs subvolume new volume /mnt
d. btrfs-subvolume create /mnt/volume
e. btrfs subvolume add -n volume /mnt
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: btrfs subvolume create /mnt/volume
Pregunta 36
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the filter keywords below could be used in the following command:

tcpdump •i eth0                                               203.0.113.8 (Choose three.)

Seleccione una o más de una:
a. ip
b. src
c. host
d. dst
e. ipv6
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: host, src, dst
Pregunta 37
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands adds a static IPv6 address to the network interface eth0?

Seleccione una:
a. ip -6 add addr 2001:db8::1337/64 dev eth0
b. ip addr add 2001:db8::1337/64 dev eth0
c. ip -6 addr add 2001:db8::1337/64 dev eth0
d. ip add addr 2001:db8::1337/64 dev eth0
e. ip addr add -6 2001:db8::1337/64 dev eth0
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: ip -6 addr add 2001:db8::1337/64 dev eth0
Pregunta 38
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A Linux server running systemd booted to rescue.target for maintenance.

Which commands are used to restore the server to its usual target? (Choose two.)

Seleccione una o más de una:
a. systemctl emergency
b. telinit 0
c. systemctl reboot
d. systemctl default
e. sync
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: systemctl default, systemctl reboot
Pregunta 39
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the purpose of an initramfs during the Linux system start?

Seleccione una:
a. It copies the root file system's content to RAM to speed up the system and reduce writes to disk
b. It creates a ram disk to store volatile data for directories like /tmp to reduce writes to disk
c. It loads required modules and starts sub sytems like LVM to make the root file system accessible to the kernel
d. It moves the kernel from normal system memory to initram memory to speed up kernel access
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It loads required modules and starts sub sytems like LVM to make the root file system accessible to the kernel
Pregunta 40
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands erases the contents of the /dev/sdb3 partition?

Seleccione una:
a. umount /dev/sdb3
b. dd of=/dev/zero if=/dev/sdb3
c. rm /dev/sdb3
d. dd if=/dev/zero of=/dev/sdb3
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: dd if=/dev/zero of=/dev/sdb3
Pregunta 41
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command will report information on memory usage, paging and block input/output?

Seleccione una:
a. Memshow
b. Ps
c. Free
d. Top
e. Vmstat
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Vmstat
Pregunta 42
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following configuration files are used by tcpwrapper?

Seleccione una:
a. /etc/tcpd.allow and etc/tcpd.deny
b. /etc/service.allow and /etc/service.deny
c. /etc/hosts.allow and /etc/hosts.deny
d. /etc/tcpwrapper.allow and /etc/tcpwrapper.deny
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /etc/hosts.allow and /etc/hosts.deny
Pregunta 43
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the purpose of a system mount unit?

Seleccione una:
a. It is created by the command systemd-fstab-generator to integrate entries from /etc/fstab into the system boot process
b. It is used only to mount network file systems to local mount points. It cannot be used for local media
c. It is used by the command mount when using system to mount and unmount file systems
d. It is used by the command systemd-mount and allows users to mount partitions to mount points of their choice
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It is used by the command systemd-mount and allows users to mount partitions to mount points of their choice
Pregunta 44
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
After the downloading patch-4.6.4.xz from http://kernel.org, what are the next steps to prepare the build of a version 4.6.4 Linux kernel? (Choose two.)

Seleccione una o más de una:
a. Uncompress the file using xz to get the uncompressed patch file
b. Use patch to apply the uncompressed patch file to the source directory of any previous kernel version
c. Apply the patch file to the kernel source directory containing kernel version 4.6.0
d. Uncompress the file and move the resulting directory to /usr/src/linux
e. Apply the patch file to the kernel source directory containing kernel version 4.6.3
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Apply the patch file to the kernel source directory containing kernel version 4.6.0, Uncompress the file using xz to get the uncompressed patch file
Pregunta 45
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following init systems comes along with an own UEFI boot loader?

Seleccione una:
a. systemd
b. SysVinit
c. OpenRC
d. Upstart
e. launchd
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: systemd
Pregunta 46
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
If the file containing the Linux kernel is deleted, what happens when the system boots?

Seleccione una:
a. Instead of the kernel, the initramfs is loaded and instructed to mount the root filesystem and reinstall the kernel from the original package or from source
b. The system starts normally since the bootloader copies the kernel to the master boot record of the hard disk
c. The bootloader mounts the root filesystem read-only and launches /bin/sh directly in order to allow the
administrator to reinstall the kernel
d. Without a kernel system cannot boot and, depending on the bootloader, an error is displayed
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Without a kernel system cannot boot and, depending on the bootloader, an error is displayed
Pregunta 47
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A web application server contains 64GB of RAM and two swap partitions on normal hard disk drives, each with a size of 64 GB. Within the last month, the average number of user sessions on this server has grown by 20 percent. At the same time, the average usage of RAM increased from 65 to 75 percent, while the swap space is almost not used at all. It is expected that the number of user sessions will continue to increase by about 15 to 20 percent each month. Which of the following reactions would be appropriate in response to these observations? (Choose two.)

Seleccione una o más de una:
a. Consider the installation of an additional application server to distribute the load if the expected growth continues over several months
b. Move the web application's scripts and content a ram disk in order to ensure fast access and to avoid the need for swap space
c. Delay any hardware upgrade until there is a significant consumption of swap space to ensure an efficient usage of the available hardware
d. Update the hardware to increase the amount of available RAM to avoid using swap space
e. Create a RAID 1 device on the two swap partitions to avoid data loss in case swap space has to be used in the future
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Consider the installation of an additional application server to distribute the load if the expected growth continues over several months, Update the hardware to increase the amount of available RAM to avoid using swap space
Pregunta 48
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
On a server running the 3.4.50-11 Linux kernel, which file in the /boot directory contains the kernel configuration parameters?

Seleccione una:
a. rc.config-3.4.50-11
b. vmlinuz-3.4.50-11
c. config-3.4.50-11
d. config-linux-3.4.50-11
e. system-3.4.50-11
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: config-3.4.50-11
Pregunta 49
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the correct parameter to pass to the kernel at boot time to force it to use only one of the available processors?

Seleccione una:
a. smpcpus=1
b. vcpumx=1
c. maxcpus=1
d. usecpus=1
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: maxcpus=1
Pregunta 50
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the purpose of the command udevadm monitor?

Seleccione una:
a. It communicates with D-Bus to setup new devices.
b. It monitors the udev process and prints performance statistics to the console.
c. It listens to kernel events produced by a udev rule and print information to the console.
d. It monitors the /dev directory for new devices.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It listens to kernel events produced by a udev rule and print information to the console.
Pregunta 51
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What keyword is missing in the following line from /etc/fstab in order to make a USB flash device writeable by the user fred when mounted:

 

/dev/sda1 /mnt/usbflash vfat defaults,users,      =fred,umask=022, 0 0

 

(Provide the option name only without any settings)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: uid
Pregunta 52
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What command will remove a physical volume from a volume group? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: vgreduce
Pregunta 53
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which program lists information about files and network connections opened by processes? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: lsof
Pregunta 54
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
The users of the local network complain that name resolution is not fast enough. Enter the command, without the path or any options, that shows the time taken to resolve a DNS query.

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: dig
Pregunta 55
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What command discards unused blocks on a mounted file system in order to support SSD devices? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: fstrim
Pregunta 56
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What command ensures that the file systems are written to disk after a lot of write operations? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: sync
Pregunta 57
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which directory contains system-specific systemd unit files? (Specify the full path to the directory.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: /lib/systemd/system
Pregunta 58
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which is the main configuration file for the SystemV init process? (Specify the full name of the file, including path.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: /etc/inittab
Pregunta 59
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What command is used to send messages to all users currently logged in? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: wall
Pregunta 60
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
After installing a compiled kernel, it can not find any modules that are needed to be loaded. What make target was likely missed while installing the kernel?

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: modules_install

Pregunta 1
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
When is historical data of resource usage important? (Select THREE correct answers.)

Seleccione una o más de una:
a. Identifying processes killed during out of memory occurrences.
b. Predicting when resources will need to be increased.
c. Diagnosing capacity problems.
d. Troubleshooting a software problem.
e. Selecting a computer vendor.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Predicting when resources will need to be increased., Diagnosing capacity problems., Troubleshooting a software problem.
Pregunta 2
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In order to display information about the hardware of a Linux system, which of the following commands can be used? (Choose THREE correct answers.)

Seleccione una o más de una:
a. lsusb
b. lsdev
c. lsmem
d. lskvm
e. lspci
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: lsdev, lsusb, lspci
Pregunta 3
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following terms are used to describe 3.x and 4.x kernel releases? (Choose THREE correct answers.)

Seleccione una o más de una:
a. stable
b. longterm
c. releasecandidate
d. prerelease
e. beta
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: longterm, releasecandidate, stable
Pregunta 4
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands changes into the directory which contains the modules of the running kernel?

Seleccione una:
a. cd  /lib/modules/$ (kernel  -v)
b. cd  /lib/modules/ current
c. cd  /lib/modules/ running
d. cd  /lib/modules/$ (uname  -r)
e. cd  /lib/modules/$  (uptime  -k)
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: cd  /lib/modules/$ (uname  -r)
Pregunta 5
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which compression formats can be used to create initramfs images? (Choose TWO correct answers.)

Seleccione una o más de una:
a. bzip2
b. rar
c. gzip
d. cpio
e. arc
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: gzip, bzip2
Pregunta 6
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command can be used to add upgrades or updated code to the kernel source code from a file generated by the command  diff?

Seleccione una:
a. patch
b. upgrade-kernel
c. upgrade
d. kernel.update
e. patch-kernel
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: patch
Pregunta 7
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
How can the kernel parameter for the maximum size of the shared memory segment (shmmax) be changed to 2 GiB (2,147,483,648 Bytes) on a running system? (Choose TWO correct answers.)

Seleccione una o más de una:
a. Edit / etc/shmmax and set the parameter to 2147483648
b. export  kernel . shmmax=2147483648
c. sysctl  shmmax=2147483648
d. sysctl  -w  kernel . shmmax=2147483648
e. echo  2147483648 >  /proc/sys/kernel/shmmax
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: sysctl  -w  kernel . shmmax=2147483648, echo  2147483648 >  /proc/sys/kernel/shmmax
Pregunta 8
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the command  mt  used for?

Seleccione una:
a. It is used to mount SCSI tape drives.
b. It positions a SCSI tape to a specified position.
c. It formats SCSI tapes to be used with  tar.
d. It marks an SCSI tape with a unique identifier (UUID)
e. It is an replacement for  dd  to write data to SCSI tape drives.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It positions a SCSI tape to a specified position.
Pregunta 9
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands securely copies the directory. /fyf /to /var/tmp/ on the remote host  deltaur  using the remote user account  alice?

Seleccione una:
a. rsync  -a  -e  ssh  fyf/  alice@deltaur:/var/tmp
b. rsync  -a  -u  alice  -e  ssh  fyf/  deltaur:/var/tmp/
c. rsync  -a  -u  alice  -e  ssh  deltaur:/var/tmp/  fyf/
d. rsync  -a  -e  ssh  alice@deltaur:/var/tmp/  fyf/
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: rsync  -a  -e  ssh  fyf/  alice@deltaur:/var/tmp
Pregunta 10
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Why should the command zip not be used to created backups from Linux file systems?

Seleccione una:
a. It does not exist for the Linux operating system.
b. It can only stores files up to a size of 1 GiB and is therefor not suitable for large Linux files
c. It does not store ownership and rights.
d. It can only be used to compress single files but not for directory structures.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It does not store ownership and rights.
Pregunta 11
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In the following output from the command vmstat  1  100, what percentage of t ime was the CPU waiting for pending I/O?
Procs   -----------------------memory------------------------     -----swap-----      -----io-----     ------systetm------        -------------cpu------------

r          b      swpd            free                 buff               cache             si        so          bi         bo            in             cs                     us        sy       id         wa

0         0                0    282120     134108            5797012            0         0          0           2                0              0                      0            0       100         0

0         0                0    282120     134108            5797012            0         0          0           0      1 007        359                     0            0       100         0

0         0                0    282120     134108            5797012            0         0          0           0      1 117        577                     0            0       100         0

0         0                0    282120    134108              5797012          0         0          0           0      1 007        366                     0            0       100         0

Seleccione una:
a. 35.9
b. 0
c. 100
d. 57.7
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: 0
Pregunta 12
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following targets are usually included in a makefile that is included in a  source code package?

Seleccione una:
a. clean, install, uninstall
b. prefix, exec_prefix, bindir, mandir
c. CFLAGS, CPPFLAGS, LIBS, LDFLAGS
d. PATHS, DESTDIR, LIBS, LDFLAGS
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: clean, install, uninstall
Pregunta 13
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands can be used to script interactions with various TCP or UDP services?

Seleccione una:
a. wget
b. strings
c. ftp
d. nc
e. tcpdump
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: nc
Pregunta 14
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands lists the IPv4 neighbors of the local system, including IP and MAC addresses?(Choose TWO correct answers.)

Seleccione una o más de una:
a. netstat  -al
b. ip neigh show
c. ifconfig  -lv  eth0
d. arp
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: arp, ip neigh show
Pregunta 15
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command can be used to scan a specified network by looking for IP addresses that appear to be in use?

Seleccione una:
a. nmap
b. hostdiscover
c. tcpdump
d. ip
e. netscan
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: nmap
Pregunta 16
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following actions can be performed with the command hostname? (Choose THREE correct answers.)

Seleccione una o más de una:
a. Display all used host names set in the past, including the current host name.
b. Display all IP addresses associated with the local node.
c. Display all MAC addresses of the local node.
d. Display the local node´s host name including domain.
e. Set a new host name for the local node.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Display the local node´s host name including domain., Set a new host name for the local node., Display all IP addresses associated with the local node.
Pregunta 17
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Under which of the following circumstances would the command ping output the string (DUP!)?

Seleccione una:
a. When the recipient host is on a different network.
b. When the host sending the ICMP packet is the same host as the one receiving the ICMP packets.
c. When the recipient host is running multiple pingd server processes.
d. When the ICMP packets are sent to a broadcast address and multiple hosts respond.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: When the ICMP packets are sent to a broadcast address and multiple hosts respond.
Pregunta 18
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which /etc/hosts.allow entries permit access to sshd for users from the 192.168.1.0/24 subnet? (Choose TWO correct answers.)

Seleccione una o más de una:
a. sshd  :  192.168.1.0
b. sshd  :  192.168.1.0 netmask 255.255.255.0
c. sshd  :  192.168.1
d. sshd  :  192.168.1.0/255.255.255.0
e. sshd  :  192.168.1.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: sshd  :  192.168.1., sshd  :  192.168.1.0/255.255.255.0
Pregunta 19
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following is a side effect of extensive usage of swap space?

Seleccione una:
a. Applications need to restart because their virtual memory addresses change to reflect memory relocation to the swap address area.
b. The root filesystem may become full because swap space is always located on the system`s root partition.
c. The overall system performance may degrade because of heavy hard disk use and memory reorganization.
d. The memory may become fragmented and slow down the access to memory pages. However, this can be kept to a minimum by the regular use of  memfrag  -d
e. Since processes always exist completely in either RAM or swap, regular RAM may become unused if the kernel does not move processes back from the swap space to memory.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: The overall system performance may degrade because of heavy hard disk use and memory reorganization.
Pregunta 20
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands lists all wireless networks visible to the interface wlan0?

Seleccione una:
a. iwlist  scan  wlan0
b. iw  scan  wlan0
c. iwlist  wlan0  scan
d. iw  dev  wlan0  list
e. iw  list  wlan0
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: iwlist  scan  wlan0
Pregunta 21
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following actions ensure that changes become effective after updating the configuration file for syslogd?(Choose TWO correct answers.)

Seleccione una o más de una:
a. Restart syslogd service
b. No action is required, syslogd will notice the updated configuration file after a few minutes.
c. Send the HUP signal to the syslogd process.
d. Run the command syslogd  -u
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Send the HUP signal to the syslogd process., Restart syslogd service
Pregunta 22
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
The following is an excerpt from the output of tcpdump  -nli  eth1  ´tcp´.
 

10:14:07.185495 IP 192.168.0.102.48762 >  169.90.69.235.22: Flags [P.], seq 1482:1498, ack 1689

Win 1207, options [nop,nop,TS val 40635835 ecr  591249725], length 16

10:14:07.227382 IP 192.168.0.102.48762 >  169.90.69.235.22: Flags [P.], seq 1498:1546, ack 1689

Win 1207, options [nop,nop,TS val 40635845 ecr  591249737], length 48

 

Which network service or protocol was most likely used?

Seleccione una:
a. DHCP
b. SSH
c. DNS
d. HTTP
e. FTP
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: SSH
Pregunta 23
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which file in /proc contains information on the status of local software RAID devices?

Seleccione una:
a. /proc/mdstat
b. /proc/raidstatus
c. /proc/raid/status
d. /proc/raidstat
e. /proc/mdstatus
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /proc/mdstat
Pregunta 24
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
The hard drive /dev/sda does not have write caching enabled. Which command is used to enable write caching on /dev/sda?

Seleccione una:
a. hdparm  -W  1  /dev/sda
b. hdparm  –enable-write-cache  /dev/sda
c. hdparm  -c  1  /dev/sda
d. hdparm –wce  1  /dev/sda
e. hdparm  -D  1  /dev/sda
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: hdparm  -W  1  /dev/sda
Pregunta 25
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which RAID level value must be used with Linux software RAID in order to create an array of mirrored devices?

Seleccione una:
a. 5
b. 1
c. mirrorstripe
d. 6
e. container
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: 1
Pregunta 26
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What are the possible values to node.startup in the iscsid.conf file? (Choose TWO correct answers.)

Seleccione una o más de una:
a. iniciate
b. login
c. automatic
d. manual
e. discover
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: manual, automatic
Pregunta 27
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following is an example of a path to a Linux software RAID array?

Seleccione una:
a. /dev/md1
b. /dev/rd1
c. /dev/pr0
d. /dev /raid0
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /dev/md1
Pregunta 28
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which processes contribute to the percentage of time that the CPU spent in the state of  wa, according to the following output from top?

Task:  193  total,     1 running,     190 sleeping,     2 stopped,     0 zombie

Cpu (s) :   0.5%us,   0.3%sy,   0.0%ni,   98.2%id,   1.0%wa,   0.0%hi,   0.0%si,   0.0%sy

Seleccione una:
a. Processes that have not been scheduled yet because they haven´t been fully loaded into RAM or are in swap
b. Processes waiting for user interaction.
c. Processes waiting for IO operations to complete.
d. Processes that were already closed and are waiting to be launched again.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Processes waiting for IO operations to complete.
Pregunta 29
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which two LVM  commands are missing from the following sequence which is used to create, format, mount and make use of a logical volume?

Pvcreate, ____________________,  _____________, mkfs,   mount

Seleccione una:
a. lvmcreate,  vgcreate
b. vgcreate,  mdadm
c. vgcreate,  lvcreate
d. lvcreate,  mdadm
e. lvcreate,  vgcreate
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: vgcreate,  lvcreate
Pregunta 30
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A server requires a GRUB2 boot option which will always boot to reunlevel 1. Which command in a GRUB2 configuration file starts the beginning of the settings needed to make this new choice available?

Seleccione una:
a. runlevel
b. menuentry
c. initrd
d. linux
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: menuentry
Pregunta 31
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which type systemd unit types provides a functionality similar to SysV init runlevels?

Seleccione una:
a. target
b. destination
c. level
d. service
e. mode
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: target
Pregunta 32
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A system with SysV-init has a service installed called apache2. Which file controls the start and stop of this service and is referenced by the various runlevel directories?

Seleccione una:
a. /etc/rc2.d/70apache2
b. /etc/rc2.d/apache2
c. /etc/rc2.d/apache2.start
d. /etc/init.d/apache2
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /etc/init.d/apache2
Pregunta 33
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
During booting, when the Linux kernel loads an initramfs file, which command from the initramfs will be executed first, if present?

Seleccione una:
a. /linuxrd
b. /init
c. /sbin/init
d. /initrd
e. /rc.local
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /init
Pregunta 34
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the functionality that PXE provides?

Seleccione una:
a. The ability to verify a system´s configuration after completing the process.
b. The ability to launch a remote X11 desktop on a computer.
c. The ability to verify a system´s configuration before completing the boot process.
d. The ability to boot a computer using its network interface.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: The ability to boot a computer using its network interface.
Pregunta 35
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following file systems can be used when preparing an EFI System Partition (ESP)?

Seleccione una:
a. Btrfs
b. ext4
c. XFS
d. FAT32
e. CramFS
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: FAT32
Pregunta 36
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following items are alternate Linux boot loaders? (Choose THREE correct answers.)

Seleccione una o más de una:
a. UEFILINUX
b. ISOLINUX
c. PXELINUX
d. NTLINUX
e. SYSLINUX
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: SYSLINUX, PXELINUX, ISOLINUX
Pregunta 37
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following tools assist in capacity planning by listing and identifying Linux processes of interest? (Choose TWO correct answers.)

Seleccione una o más de una:
a. acpid
b. telinit
c. pstree
d. lsof
e. lsproc
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: lsof, pstree
Pregunta 38
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
The main configuration file for autofs has this entry:
 

          /home                    / etc / auto . home

 

What is the  meaning of the  / etc / auto . home file?

Seleccione una:
a. It has configuration information, such as passwords and keys, for the remote file server.
b. It has the indirect maps for the mounting of file systems
c. It is the holds the SSL key to allow authentication to the remote file server.
d. It has configuration information on setting for the  /home  mount point
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: It has the indirect maps for the mounting of file systems
Pregunta 39
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
When doing automated file system checks during system startup, what value is typically used for the system in the last field (fsck order) of  /etc / fstab?

Seleccione una:
a. A value of 2 (two) is used.
b. A value of 0 (zero) is used.
c. A value of 1 (one) is used.
d. It is left blank
e. The value depends on how many root filesystems are present.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: A value of 1 (one) is used.
Pregunta 40
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following commands displays the UUID, label and type for all partitions and volumes of a Linux system?

Seleccione una:
a. blkid
b. blkinfo
c. blkls
d. lsmount
e. lsdevs
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: blkid
Pregunta 41
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following are common Linux filesystem types used for root partitions? (Choose THREE correct answers.)

Seleccione una o más de una:
a. XFS
b. Btrfs
c. NTFS
d. VFAT
e. ext4
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: ext4, XFS, Btrfs
Pregunta 42
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which files are updated as devices are mounted and unmounted to provide information on the currently mounted devices and the options used?

Seleccione una:
a. /proc/dtab
b. /etc/fstab
c. /etc/mtab
d. /proc/mounts
e. /proc/devices
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /etc/mtab
Pregunta 43
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Where would  fsck  put any unreferenced file or file fragments on a ext4 filesystem?

Seleccione una:
a. lost
b. recover
c. lost+found
d. back
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: lost+found
Pregunta 44
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
How many different passwords can be used for a LUKS partition at the same time?

Seleccione una:
a. 4
b. 8
c. 64
d. 16
e. 32
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: 8
Pregunta 45
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the correct order of the fields in the  /etc/fstab  file?

Seleccione una:
a. mount point; device name; filesystem type; mount options; dump filesystem;fsck order
b. device name; mount point; mount options; filesystem type; dump filesystem;fsck order
c. device name; filesystem type; mount point; mount options; dump filesystem;fsck order
d. mount point;filesystem type; device name; mount options; dump filesystem;fsck order
e. device name; mount point; filesystem type; mount options; dump filesystem;fsck order
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: device name; mount point; filesystem type; mount options; dump filesystem;fsck order
Pregunta 46
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following is a side effect of extensive usage of swap space?

Seleccione una:
a. The overall system performance may degrade because os heavy hard disk use and memory reorganization.
b. Applications need to restart because their virtual memory addresses change to reflect memory relocation to the swap address area.
c. The root filesystem may become full because swap space is always located on the system´s root partition.
d. Since processes always exist completely in either RAM or swap, regular RAM may become unused if the kernel does not move processes back from the swap space to memory.
e. The memory may become fragmented and slow down the access to memory pages. However this can be kept to a minimum by the regular use os memfrag   -d
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: The overall system performance may degrade because os heavy hard disk use and memory reorganization.
Pregunta 47
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In order to monitor the operations of a web application cluster, a special web page has been created on all application server which outputs either OK OF FALLURE, based on the current health of the respective server. Which of following tools provides capabilities to regularly query these web pages and generate an alert in case one or more application servers are in a failed state? (Choose TWO correct answers).

Seleccione una o más de una:
a. Cacti
b. Icinga 2
c. collectd
d. MRTG
e. Nagios
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: Nagios, Icinga 2
Pregunta 48
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following are possible names for  the first logical volume named  vo101  in the volume group  vg01 on a Linux system? (Choose THREE correct answers.)

Seleccione una o más de una:
a. /dev/md-0
b. /dev/mapper/vg01-vo101
c. /dev/vg01/vo101
d. /dev/mapper-vg01-vo11
e. /dev/dm-0
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: /dev/dm-0, /dev/mapper/vg01-vo101, /dev/vg01/vo101
Pregunta 49
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In the following output of the command  uptime, what is the 5 minute load average for the system?

12:10:05   up   18 days,  19:00,   2  users,     load average:  0.47,  24.71,  35.31

Seleccione una:
a. There is no 5 minute interval. It is some value between 0.47 and 24.71
b. 24.71
c. 0.47
d. There is no 5 minute interval. It is some value between 24.71 and 35.31
e. 35.31
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: 24.71
Pregunta 50
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which of the following tools can be used to collect capacity planning data? (Select TWO corrects answers.)

Seleccione una o más de una:
a. sysio
b. hwtop
c. psstat
d. sar
e. iostat
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: sar, iostat
Pregunta 51
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is a key difference between a  zImage and  bzImage  kernel image?

Seleccione una:
a. zImage is limited to 512k, bzImage  has no such restriction.
b. zImage is limited to 64k, bzImage  has no such restriction.
c. zImage is compressed using gzip, bzImage is compressed using bzip2
d. zImage is for 2.6 series kernels, bzImage is for 3.x series kernels and kater.
Retroalimentación
Respuesta incorrecta.

La respuesta correcta es: zImage is limited to 512k, bzImage  has no such restriction.
Pregunta 52
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command is used to unload a single module currently loaded by the kernel without unloading any modules that it depends upon? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: rmmod
Pregunta 53
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What command can be used to place a file into a specified position within the file system tree and set owner, group and permissions with just one invocation? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: install
Pregunta 54
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which file contains the message that is displayed above the login prompt of the system console? (Specify the full name of the file, including path.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: /etc/issue
Pregunta 55
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
A multihomed server shows the following output when using the command  ip route show:
Default via 192.168.0.1 dev wwan0   proto static    metric 50

Default via 192.168.1.1 dev wwan1   metric 500

192.168.0.0/24 dev wwan0    proto kernel    scope link    src 192.168.0.2    linkdown

192.168.1.0/24 dev wwan1    proto kernel    scope link    src 192.168.1.2    metric 500

Which interface is used to route packages to 192.168.3.1? (Specify ONLY the interface name)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: wwan0
Pregunta 56
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What is the default sub-command of the command ip addr when no sub-command such as add 0r del is provided at the command line? (Specify ONLY the sub command without any parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: show
Pregunta 57
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
What command is used to add an additional physical volume to a volume group? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: vgextend
Pregunta 58
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which systemd command finds and displays overridden systemd configuration file? (Specify ONLY the command without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: systemd-delta
Pregunta 59
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
In which directory is the GRUB 2 configuration file grub.cfg stored= (Specify the full path to the directory.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: /boot/grub2
Pregunta 60
Sin contestar
Puntúa como 1,00
No marcadasMarcar pregunta
Enunciado de la pregunta
Which command is used to retrieve SMART values from a hard disk? (Specify ONLY without any path or parameters.)

Respuesta: 
Incorrecta
Retroalimentación
La respuesta correcta es: smartctl