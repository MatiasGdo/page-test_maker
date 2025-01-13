// Array de preguntas para el cuestionario
const questions = [
    {
        question: "Which of the following modes for bonding network interfaces uses only one of its member interfaces at a time?",
        answers: ["A. active-backup", "B. balance-xor", "C. 802.3ad", "D. Broadcast", "E. Balance-rr"],
        correct: 0
    },
    {
        question: "Which of the following SMART values indicate that a hardware error happened in the past? (choose TWO correct answers).",
        answers: ["A. Seek_time_Performance", "B. Seek_Error_Rate", "C. Start_Stop_Count", "D. Spin_Up_Time", "E. Reallocated_Sector_Ct"],
        correct: [1, 4]
    },
    {
        question: "What LVM commands adds new physical volumes to an existing volume group? (Specify ONLY the command without any path or parameters)",
        type: "written",
        correct: "vgextend"
    },
    {
        question: "What is the conventional name of the network interface referring to the tagged VLAN 295 on enp0s3?",
        answers: ["A. 295@enp0s3", "B. enp0s3v295", "C. enp0s3/v295", "D. 295(enp0s3)", "E. enp0s3.295"],
        correct: 4
    },
    {
        question: "Which of the following expressions uniquely identifies an Autonomous System (AS)?",
        answers: ["A. 1.100.51.198", "B. B25808bd655d", "C. com.example", "D. AS65538", "E. 1.1.0.0"],
        correct: 3
    },
    {
        question: "Which of the following LVM commands can be used to determine whether an LVM volume is a snapshot of another volume? (Choose TWO correct answers).",
        answers: ["A. lvdisplay", "B. lvdep", "C. vgsnaps", "D. svdisplay", "E. lvs"],
        correct: [0, 4]
    },
    {
        question: "What is the device name of the first partition on the partitionable RAID device /dev/md2?",
        answers: ["A. /dev/md2/part-1", "B. /dev/md21", "C. /dev/md2@a", "D. /dev/md2p1", "E. /dev/md2a"],
        correct: 3
    },
    {
        question: "Which of the following options are present in the ifcfg file of a slave interface within a bonding interface? (Choose TWO correct answers).",
        answers: ["A. PASSIVE", "B. NO_IPADDR", "C. BONDING", "D. MASTER", "E. SLAVE"],
        correct: [3, 4]
    },
    {
        question: "Which of the following RAID levels store parity blocks to restore data in case of a disk failure? (Choose TWO correct answers).",
        answers: ["A. RAID 50", "B. RAID 10", "C. RAID 5", "D. RAID 0", "E. RAID 1"],
        correct: [0, 2]
    },
    {
        question: "Which of the following LVM commands extends the existing logical volume lv1 in the volume group vg0 by 5GB?",
        answers: ["A. lvresize –relative +5G vg0/lv1", "B. lvadd +5G vg0/lv1", "C. lvextend –add 5G vg0/lv1", "D. lvcreate –resize –add 5G vg0/lv1", "E. lvresize –L +5G vg0/lv1"],
        correct: 4
    },
    {
        question: "Which of the following system resources can Monit test? (Choose THREE correct answers).",
        answers: ["A. loadavg (30min)", "B. loadavg (5min)", "C. loadavg (45min)", "D. loadavg (15min)", "E. loadavg (8min)"],
        correct: [0, 2, 3]
    },
    {
        question: "What is defined by the option miimon=100 of the bond kernel module?",
        answers: ["A. A slave interface link is considered down after 100 consecutive transmission errors.", "B. The links of the slave interfaces are checked every 100 milliseconds.", "C. The first bonding interface will be called bond100.", "D. The active slave interface is changed every time 100 packets are transmitted.", "E. At least 100 Mbit/s must be available on a slave interface in order for the interface to become active."],
        correct: 1
    },
    {
        question: "To improve the availability of a web application, multiple web servers have been deployed. Each web server contains a local copy of the web application and all other content needed to serve to the clients. Furthermore, each server runs a local database server, which replicates the contents of the database with the other nodes. An additional node receives all requests to the web application and passes them randomly to one of the backend servers. Which of the following cluster architectures is present in this setup?",
        answers: ["A. Active Passive Cluster", "B. Load Balanced Cluster", "C. Hot Standby Cluster", "D. Shared Disk Cluster", "E. Failover Cluster"],
        correct: 1
    },
    {
        question: "Which of the following concepts is used to decide which nodes may continue to run in a cluster after a split brain situation?",
        answers: ["A. Fencing", "B. Replication", "C. Round robin", "D. Quorum", "E. Load balancing"],
        correct: 3
    },
    {
        question: "Which option in the keepalived configuration defines where requests are sent when no regular backend server is available?",
        answers: ["A. fallback", "B. default_backend", "C. failed_action", "D. catchall", "E. sorry_server"],
        correct: 4
    },
    {
        question: "While setting up a load-balanced HTTP service, Linux Virtual Server was configured with the commands.\nipvsadm –A –t 198.51.100.2:80 –s rr\nipvsadm –a –t 198.51.100.2:80 –r 192.168.10.1:80 -m\nipvsadm –A –t 198.51.100.2:80 –r 192.168.10.2:80 -m\nAll backend servers are using the LVS host as the default router. Which additional command must be issued on the LVS host in order to correctly handle incoming HTTP traffic?",
        answers: ["A. iptables –t nat –Z", "B. echo “1” > /proc/sys/net/ipv4/ip_forward", "C. ipmasq –A 192.168.10.1 –A 192.168.10.2 –p tcp –dport www –j DEMASQ", "D. ipvsadmin –L –n", "E. netstat –r"],
        correct: 1
    },
    {
        question: "What does the acronym VRRP stand for?",
        answers: ["A. Variable Resource Routing Protocol", "B. Virtual Router Redundancy Protocol", "C. Virtual Resource Routing Protocol", "D. Versioned Round Robin Protocol", "E. Very Reliable Resource Protocol"],
        correct: 1
    },
    {
        question: "If one service in a Pacemaker cluster depends on another service running on the same node, which score should be assigned to the constraint describing that dependency?",
        answers: ["A. INFINITY", "B. 1", "C. 0", "D. FORCE", "E. -1"],
        correct: 0
    },
    {
        question: "After running pcs against a local file holding a CIB, how is this CIB applied to Pacemaker cluster?",
        answers: ["A. pcs cluster cib-push", "B. pcs copy", "C. pcs cib replace", "D. pcs configure commit", "E. pcs crmd load"],
        correct: 0
    },
    {
        question: "Which option of ipvsadm displays the current LVS configuration? (Specify ONLY the option name without any values or parameters)",
        type: "written",
        correct: "-L"
    },
    {
        question: "Which of the following HAProxy configuration options defines an ACL that applies to all HTTP request whose target host starts with www?",
        answers: ["A. acl host_www –rx host /^www/", "B. acl host_www hdr_beg(host) –i www", "C. acl host_www host.regex(`www.*´)", "D. acl host_www HTTP_HOST CONTAINS www%", "E. acl host_www host =~ /^www.*/"],
        correct: 1
    },
    {
        question: "In a failover cluster, why does fencing disable the connection of cluster nodes to shared storage?",
        answers: ["A. In order reduce the I/O load of the shared storage device so that enough bandwidth is available for the failover operations following the fencing", "B. In order to grant storage access to the overtaking node as shared storage can be mounted only once at a time.", "C. In order to ensure that failures of the shared storage device does not affect the fenced cluster node.", "D. In order to ensure data integrity which could be compromised in a Split brain situation.", "E. In order to free up space used by the fenced cluster node on the shared storage device."],
        correct: 1
    },
    {
        question: "Which of the following messaging layers are supported by Pacemaker? (Choose correct answers)",
        answers: ["A. Heartbeat", "B. DRBD", "C. Corosync", "D. SCMP", "E. Slurm"],
        correct: [0, 2]
    },
    {
        question: "Which of the following describes Disaster Recovery?",
        answers: ["A. Reverting the contents of a files or database server to a former point in time.", "B. Automatically restarting failed services.", "C. Starting services of a failed node on another healthy cluster node.", "D. Restoring a service after complete outage.", "E. Disconnecting failed cluster nodes from shared resources."],
        correct: 3
    },
    {
        question: "Using Linux Virtual Server (LVS) without any additional tools provides which of the following features?",
        answers: ["A. Checking the integrity of services on backend servers.", "B. Automatically taking over the services of failed nodes.", "C. Balancing network connections across several backend servers.", "D. Starting and stopping backend servers as needed", "E. Restarting failed services on the backend servers."],
        correct: 2
    },
    {
        question: "Which of the following statements are true regarding the determination of the capacity of a high availability cluster? (Choose TWO correct answers)",
        answers: ["A. The overall capacity of all components in the high availability cluster doesn’t have to be larger than the resources needed in a regular non-clustered setup.", "B. In case of the failure of any component, enough resources must remain available to provide all cluster node", "C. Failover clusters can be used to scale a single service beyond the capacity of a single cluster node", "D. The number of nodes in a clusters has no effect on availability as long as the sum of the available computing resources are equal", "E. In regular cluster operation, not all available resources are used."],
        correct: [1, 4]
    },
    {
        question: "Which of the following options exist for clone resources in a Pacemaker cluster? (Choose TWO correct answers)",
        answers: ["A. clone-node-max", "B. clone-max-start", "C. clone-max", "D. clone-max-stop", "E. clone-quorum"],
        correct: [0, 2]
    },
    {
        question: "Why session handling important in a cluster providing HTTP services? (Choose TWO correct answers)",
        answers: ["A. Most load balancers do not pass session cookies on to backend nodes.", "B. The same session data must be available to all nodes that might take over requests from another node.", "C. Users may experience unexpected or inconsistent behavior of a web application then their request is handled by a server that does not have access to their session data.", "D. HTTP is a stateful protocol which disconnects clients when session data is lost", "E. HTTP cookies are always specific to an individual server and need to be reissued after a failover."],
        correct: [1, 2]
    },
    {
        question: "Which one of the following is NOT a valid STONITH device in a Pacemaker cluster?",
        answers: ["A. Ibmhmc", "B. Apcmaster", "C. scsi", "D. ssh", "E. vcenter"],
        correct: 3
    },
    {
        question: "Which of the following statements are true regarding a virtual IP address in the context of keepalived? (Choose TWO correct answers)",
        answers: ["A. The distinct IP addresses of all backend servers are called virtual IP addresses.", "B. Within the whole LVS cluster managed by keepalived, the virtual IP address never appears on any network interface.", "C. Keepalived uses VRRP to ensure the availability of the virtual IP address.", "D. Every server running keepalived has exactly one virtual IP address and cannot have any additional virtual IP addresses.", "E. The virtual IP address is the address to which incoming connections are made in order to reach the load balancer."],
        correct: [2, 4]
    },
    {
        question: "Which of the following commands displays only the resources of the cluster information base of a pacemaker cluster?",
        answers: ["A. cibquery –L resources", "B. cibadmin –R", "C. cib_admin –L resources", "D. cibadmin –Q –o resources", "E. cibquery –o resources"],
        correct: 3
    },
    {
        question: "In the command:\npcs constraint order VHost1IPv4 _____HTTPD\nWhich missing Word is required in order to ensure that the service HTTPD is always started after the service VHost1IPv4?",
        type: "written",
        correct: "then"
    },
    {
        question: "When using HAProxy to load balance requests over a set of web servers, what directive is needed in the HAProxy configuration in order to be able to log the IP address of the client making a request on the backend web servers?",
        answers: ["A. option reverseproxy", "B. option clientlog", "C. option forwardfor", "D. option exposeclient", "E. option requestmeta"],
        correct: 2
    },
    {
        question: "Which of the following statements is true about Corosync rings?",
        answers: ["A. Each Corosync cluster requires at least two redundant rings to function.", "B. Corosync requires an even number of rings to function.", "C. One dedicated ring is required per Corosync node.", "D. Rings always connect two nodes and cannot connect three or more nodes", "E. The first ring has to be number 0."],
        correct: 4
    },
    {
        question: "What command is used to manage RADOS block devices, for example, to create new block devices or clones? (Specify ONLY the command without any path, sub commands or parameters)",
        type: "written",
        correct: "rbd"
    },
    {
        question: "The command ceph health detail creates the following output:\nHEALTH_ERR 1 osds down; 1 pgs degraded; 1 pgs down\n…\nOsd.1 is down\nPg 1.13b7 is down+peering\nWhich of the following commands provides more information about pg 1.13b7?",
        answers: ["A. ceph why 1.13b7", "B. ceph query pg 1.13b7", "C. ceph pg 1.13b7 query", "D. ceph detail –pg 1.13b7", "E. ceph pg detail 1.13b7"],
        correct: 2
    },
    {
        question: "Which of the following commands mounts a CephFS as user admin by contacting the Ceph monitor at 192.168.2.101 using the Linux kernel CephFS driver?",
        answers: ["A. mount –t ceph –o name=admin, secretfile=/root/admin.secret 192.168.2.101:/ /mnt/", "B. mount –t cephfs –o user=admin, secretfile=/root/admin.secret 192.168.2.101:/ /mnt/", "C. mount –t cephfs –o name=admin, key=/root/admin.secret 192.168.2.101:/ /mnt/", "D. mount –t ceph –o name=admin, secret=/root/admin.secret 192.168.2.101:/ /mnt/", "E. mount –t cephfs –o name=admin, secretfile=/root/admin.secret 192.168.2.101:/ /mnt/"],
        correct: 0
    },
    {
        question: "Which of the following options can be set for a GlusterFS volume?",
        answers: ["A. features.trash", "B. brick.count", "C. krb5.realm", "D. cifs.workgroup", "E. mount.password"],
        correct: 0
    },
    {
        question: "Which of the following commands add the user client.example to a Ceph cluster with read and write access to the foo RDB pool? (Choose TWO correct answers)",
        answers: ["A. ceph auth add client.example allow pool=foo", "B. ceph user create client.example mon 'allow r' osd 'allow pool foo'", "C. ceph auth get-or-create client.example mon 'profile rbd' osd 'profile rbd pool=foo'", "D. ceph auth add client.example mon 'allow r' osd 'allow rw pool=foo'", "E. ceph user add client.example mon 'allow r' osd 'allow pool=foo'"],
        correct: [2, 3]
    },
    {
        question: "Which of the following GlusterFS types exist? (Choose THREE correct answers)",
        answers: ["A. Deduplicated GlusterFS Volume", "B. HMAC Secured GlusterFS Volume", "C. Distributed GlusterFS Volume", "D. Replicated GlusterFS Volume", "E. Distributed Replicated GlusterFS Volume"],
        correct: [2, 3, 4]
    },
    {
        question: "Which of the following statements are true about the Ceph FileStore storage backend? (Choose TWO correct answers)",
        answers: ["A. The journal must be stored on a dedicated block device", "B. Data, journal and metadata are stored on the same block device", "C. The journal can be stored either in a file or a raw block device", "D. The Ceph file system data is stored in a regular file system on a block device", "E. Ceph file system data is stored in the FileStore database."],
        correct: [2, 3]
    },
    {
        question: "Which methods to access volumes are supported by GlusterFS, without using third-party components, to serve the volume's contents? (Choose TWO correct answers)",
        answers: ["A. Mount the GlusterFS volume through the native GlusterFS FUSE client", "B. Accessing the GlusterFS volume through the FTP protocol", "C. Mount the GlusterFS volume using a CIFS client", "D. Mount the GlusterFS volume as an NFS mount", "E. Using the GlusterFS bricks as storage through the iSCSI protocol"],
        correct: [0, 3]
    },
    {
        question: "Which of the following statements is true about upgrading a Ceph cluster to a new release? (Choose THREE correct answers)",
        answers: ["A. No new OSDs should be added during the upgrade", "B. Ceph monitors should be upgraded first, OSDs second", "C. A new Ceph release can be installed while the cluster is running", "D. The cluster must be stopped and taken offline before installing a new release", "E. All Ceph daemons can be upgraded in any order."],
        correct: [0, 1, 2]
    },
    {
        question: "What is a feature of Dispersed GlusterFS Volumes?",
        answers: ["A. Recover data in case of failed brick", "B. Replicate data through high latency networks", "C. Store multiple versions of a file over time", "D. Compress data within each brick", "E. Minimize the number of bricks"],
        correct: 0
    },
    {
        question: "Which of the following commands retrieves the CRUSH map from a Ceph cluster?",
        answers: ["A. ceph osd getcrushmap", "B. ceph osd crush get map", "C. ceph export crushmap", "D. ceph osd download crushmap", "E. ceph get crushmap"],
        correct: 2
    },
    {
        question: "When using cephadm to create a ceph cluster, which of the following commands is used to start the deployment of the new cluster?",
        answers: ["A. cephadm bootstrap –mon-ip 172.21.15.12", "B. cephadm setup –mon-ip 172.21.15.12", "C. cephadm create –mon-ip 172.21.15.12", "D. cephadm install –mon-ip 172.21.15.12", "E. cephadm init –mon-ip 172.21.15.12"],
        correct: 0
    },
    {
        question: "Which of the following commands replaces the brick cl1n3:/data/brick1/gv0 in the GlusterFS volume gv0 by the currently unused brick cl1n4:/data/brick1/gv0?",
        answers: ["A. gluster brick migrate cl1n3:/data/brick1/gv0 cl1n4:/data/brick1/gv0", "B. gluster bsync –delete-source cl1n3:/data/brick1/gv0 cl1n4:/data/brick1/gv0", "C. gluster mv cl1n3:/data/brick1/gv0 cl1n4:/data/brick1/gv0", "D. gluster volume replace-brick gv0 cl1n3:/data/brick1/gv0 cl1n4:/data/brick1/gv0", "E. gluster resize gv0 --add cl1n3:/data/brick1/gv0 cl1n4:/data/brick1/gv0"],
        correct: 3
    },
    {
        question: "What is true regarding a DRBD resource in the state Diskless?",
        answers: ["A. None of the cluster nodes use backend devices for the resource.", "B. The resource must be attached to a backend device before using it.", "C. No data can be read from or written to the resource", "D. Diskless resources may only be used to store DRBD metadata", "E. Requests to the resource are forwarded to another node."],
        correct: 4
    },
    {
        question: "Which command is used to create devices for existing partitions on an MPIO device?",
        answers: ["A. kpartx", "B. parted", "C. sfdisk", "D. multipath", "E. mkblk"],
        correct: 0
    },
    {
        question: "Which of the following can be used as a low level device for DRBD? (Choose TWO correct answers)",
        answers: ["A. A virtual tape library", "B. A LVM logical volume", "C. A rewritable CD", "D. A tape streamer", "E. A physical hard disk"],
        correct: [2, 4]
    },
    {
        question: "Which of the following statements are true regarding OCFS2? (Choose TWO correct answers)",
        answers: ["A. To avoid the need for shared storage, OCFS2 can replicate the content of its filesystems via the network", "B. When using OCFS2 with additional cluster software, OCFS2 must be integrated into the overall cluster manager to ensure consistent cluster behavior.", "C. In addition to filesystems, OCFS2 can handle other cluster services such as IP addresses and server daemons", "D. OCFS2 is an integral part of Pacemaker and relies on Pacemaker services for functionality", "E. OCFS2 can be used without any additional software as it contains its own cluster manager, O2CB"],
        correct: [1, 4]
    },
    {
        question: "Which of the following commands lists multipath LUNs along with their various paths?",
        answers: ["A. multipath -ll", "B. lsmpio –v", "C. mp –q", "D. tracempath", "E. mpadmin –paths"],
        correct: 0
    },
    {
        question: "Which of the following resource agents run in a Pacemaker cluster when using GFS2? (Choose TWO correct answers)",
        answers: ["A. ocf:heartbeat:mkgfs2", "B. ocf:Linux:mount", "C. ocf:gfs2:fsck", "D. ocf:heartbeat:Filesystem", "E. ocf:pacemaker:controld"],
        correct: [1, 3]
    },
    {
        question: "Which parameter of vgchange controls whether a volume group is shared within a shared storage cluster? (Specify ONLY the option name without any values or parameters)",
        type: "written",
        correct: "--shared"
    },
    {
        question: "What is the purpose of locking in a cluster file system? (Choose TWO correct answers)",
        answers: ["A. Locking prevents storage shortages and allows nodes to reserve disk space in advance", "B. Locking prevents the cluster manager from assigning services to nodes that cannot access the storage areas associated with the given service", "C. Locking prevents simultaneous and concurrent changes to the same data by multiple nodes", "D. Locking is required to ensure the consistency of files and data", "E. Locking determines which one of the cluster nodes may mount a file system."],
        correct: [2, 3]
    },
    {
        question: "Which kind of errors are handled by the DRBD configuration option on-io-error?",
        answers: ["A. Errors due to differences in the DRBD configuration files on the nodes", "B. Errors when reconnecting nodes after a split-brain situation", "C. Errors during the TCP handshake in the DRBD synchronization", "D. Errors within the communication of the local lower-level device", "E. Errors due to locked files stored on the DRBD volume"],
        correct: 3
    },
    {
        question: "What is true about a DRBD dual-primary setup? (Choose TWO correct answers)",
        answers: ["A. Once enabled, the DRBD device cannot be changed into secondary state again.", "B. A cluster file system should be used on the DRBD device to enable parallel mounts", "C. It can use any replication protocol DRBD offers", "D. An existing DRBD device cannot be changed from a single to a dual primary device", "E. It has to be explicitly enabled using the configuration option allow-two-primaries yes;"],
        correct: [1, 4]
    },
    {
        question: "A GFS2 file system has been created on one cluster node using the command\nmkfs.gfs2 –t cl1:fs1 –j 2 /dev/sdf1\nWhat is true regarding the resulting file systems?",
        answers: ["A. The file system can be mounted by no more than two nodes at the same time", "B. gfs2_addnode has to be used to grant explicit mount permissions to any node using the cluster.", "C. The command must be run on every node that should mount the file system", "D. The number of nodes that can mount the file system at the same time cannot be changed later", "E. Only one node at a time can mount the file system with write permissions."],
        correct: 0
    },
    {
        question: "What is the status of a running and healthy DRBD resource?",
        answers: ["A. SBDetected", "B. WFSecondary", "C. Connected", "D. HealthCheckStarted", "E. Synchronizing"],
        correct: 2
    },
    {
        question: "Which of the following commands indicates whether the DRBD resource r0 is in the primary or secondary state on the local and the remote DRBD node?",
        answers: ["A. drbdadm cstate r0", "B. drbdadm verify r0", "C. drbdadm role r0", "D. drbdadm list r0", "E. drbdadm replica r0"],
        correct: 2
    },
    {
        question: "What is the task of the Cluster Logical Volume manager, CLVM?",
        answers: [
            "A. Keep the logical volume configuration on a shared storage consistent throughout the cluster nodes.",
            "B. Ensure non-cluster file systems are only mounted once at a time",
            "C. Forward incoming TCP connections to a logical service to one of multiple backend nodes.",
            "D. Allow multiple cluster nodes into several logical groups that are always fenced together"
        ],
        correct: 0
    },
    {
        question: "Which Pacemaker resource agent manages the OCFS2 cluster stack?",
        answers: [
            "A. ocf:pacemaker:ocfs2",
            "B. ocf:fs:ocfs2d",
            "C. ocf:heartbeat:cfsd",
            "D. ocf:Oracle:pcmk",
            "E. ocf:ocfs2:02ocb"
        ],
        correct: 0
    },
    {
        question: "Which directory provides links to access storage devices by its WWWID?",
        answers: [
            "A. /dev/mpio/",
            "B. /sys/fs/wwid/",
            "C. /dev/disk/by-id/",
            "D. /proc/sys/block/wwid",
            "E. /dev/wwid/"
        ],
        correct: 2
    },
    {
        question: "Which of the following properties of a DRBD resource are determined by the synchronization protocol? (Choose TWO correct answers)",
        answers: [
            "A. Size of the volume",
            "B. Resilience against data loss",
            "C. I/O latency when writing data",
            "D. Throughput during device synchronization"
        ],
        correct: [1, 2]
    },
    {
        question: "To improve the availability of a web application, multiple web servers have been set up. Each web server contains a local copy of the web application and all other content needed to serve to the clients. Furthermore, each server runs a local database server, which replicates the contents of the database with the other nodes. An additional node receives all requests to the web application and passes them randomly to one of the available backend servers. Which of the following should be done to further improve the availability of this setup?",
        answers: [
            "A. Since load balancers cannot handle HTTP, the web servers should be configured in a failover setup without a load balancer.",
            "B. One additional node should be added as a dedicated database server which replaces the local database servers on the web servers.",
            "C. A second load balancer should be added and configured to form a failover cluster with the existing load balancer.",
            "D. The load balancer should be configured to forward as many requests as possible to one server instead of distributing them randomly.",
            "E. A quorum disk should be installed on a shared storage which is connected to all cluster nodes."
        ],
        correct: 2
    },
    {
        question: "Which of the following constraints are supported by Pacemaker? (Choose TWO correct answers)",
        answers: [
            "A. diskspace",
            "B. order",
            "C. colocation",
            "D. collaboration",
            "E. coexistence"
        ],
        correct: [1, 2]
    },
    {
        question: "Which of the following keepalived configuration directives specifies round robin as the load balancing algorithm?",
        answers: [
            "A. lb_algorithm=rr",
            "B. lb_algo rr",
            "C. loadbalancer_mode=rr",
            "D. algorithm=round robin",
            "E. lb_mode rr"
        ],
        correct: 1
    },
    {
        question: "Which of the following sections may exist in the Corosync configuration file? (Choose THREE correct answers)",
        answers: [
            "A. totem",
            "B. heartbeat",
            "C. pacemaker",
            "D. quorum",
            "E. nodelist"
        ],
        correct: [0, 3, 4]
    },
    {
        question: "Which of the following options represents a valid declaration of a backend server with HAProxy?",
        answers: [
            "A. server server_x 10.1.0.1:80 check",
            "B. host server_x 10.1.0.1:80 cookie server_x",
            "C. target server_x 10.1.0.1:80 via_proxy",
            "D. pool server_x 10.1.0.1:80",
            "E. backend server_x 10.1.0.1:80"
        ],
        correct: 0
    },
    {
        question: "Which of the following device classes are commonly used STONITH devices? (Choose THREE correct answers)",
        answers: [
            "A. Blade control devices",
            "B. Local node storage",
            "C. Remote management services like IPMI devices",
            "D. CPU frequency management tools",
            "E. Power Distribution Units, PDUs"
        ],
        correct: [0, 2, 4]
    },
    {
        question: "Which pcs subcommand manages which cluster resources may run together on the same nodes?",
        answers: [
            "A. condition",
            "B. compliance",
            "C. constraint",
            "D. collaboration",
            "E. coexistence"
        ],
        correct: 2
    },
    {
        question: "Which of the following HAProxy configuration statements denies access for requests matching the ACL external_clients?",
        answers: [
            "A. acl external_clients drop",
            "B. http_request deny if external_clients",
            "C. set response-code 200 acl external_clients",
            "D. request-route external_clients null",
            "E. use_backend none when external_clients"
        ],
        correct: 1
    },
    {
        question: "Which of the following are valid load balancing algorithms for HAProxy? (Choose TWO correct answers)",
        answers: [
            "A. destination",
            "B. persistent",
            "C. weightedrr",
            "D. source",
            "E. leastconn"
        ],
        correct: [3, 4]
    },
    {
        question: "Which of the following are Pacemaker components? (Choose TWO correct answers)",
        answers: [
            "A. pacemaker-isolationd (formerly fencer)",
            "B. pacemaker-controld (formerly crmd)",
            "C. pacemaker-clusterd (formerly ccmd)",
            "D. pacemaker-directord (formerly keepalived)",
            "E. pacemaker-execd (formerly lrmd)"
        ],
        correct: [1, 4]
    },
    {
        question: "Which of the following statements describes the act of fencing in a high availability cluster?",
        answers: [
            "A. Fencing is the accounting and limitation of disk usage on shared storage.",
            "B. Fencing is the forwarding of incoming network connections to backend servers.",
            "C. Fencing is the assignment of services to different cluster nodes to avoid interference of the services.",
            "D. Fencing is the disconnection of a failed cluster node from any other cluster resources.",
            "E. Fencing is the automated stop and restart of cluster services that suffer from software errors."
        ],
        correct: 3
    },
    {
        question: "Without using additional tools, what information can Linux Virtual Server use to describe which packets it should forward to another node? (Choose TWO correct answers)",
        answers: [
            "A. The target IP address and TCP or UDP port of the packet.",
            "B. The layer 7 protocol (e.g. HTTP or SMTP) used in the packet",
            "C. The interface on which the packet arrived at the load balancer",
            "D. The target URL in case of an HTTP packet.",
            "E. Marks added to the packet by netfilter."
        ],
        correct: [0, 2]
    },
    {
        question: "In keepalived, what is configured by the configuration option sorry_server?",
        answers: [
            "A. The default virtual host that is assigned to incoming HTTP requests missing a Host header before forwarding them to a backend.",
            "B. The addresses of backend servers that should not be assigned any new connections.",
            "C. The addresses of backend servers that were overloaded in the past and should be scheduled with a reduced priority",
            "D. The address of a server to which requests are redirected in case no real server is available.",
            "E. The hostnames of the servers that despite the remaining configuration should always be scheduled by the Serial Operation Round Robin algorithm."
        ],
        correct: 3
    },
    {
        question: "How does high availability clustering relate to periodic storage backup? (Choose TWO correct answers)",
        answers: [
            "A. Regular backups remain vital as they allow restoration of data that was accidentally deleted or corrupted.",
            "B. Regular backups become generally unnecessary as any data loss or corruption is automatically recovered by the high availability cluster.",
            "C. Backups should be located only on the local storage of the cluster nodes and should not be backed up in order to prevent bandwidth congestion.",
            "D. Regular backups may be limited to the cluster configuration and cluster state data as this information is sufficient to recover any state of the cluster including data at any time.",
            "E. Backup procedures may have to be adapted to the cluster to ensure complete and recoverable backups."
        ],
        correct: [0, 4]
    },
    {
        question: "Which of the following modes for bonding network interfaces sends all packets to the same target link layer address through the same member interface of the bond?",
        answers: [
            "A. balance-sticky",
            "B. balance-mac",
            "C. balance-rr",
            "D. balance-ct",
            "E. balance-xor"
        ],
        correct: 4
    },
    {
        question: "Which of the following attribute types are contained in the output of smartctl for a SATA SSD? (Choose TWO correct answers)",
        answers: [
            "A. Sensor",
            "B. Pre-fail",
            "C. CountDown",
            "D. Flag",
            "E. Old_age"
        ],
        correct: [1, 4]
    },
    {
        question: "Which of the following commands displays the MII status of enp0s3?",
        answers: [
            "A. ifadm -m enp0s3",
            "B. Ismii enp0s3",
            "C. miidump enp0s3",
            "D. ethtool enp0s3",
            "E. netcat –link enp0s3"
        ],
        correct: 3
    },
    {
        question: "How many copies of each data block exist on a RAID 10 device?",
        answers: [
            "A. 2",
            "B. 8",
            "C. 1",
            "D. 16",
            "E. 4"
        ],
        correct: 0
    },
    {
        question: "Which of the following mdadm options are available when creating a new RAID device? (Choose THREE correct answers)",
        answers: [
            "A. --filesystem",
            "B. --lvm",
            "C. --raid-devices",
            "D. --level",
            "E. --spare-devices"
        ],
        correct: [2, 3, 4]
    },
    {
        question: "What is the purpose of the command crm resource unmanage?",
        answers: [
            "A. Kill the current instance of a resource and restart the resource on another node.",
            "B. Stop a resource managed by Pacemaker and restart it using systemd.",
            "C. Delete a resource from the Pacemaker configuration.",
            "D. Unlock the resource configuration to change resource properties.",
            "E. Prevent Pacemaker from interacting with the resource, even if it becomes unavailable."
        ],
        correct: 4
    },
    {
        question: "Which of the following LVM commands adds the new physical volume /dev/sdj1 to the existing volume group vg0?",
        answers: [
            "A. pvadmin /dev/sdj1 -v vg0",
            "B. pvadd /dev/sdj1 vg0",
            "C. pvedit --volume-group vg0 /dev/sdj1",
            "D. vgconvert --pvs +/dev/sdj1",
            "E. vgextend vg0 /dev/sdj1"
        ],
        correct: 4
    },
    {
        question: "Which of the following options stem from the ifcfg file of a bonding master interface?",
        answers: [
            "A. BONDING_MASTER=yes",
            "B. BOOTPROTO=bond",
            "C. IP_CMD=bondcfg",
            "D. SLAVE_INTERFACES=\"eth0 eth1\"",
            "E. TYPE=Ethernet"
        ],
        correct: 0
    },
    {
        question: "Which of the following LVM commands creates new snapshots?",
        answers: [
            "A. lvcreate",
            "B. lvsnap",
            "C. lvcopy",
            "D. lvfreeze",
            "E. lvadm"
        ],
        correct: 0
    },
    {
        question: "When using DRBD in a Pacemaker cluster, which Pacemaker configuration objects must be created in order to use the DRBD device as file storage for other cluster services?",
        answers: [
            "A. A file system resource to mount the device.",
            "B. A replication resource that synchronizes the DRBD device's data to all nodes that may take over the device after a failover.",
            "C. A security resource in order to permit other cluster services to access the data on the DRBD device.",
            "D. A health resource in order to check the integrity of the file system.",
            "E. A constraint to ensure the device is mounted before the dependent services are started."
        ],
        correct: 0
    },
    {
        question: "Which of the following commands makes the tagged VLAN 312 on enp0s3 accessible?",
        answers: [
            "A. ip tag add 312 name enp0s3.312 dev enp0s3",
            "B. ip proto type 802.1Q name enp0s3.312 dev enp0s3",
            "C. ip link add link enp0s3 name enp0s3.312 type vlan id 312",
            "D. ip dev set enp0s3.312 protocol vlan name enp0s3.312",
            "E. ip vlan add 312 name enp0s3.312 dev enp0s3"
        ],
        correct: 2
    },
    {
        question: "Which of the following commands manages traffic shaping on Linux?",
        answers: [
            "A. qdisc",
            "B. netlimit",
            "C. tc",
            "D. ip",
            "E. flowtables"
        ],
        correct: 2
    },
    {
        question: "How can the state of the backing storage disks of a DRBD device be checked?",
        answers: [
            "A. lsdrbd all",
            "B. drbdadm dstate all",
            "C. smartctl -drbd",
            "D. cat /proc/drbd/status",
            "E. drbdctl health"
        ],
        correct: 1
    },
    {
        question: "Which command is used to manage and process /etc/multipath.conf?",
        answers: [
            "A. mpathconf",
            "B. mpmadmin",
            "C. mpedit",
            "D. multipathmgr",
            "E. mdmctl"
        ],
        correct: 0
    },
    {
        question: "After changing the DRBD configuration files, which command makes the new configuration effective?",
        answers: [
            "A. drbdmgr refresh",
            "B. drbdctl reload",
            "C. drbdconf update",
            "D. drbdadm adjust",
            "E. drbddev recreate"
        ],
        correct: 3
    },
    {
        question: "Which of the following commands can be used to change properties such as the number of node slots or the label of an existing OCFS2 filesystem?",
        answers: [
            "A. crm_edit",
            "B. o2cbtool",
            "C. ocfs2tool",
            "D. ocfs2.setprops",
            "E. tunefs.ocfs2"
        ],
        correct: 4
    },
    {
        question: "Which of the following commands creates the GFS2 volume webcontent in the three-node Pacemaker cluster cl1 on the shared disk /dev/sdd1?",
        answers: [
            "A. gfs2_mkfs -t cl1:webcontent -p lock_dlm -j 3 /dev/sdd1",
            "B. gfs2_mkfs -c cl1 -d /dev/sdd1 -p pcmk -j 3 webcontent",
            "C. gfs2_mkfs -t webcontent -p pcmk:cl1 -j 3 /dev/sdd1",
            "D. gfs2_mkfs -c cl1 -n webcontent -dlm -j 3 -- /dev/sdd1",
            "E. gfs2_mktfs -d /dev/sdd1 -p dlm_inline -j 3 webcontent (cl1"
        ],
        correct: 0
    },
    {
        question: "Which of the following are tools or services that manage a Linux Virtual Server (LVS) setup? (Choose TWO correct answers)",
        answers: [
            "A. keepalived",
            "B. roundrobind",
            "C. vserverd",
            "D. ldirectord",
            "E. lvproxy"
        ],
        correct: [0, 3]
    },
    {
        question: "When setting up a new DRBD resource, what is the state of the underlying disks before the initial synchronization?",
        answers: [
            "A. Inconsistent",
            "B. Synchronizable",
            "C. Single",
            "D. Empty",
            "E. Raw"
        ],
        correct: 0
    },
    {
        question: "What is a requirement to use DRBD in dual primary mode?",
        answers: [
            "A. A third standby-node must be available.",
            "B. No more than one DRBD resource may run in dual primary mode.",
            "C. DRBD must be run on top of a corosync cluster",
            "D. Synchronization protocol C must be used",
            "E. LVM must be run on top of the DRBD resource."
        ],
        correct: 3
    },
    {
        question: "Which of the following statements is true regarding journals of a GFS2 filesystem?",
        answers: [
            "A. The GFS cluster Journal Daemon, GCJD, handles the journaling in a GFS2 cluster.",
            "B. Each GFS2 filesystem has exactly one journal.",
            "C. Every node that simultaneously mounts the filesystem requires its own GFS2 journal.",
            "D. Once a GFS2 filesystem is created, the number of journals cannot be changed.",
            "E. Journals were heavily used in GFS and are deprecated and optional in GFS2."
        ],
        correct: 2
    },
    {
        question: "Which of the following LVM commands adds the new physical volumen /dev/sdj1 to the existing volumen group vg0?",
        answers: [
            "A. pvadmin /dev/sdjl –v vg0",
            "B. pvadd /dev/sdjl vg0",
            "C. pvedit –volume-group vg0 /dev/sdjl",
            "D. vgconvert –pvs +/dev/sdjl",
            "E. vgextend vg0 /dev/sdjl"
        ],
        correct: 4
    },
    {
        question: "How can Access to a GlusterFS volumen be limited?",
        answers: [
            "A. By setting the options auth.allow and auth.reject on the volumen.",
            "B. By enabling RBAC on the volumen and assigning roles to Linux users accessing the volumen.",
            "C. By setting POSIX ACLs for hosts, as in setfacl –m h:192.168.99.100:rwx /gluster",
            "D. By configuring Access policies using gluster policy and gluster volumen policy-map",
            "E. By creating /etc/gluster/allaw and /etc/gluster/deny files on all nodes"
        ],
        correct: 0
    },
    {
        question: "Which of the following commands créate a new RADOS block device named example with a capacity of 10 MiB in the rbd pool? ( Choose TWO correct answers)",
        answers: [
            "A. rbd create –size 10M rbd/example",
            "B. rbd new example –size 10M rbd",
            "C. rbd create –pool rbd –size 10M example",
            "D. rbd mkdevice –size 10M rbd/example",
            "E. rbd image create rbd/example 10M"
        ],
        correct: 2
    },
    {
        question: "Which of the following statements are true regarding the handing of a hardware error in a high availability cluster?(Choose THREE correct answers)",
        answers: [
            "A. Erroneous components are physicaly turned off as they are in an undefined state.",
            "B. The cluster management components monitor the heath of all cluster components.",
            "C. After the cluster deals with an error, no manual actions are required to bring the cluster back to normal operation.",
            "D. High availability clusters provide automatic recovery from software errors only and cannot mitigate hardware issues.",
            "E. Services are restarted on or redirected to other cluster nodes."
        ],
        correct: [1, 2, 4]
    },
    {
        question: "Which of the following commands extends the GlusterFS volumen gv0 by the currently unused bricck cl1n4:/data/brick1/gv0?",
        answers: [
            "A. gluster volumen resize gv0 –add-brick=cl1n4:/data/brick1/gv0",
            "B. gluster volumen grow gv0 +cl1n4:/data/brick1/gv0",
            "C. gluster volumen add-brick gv0 cl14:/data/brick1/gv0",
            "D. gluster volumen rebalance –include cl1n4:/data/brick1/gv0",
            "E. gluster volumen extend gv0 –brick cl1n4:/data/brick1/gv0"
        ],
        correct: 2
    },
    {
        question: "Which of the following statements is true about CRUSH maps in Ceph) (Choose TWO correct answers)",
        answers: [
            "A. CRUSH maps compress the data before it is stored in OSDs",
            "B. CRUSH maps model the physical layout of the cluster",
            "C. CRUSH maps list OSDs by location and contain rules for how to replicate data.",
            "D. CRUSH maps are used to authenticate Ceph clients",
            "E. Each ceph cluster may define multiple CRUSH maps"
        ],
        correct: [1, 2]
    },
    {
        question: "When reconnecting after a Split-brain situation, GlusterFS detects that some files store on the gv0 file system were changed on both sides during the cluster split. Which command lists the affected file?",
        answers: [
            "A. gluster volumen status gv0 –f file.status=inconsistent",
            "B. gluster volumen diff gv0",
            "C. gluster volumen merge gv0 –check",
            "D. gluster volumen clean gv0 –v –dry-run",
            "E. gluster volumen heal gv0 info"
        ],
        correct: 4
    },
    {
        question: "Which Ceph component is resposible for maintaining information regarding the cluster state and authentication?",
        answers: [
            "A. Ceph Supervisor",
            "B. Ceph Master",
            "C. Ceph Manager",
            "D. Ceph Monitor",
            "E. Ceph Leader"
        ],
        correct: 3
    },
    {
        question: "When using cephadm to create a Ceph cluster, which of the following commands creates an OSD on /dev/sdb on host nodel.example.com?",
        answers: [
            "A. ceph osd add /dev/sdb:nodel.example.com",
            "B. ceph orch daemon add osd nodel.example.com:/dev/sdb",
            "C. ceph init osd nodel.example.com /dev/sdb",
            "D. ceph extend osd  --osd=/dev/sbd –node nodel.example.com",
            "E. ceph install nodel.example.com –osd /dev/sdb"
        ],
        correct: 1
    },
    {
        question: "Which of the following commands creates a snapshot named example for the CephFS mounted at /mnt?",
        answers: [
            "A. ceph fs snap cephfs example",
            "B. cephfs=snap ==name example",
            "C. touch /mnt/.snap/example",
            "D. ceph snap example /mnt",
            "E. mkdir /mnt/.snap/example"
        ],
        correct: 4
    },
    {
        question: "Which of the following commands removes the node cl1n4 from the GlusterFS Trusted Storage Pool (TSP)?",
        answers: [
            "A. gluster node delete cl1n4",
            "B. gluster tsp remove cl1n4",
            "C. gluster peer detach cl1n4",
            "D. gluster demote cl1n4",
            "E. gluster brick shutdown cl1n4:*"
        ],
        correct: 2
    },
    {
        question: "Which of the following statemenst are true about the Ceph BlueStore storage backend? (Choose TWO correct answers.)",
        answers: [
            "A. Data and journal must be stored in a POSIX compatible file system.",
            "B. Data, journal and metadata must be store on individual block devices.",
            "C. Data, journal and metadata can be on up to three individual block devices.",
            "D. Data, journal and metadata can be store on the same block device.",
            "E. Data and journal can be stored either on a POSIX-compatible file system or a raw block device."
        ],
        correct: [2, 3]
    },
    {
        question: "The command ceph health detail creates this output:\nHEALTH_ERR 1 pgs inconsistent; 1 scrub errors\nPg 1.13b7 is active+clean+inconsistent, acting [3,1,2]\n1 scrub errors\nWhich of the following commands can be used resolve the error?",
        answers: [
            "A. ceph pg scrub 1.13b7",
            "B. ceph clone –pg 1.13b7",
            "C. ceph pg delete 1.13b7",
            "D. ceph repair pgs",
            "E. ceph pg repair 1.13b7"
        ],
        correct: 4
    },
    {
        question: "Which of the following statements are true regarding a quorum disk?",
        answers: [
            "A. It is a local device on each node in a cluster and cannot be puto n shared storage.",
            "B. It is used to determine which nodes are part of a cluster in the event of an outage of a cluster member",
            "C. It is the central data store on which cluster tuntime data such as user sessions for load balancing is kept.",
            "D. It is exclusively maintained by one node, typically called quorum master, and is not accesible by other cluster members.",
            "E. It is used to store log files of operations and changes in the clusters and is not required in normal cluster operations."
        ],
        correct: 1
    },
    {
        question: "What command manages disk-based Split brain detection (STONITH Block Devide / Storage-Based Death) for Pacemaker? (Specify ONLY the command without any path or parameters.)",
        type: "written",
        correct: "stonith_admin"
    },
    {
        question: "What LVM command moves all data stored  on a specific physical volumen to another physical volumen within the samen volumen group? (Specify ONLY the command without any path or parameters.)",
        type: "written",
        correct: "pvmove"
    },
    {
        question: "Which command is used to créate, view and modify Ceph Keyring Files? (Specify ONLY the command without any path or parameters.)",
        type: "written",
        correct: "ceph-authtool"
    },
    {
        question: "What command is used to edit and display the running Linux Virtual Server (LVS) configuration? (Specify ONLY the command without any path or parameters)",
        type: "written",
        correct: "ipvsadm"
    }
];

