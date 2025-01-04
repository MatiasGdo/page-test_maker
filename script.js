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
        question: "Which of the following system resources can Mont test? (Choose THREE correct answers).",
        answers: ["A. loadavg (30min)", "B. loadavg (5min)", "C. loadavg (45min)", "D. loadavg (15min)", "E. loadavg (8min)"],
        correct: [1, 3, 4]
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
        correct: 3
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
        correct: [1, 2]
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
        correct: 1
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
    }
];

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let summary = [];
let selectedAnswers = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeQuiz() {
    shuffledQuestions = [...questions];
    shuffle(shuffledQuestions);
    summary = shuffledQuestions.map(() => ({ answered: false, correct: false, partiallyCorrect: false }));
    currentQuestionIndex = 0;
    selectedAnswers = [];
    updateSummaryPanel();
    showQuestion();
}

function showQuestion() {
    const questionNumberElement = document.getElementById('question-number');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const question = shuffledQuestions[currentQuestionIndex];

    questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1}`;
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';
    selectedAnswers = [];

    if (question.type === "written") {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'written-answer';
        input.placeholder = 'Escribe tu respuesta aquí';
        answersElement.appendChild(input);
    } else {
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => toggleAnswer(index);
            answersElement.appendChild(button);
        });
    }

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enviar';
    submitButton.onclick = () => {
        if (question.type === "written") {
            checkWrittenAnswer();
        } else if (Array.isArray(question.correct)) {
            checkMultipleChoiceAnswer();
        } else {
            checkSingleChoiceAnswer();
        }
    };
    answersElement.appendChild(submitButton);
}

function toggleAnswer(index) {
    const question = shuffledQuestions[currentQuestionIndex];
    if (Array.isArray(question.correct)) {
        if (selectedAnswers.includes(index)) {
            selectedAnswers = selectedAnswers.filter(i => i !== index);
        } else {
            selectedAnswers.push(index);
        }
    } else {
        selectedAnswers = [index];
    }
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach((button, i) => {
        if (selectedAnswers.includes(i)) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function checkSingleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const selectedIndex = selectedAnswers[0];
    const correctAnswer = question.answers[question.correct];
    if (selectedIndex === question.correct) {
        showModal('¡Correcto!');
        summary[currentQuestionIndex].correct = true;
    } else {
        showModal('Incorrecto. La respuesta correcta es: ' + correctAnswer);
    }
    summary[currentQuestionIndex].answered = true;
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showModal('¡Has completado el examen!');
        currentQuestionIndex = 0;
        showQuestion();
    }
    updateSummaryPanel();
}

function checkMultipleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const correctAnswers = question.correct;
    const correctAnswerText = correctAnswers.map(index => String.fromCharCode(65 + index)).join(', ');
    const allCorrect = correctAnswers.every(index => selectedAnswers.includes(index)) && selectedAnswers.length === correctAnswers.length;
    const partiallyCorrect = selectedAnswers.some(index => correctAnswers.includes(index)) && !allCorrect;

    if (allCorrect) {
        showModal('¡Correcto!');
        summary[currentQuestionIndex].correct = true;
    } else if (partiallyCorrect) {
        showModal('Parcialmente correcto. Las respuestas correctas son: ' + correctAnswerText);
        summary[currentQuestionIndex].partiallyCorrect = true;
    } else {
        showModal('Incorrecto. Las respuestas correctas son: ' + correctAnswerText);
    }
    summary[currentQuestionIndex].answered = true;
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showModal('¡Has completado el examen!');
        currentQuestionIndex = 0;
        showQuestion();
    }
    updateSummaryPanel();
}

function checkWrittenAnswer() {
    const input = document.getElementById('written-answer');
    const question = shuffledQuestions[currentQuestionIndex];
    if (input.value.trim().toLowerCase() === question.correct.toLowerCase()) {
        showModal('¡Correcto!');
        summary[currentQuestionIndex].correct = true;
    } else {
        showModal('Incorrecto. La respuesta correcta es: ' + question.correct);
    }
    summary[currentQuestionIndex].answered = true;
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showModal('¡Has completado el examen!');
        currentQuestionIndex = 0;
        showQuestion();
    }
    updateSummaryPanel();
}

function updateSummaryPanel() {
    const summaryList = document.getElementById('summary-list');
    const summaryCount = document.getElementById('summary-count');
    const answeredCount = summary.filter(item => item.answered).length;
    summaryCount.textContent = `Resueltas: ${answeredCount} / ${shuffledQuestions.length}`;
    summaryList.innerHTML = '';
    summary.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Pregunta ${index + 1}`;
        const status = document.createElement('span');
        if (item.answered) {
            if (item.correct) {
                status.textContent = '✅';
            } else if (item.partiallyCorrect) {
                status.textContent = '⚠️';
            } else {
                status.textContent = '❌';
            }
        } else {
            status.textContent = '❓';
        }
        listItem.appendChild(status);
        listItem.onclick = () => jumpToQuestion(index);
        summaryList.appendChild(listItem);
    });
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    showQuestion();
}

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showModal('¡Has completado el examen!');
        currentQuestionIndex = 0;
        showQuestion();
    }
};

document.getElementById('restart-button').onclick = initializeQuiz;

document.getElementById('light-mode').onclick = () => {
    document.body.classList.remove('dark-mode');
};

document.getElementById('dark-mode').onclick = () => {
    document.body.classList.add('dark-mode');
};

document.getElementById('modal-close').onclick = closeModal;

// Inicializar el cuestionario al cargar la página
initializeQuiz();