let currentQuestionIndex = 0; // Índice de la pregunta actual
let shuffledQuestions = []; // Array para almacenar preguntas mezcladas
let summary = []; // Array para almacenar el resumen de respuestas
let selectedAnswers = []; // Array para almacenar las respuestas seleccionadas

// Función para mezclar un array (algoritmo de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para inicializar el cuestionario
function initializeQuiz() {
    shuffledQuestions = [...questions]; // Copiar preguntas a shuffledQuestions
    shuffle(shuffledQuestions); // Mezclar las preguntas
    summary = shuffledQuestions.map(() => ({ answered: false, correct: false, partiallyCorrect: false })); // Inicializar resumen
    currentQuestionIndex = 0; // Reiniciar el índice de la pregunta actual
    selectedAnswers = []; // Reiniciar respuestas seleccionadas
    updateSummaryPanel(); // Actualizar el panel de resumen
    showQuestion(); // Mostrar la primera pregunta
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const questionNumberElement = document.getElementById('question-number'); // Obtener el elemento del número de pregunta
    const questionElement = document.getElementById('question'); // Obtener el elemento de la pregunta
    const answersElement = document.getElementById('answers'); // Obtener el elemento de respuestas
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual

    questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1}`; // Mostrar el número de pregunta
    questionElement.textContent = question.question; // Mostrar el texto de la pregunta
    answersElement.innerHTML = ''; // Limpiar respuestas anteriores
    selectedAnswers = []; // Reiniciar respuestas seleccionadas

    if (question.type === "written") {
        const input = document.createElement('input'); // Crear un elemento de entrada para respuestas escritas
        input.type = 'text'; // Establecer el tipo de entrada a texto
        input.id = 'written-answer'; // Establecer el id de la entrada
        input.placeholder = 'Escribe tu respuesta aquí'; // Establecer el texto del marcador de posición
        answersElement.appendChild(input); // Agregar la entrada al elemento de respuestas
    } else {
        const shuffledAnswers = question.answers.map((answer, index) => ({ answer, index }));
        shuffle(shuffledAnswers); // Mezclar las respuestas

        shuffledAnswers.forEach(({ answer, index }) => {
            const button = document.createElement('button'); // Crear un botón para cada respuesta
            button.textContent = answer.slice(3); // Establecer el texto del botón sin la letra
            button.onclick = () => toggleAnswer(index); // Establecer el controlador de clic del botón
            button.dataset.index = index; // Establecer el índice de la respuesta en el botón
            answersElement.appendChild(button); // Agregar el botón al elemento de respuestas
        });
    }

    const submitButton = document.createElement('button'); // Crear un botón de envío
    submitButton.textContent = 'Enviar'; // Establecer el texto del botón
    submitButton.onclick = () => {
        if (question.type === "written") {
            checkWrittenAnswer(); // Verificar respuesta escrita
        } else if (Array.isArray(question.correct)) {
            checkMultipleChoiceAnswer(); // Verificar respuesta de opción múltiple
        } else {
            checkSingleChoiceAnswer(); // Verificar respuesta de opción única
        }
    };
    answersElement.appendChild(submitButton); // Agregar el botón de envío al elemento de respuestas
}

// Función para alternar la selección de una respuesta
function toggleAnswer(index) {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    if (Array.isArray(question.correct)) {
        if (selectedAnswers.includes(index)) {
            selectedAnswers = selectedAnswers.filter(i => i !== index); // Deseleccionar respuesta
        } else {
            selectedAnswers.push(index); // Seleccionar respuesta
        }
    } else {
        selectedAnswers = [index]; // Seleccionar respuesta única
    }
    const buttons = document.querySelectorAll('#answers button'); // Obtener todos los botones de respuesta
    buttons.forEach((button) => {
        if (selectedAnswers.includes(parseInt(button.dataset.index))) {
            button.classList.add('selected'); // Resaltar botón seleccionado
        } else {
            button.classList.remove('selected'); // Quitar resalto de botón no seleccionado
        }
    });
}

// Función para verificar una respuesta de opción única
function checkSingleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    const selectedIndex = selectedAnswers[0]; // Obtener el índice de la respuesta seleccionada
    const correctAnswer = question.answers[question.correct]; // Obtener el texto de la respuesta correcta
    if (selectedIndex === question.correct) {
        showModal('¡Correcto!'); // Mostrar mensaje de correcto
        summary[currentQuestionIndex].correct = true; // Marcar la pregunta como correcta en el resumen
    } else {
        showModal('Incorrecto. La respuesta correcta es: ' + correctAnswer); // Mostrar mensaje de incorrecto con la respuesta correcta
    }
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida en el resumen
    currentQuestionIndex++; // Pasar a la siguiente pregunta
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(); // Mostrar la siguiente pregunta
    } else {
        showModal('¡Has completado el examen!'); // Mostrar mensaje de finalización
        currentQuestionIndex = 0; // Reiniciar el índice de la pregunta
        showQuestion(); // Mostrar la primera pregunta nuevamente
    }
    updateSummaryPanel(); // Actualizar el panel de resumen
}

// Función para verificar una respuesta de opción múltiple
function checkMultipleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    const correctAnswers = question.correct; // Obtener las respuestas correctas
    const correctAnswerText = correctAnswers.map(index => String.fromCharCode(65 + index)).join(', '); // Obtener el texto de las respuestas correctas
    const allCorrect = correctAnswers.every(index => selectedAnswers.includes(index)) && selectedAnswers.length === correctAnswers.length; // Verificar si todas las respuestas seleccionadas son correctas
    const partiallyCorrect = selectedAnswers.some(index => correctAnswers.includes(index)) && !allCorrect; // Verificar si algunas respuestas seleccionadas son correctas

    if (allCorrect) {
        showModal('¡Correcto!'); // Mostrar mensaje de correcto
        summary[currentQuestionIndex].correct = true; // Marcar la pregunta como correcta en el resumen
    } else if (partiallyCorrect) {
        showModal('Parcialmente correcto. Las respuestas correctas son: ' + correctAnswerText); // Mostrar mensaje de parcialmente correcto con las respuestas correctas
        summary[currentQuestionIndex].partiallyCorrect = true; // Marcar la pregunta como parcialmente correcta en el resumen
    } else {
        showModal('Incorrecto. Las respuestas correctas son: ' + correctAnswerText); // Mostrar mensaje de incorrecto con las respuestas correctas
    }
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida en el resumen
    currentQuestionIndex++; // Pasar a la siguiente pregunta
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(); // Mostrar la siguiente pregunta
    } else {
        showModal('¡Has completado el examen!'); // Mostrar mensaje de finalización
        currentQuestionIndex = 0; // Reiniciar el índice de la pregunta
        showQuestion(); // Mostrar la primera pregunta nuevamente
    }
    updateSummaryPanel(); // Actualizar el panel de resumen
}

// Función para verificar una respuesta escrita
function checkWrittenAnswer() {
    const input = document.getElementById('written-answer'); // Obtener el elemento de entrada
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    if (input.value.trim().toLowerCase() === question.correct.toLowerCase()) {
        showModal('¡Correcto!'); // Mostrar mensaje de correcto
        summary[currentQuestionIndex].correct = true; // Marcar la pregunta como correcta en el resumen
    } else {
        showModal('Incorrecto. La respuesta correcta es: ' + question.correct); // Mostrar mensaje de incorrecto con la respuesta correcta
    }
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida en el resumen
    currentQuestionIndex++; // Pasar a la siguiente pregunta
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(); // Mostrar la siguiente pregunta
    } else {
        showModal('¡Has completado el examen!'); // Mostrar mensaje de finalización
        currentQuestionIndex = 0; // Reiniciar el índice de la pregunta
        showQuestion(); // Mostrar la primera pregunta nuevamente
    }
    updateSummaryPanel(); // Actualizar el panel de resumen
}

// Función para actualizar el panel de resumen
function updateSummaryPanel() {
    const summaryList = document.getElementById('summary-list'); // Obtener el elemento de la lista de resumen
    const summaryCount = document.getElementById('summary-count'); // Obtener el elemento del conteo de resumen
    const answeredCount = summary.filter(item => item.answered).length; // Obtener el conteo de preguntas respondidas
    summaryCount.textContent = `Resueltas: ${answeredCount} / ${shuffledQuestions.length}`; // Mostrar el conteo de preguntas respondidas
    summaryList.innerHTML = ''; // Limpiar la lista de resumen
    summary.forEach((item, index) => {
        const listItem = document.createElement('li'); // Crear un elemento de lista para cada pregunta
        listItem.textContent = `Pregunta ${index + 1}`; // Establecer el texto del elemento de lista
        const status = document.createElement('span'); // Crear un span para el estado
        if (item.answered) {
            if (item.correct) {
                status.textContent = '✅'; // Establecer el estado a correcto
            } else if (item.partiallyCorrect) {
                status.textContent = '⚠️'; // Establecer el estado a parcialmente correcto
            } else {
                status.textContent = '❌'; // Establecer el estado a incorrecto
            }
        } else {
            status.textContent = '❓'; // Establecer el estado a no respondido
        }
        listItem.appendChild(status); // Agregar el estado al elemento de lista
        listItem.onclick = () => jumpToQuestion(index); // Establecer el controlador de clic para saltar a la pregunta
        summaryList.appendChild(listItem); // Agregar el elemento de lista a la lista de resumen
    });
}

// Función para saltar a una pregunta específica
function jumpToQuestion(index) {
    currentQuestionIndex = index; // Establecer el índice de la pregunta actual
    showQuestion(); // Mostrar la pregunta
}

// Función para mostrar un modal con un mensaje
function showModal(message) {
    const modal = document.getElementById('modal'); // Obtener el elemento del modal
    const modalMessage = document.getElementById('modal-message'); // Obtener el elemento del mensaje del modal
    modalMessage.textContent = message; // Establecer el texto del mensaje del modal
    modal.style.display = 'block'; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal'); // Obtener el elemento del modal
    modal.style.display = 'none'; // Ocultar el modal
}

document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++; // Pasar a la siguiente pregunta
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(); // Mostrar la siguiente pregunta
    } else {
        showModal('¡Has completado el examen!'); // Mostrar mensaje de finalización
        currentQuestionIndex = 0; // Reiniciar el índice de la pregunta
        showQuestion(); // Mostrar la primera pregunta nuevamente
    }
};

document.getElementById('restart-button').onclick = initializeQuiz; // Establecer el controlador de clic para reiniciar el cuestionario

document.getElementById('light-mode').onclick = () => {
    document.body.classList.remove('dark-mode'); // Cambiar a modo claro
};

document.getElementById('dark-mode').onclick = () => {
    document.body.classList.add('dark-mode'); // Cambiar a modo oscuro
};

document.getElementById('modal-close').onclick = closeModal; // Establecer el controlador de clic para cerrar el modal

// Inicializar el cuestionario cuando se carga la página
initializeQuiz();
