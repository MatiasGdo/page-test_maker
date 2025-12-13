// Preguntas DevOps - Parte 1 (SIN DUPLICADOS)
const questions_devops_part1 = [
    {
        question: "What is CoreOS Container Linux?",
        type: "opcion",
        answers: ["A. A Linux distribution optimized to be used as the base image for creating container images.", "B. A simplified Linux distribution which only host Docker containers without any additional management interface.", "C. A container orchestration tool which supports Docker and rkt containers.", "D. A container virtualization engine for the Linux kernel, similar to docker and rkt.", "E. A Linux based operating system distribution for running container host and clusters."],
        correct: 4
    },
    {
        question: "If a Dockerfile contains the following lines:\n\nRun cd /tmp\nRun echo test > test\n\nwhere is the file test located?",
        type: "opcion",
        answers: ["A. /tmp/test within the container image.", "B. /test within the container image.", "C. /tmp/test on the system running docker build.", "D. /root/test within the container image.", "E. test in the directory holding the Dockerfile."],
        correct: 0
    },
    {
        question: "When creating a new Docker network, which mechanisms are available for address assignments to containers on the new network? (Choose TWO correct answers.)",
        type: "varias",
        answers: ["A. By default, Docker chooses an unused private address space and assigns addresses from this network to containers.", "B. By default, Docker requests one address per container using DHCP on the interface used by the host system's default route", "C. docker network create allows specifying a network to be used for container addressing using --subnet.", "D. All networked containers must contain at least one IPADDRESS statement in their Dockerfile specifying the container's address.", "E. Docker does not configure IP addresses and relies on the containers to configure their network interface with a valid IP address."],
        correct: [0, 2]
    },
    {
        question: "Which of following statements in a Dockerfile leads to a container which outputs hello world? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. ENTRYPOINT \"echo Hello World\"", "B. ENTRYPOINT echo Hello World", "C. ENTRYPOINT [ \"echo\", \"hello\", \"world\" ]", "D. ENTRYPOINT \"echo\", \"Hello\", \"World\"", "E. ENTRYPOINT [ \"echo hello world\" ]"],
        correct: [0, 1]
    },
    {
        question: "Which of the following values would be valid in the FROM statement in a Dockerfile?",
        type: "opcion",
        answers: ["A. registry:ubuntu:xenial", "B. file: /tmp/ubuntu/Dockerfile", "C. ubuntu:xenial", "D. docker://ubuntu:xenial", "E. http://docker.example.com/images/ubuntu-xenial.iso"],
        correct: 2
    },
    {
        question: "If docker stack is to be used to run a Docker Compose file on a Docker Swarm, how are the images referenced in the Docker Compose configuration made available on the Swarm nodes?",
        type: "opcion",
        answers: ["A. docker stack triggers the build process for the images on all nodes of the Swarm.", "B. docker stack transfers the image from its local Docker cache to each Swarm node.", "C. docker stack passes the images to the Swarm master which distributes the images to all other Swarm nodes.", "D. docker stack builds the images locally and copies them to only those Swarm nodes which run the service.", "E. docker stack instructs the Swarm nodes to pull the images from a registry, although it does not upload the images to the registry."],
        correct: 4
    },
    {
        question: "What is the purpose of a .dockerignore file?",
        type: "opcion",
        answers: ["A. It specifies files that Docker does not submit to the Docker daemon when building a Docker image.", "B. It must be placed in the top level directory of volumes that Docker should never attach automatically to a container.", "C. It lists files existing in a Docker image which should be excluded when building a derivative image.", "D. It exists in the root file system of containers that should ignore volumes and ports provided by Docker", "E. It specifies which parts of a Dockerfile should be ignored when building a Docker image."],
        correct: 2
    },
    {
        question: "After setting up a data container using the following command:\n\ndocker create –v /data --name datastore debian /bin/true\n\nhow is an additional new container started which shares the /data volume with the datastore container?",
        type: "opcion",
        answers: ["A. docker run --volumes-from datastore --name service debian bash", "B. docker run --share-with datastore --name service debian bash", "C. docker run --volume-backend datastore –v /data --name service debian bash", "D. docker run –v /data --name service debian bash", "E. docker run –v datastore:/data – name service debian bash"],
        correct: 4
    },
    {
        question: "Which of the following HTTP requests could stem from the communication with a RESTful service? (Choose TWO correct answers).",
        type: "varias",
        answers: ["A. DELETE /api/clients/1234", "B. GET /api/clients", "C. GET /api.php?cmd=get", "D. GET /api/clients.php?action=delete&client_id=1234", "E. SET /api/clients/1234?name=John%20Doe"],
        correct: [0, 1]
    },
    {
        question: "What is true about a commit in git?",
        type: "opcion",
        answers: ["A. A commit contains information about all branches of a given repository.", "B. A commit requires all remotes of repository to be synchronized before completing.", "C. A commit has to be acknowledged by all remote repositories before it is completed.", "D. A commit can be changed if it has not been uploaded to a remote repository.", "E. A commit can contain changes to the content of submodules of a repository."],
        correct: 0
    },
    {
        question: "Which of the following statements are true about an object storage system as OpenStack Swift? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. Object names are not allowed to contain the / character because all objects are kept in a flat hierarchy.", "B. Objects can be associated with CORS headers which are served to a client retrieving the object.", "C. Objects with a name ending in .htaccess are parsed as configuration files to limit access to other objects.", "D. Objects flagged as executable can contain script code which is run on the object store when the object is accessed.", "E. Objects are accessible via HTTP and, given appropriate permissions, can be embedded in a web site."],
        correct: [1, 4]
    },
    {
        question: "What is the difference between the commands git diff and git diff --cached? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. git diff --cached shows changes that will be included in the next commit", "B. git diff shows changes that were not added to the next commit.", "C. git diff --cached shows changes of all commits that were not pushed to origin yet.", "D. git diff and git diff --cached always lead to the same result if a repository does not have at least one remote repository.", "E. git diff --cached shows changes included in the last successful commit of the current branch."],
        correct: [1, 0]
    },
    {
        question: "In a continuous delivery pipeline, which of the following stages exist? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. Build", "B. Test", "C. Deploy", "D. Code", "E. Decommission"],
        correct: [0, 1, 2]
    },
    {
        question: "After creating a new file within a directory which belongs to a Git repository, which commands have to be used in order to make Git manage the new file and upload it to the already existing remote origin? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. git init", "B. git push", "C. git commit", "D. git remote", "E. git add"],
        correct: [1, 2, 4]
    },
    {
        question: "Which of the following statements are true when using continuous delivery for an application which is subject to strong compliance requirements, such as an SLA? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. The deployment and release of software does not affect the compliance of an application in general.", "B. Given a sufficient number of tests, continuous deployment has no implications on the compliance of an application.", "C. The deployment to production should be subject to manual review and approval.", "D. Continuous delivery increases the risks associated with deployment and is not suited for compliance critical applications.", "E. Continuous delivery limits the risks associated with deployment by using tested automatic procedures."],
        correct: [1, 4]
    },
    {
        question: "Which of the following values stems from the Agile Manifesto?",
        type: "opcion",
        answers: ["A. Processes and tools over individuals and interactions.", "B. Contract negotiation over customer collaboration.", "C. Responding to change over following a plan.", "D. Comprehensive documentation over working software.", "E. Predictability and long-term planning over flexibility and adaption."],
        correct: 2
    },
    {
        question: "Which of the following statements are true regarding microservices? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. Microservices complicate updates because individual microservices cannot be changed once an application is delivered.", "B. Microservices allow the combination of different application development platforms within one application.", "C. Microservices are not suited for container deployments due to their complexity and resource consumption.", "D. Microservices limit the risk of updates and deployments because failures only affect a limited amount of functionality.", "E. Microservices interact faster than components within a monolithic software application due to their standardized APIs."],
        correct: [1, 3]
    },
    {
        question: "Which of the following forms of software is used by Cloud Foundry to deploy an application?",
        type: "opcion",
        answers: ["A. A TGZ archive containing the source code used by Cloud Foundry to build and install the application.", "B. An executable file, such as a binary program, script or application archive, which runs on the platform's standard runtime environment.", "C. The URL to a Git repository containing the source code used by Cloud Foundry to Build and install the application.", "D. A Cloud Foundry Object file (.cfo) which has to be created from the application's object code using the cf1 linker.", "E. A virtual machine image which contains an operating system, the application and all required dependencies."],
        correct: 1
    },
    {
        question: "Which of the following benefits are realized by using immutable servers? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. Immutable servers are usable right after they are started without further configuration.", "B. Immutable servers are flexible in how they are configured during their deployment.", "C. Immutable servers ensure production servers are identical to staging servers.", "D. Immutable servers bundle all components required for an application and never need external services.", "E. Immutable servers are not connected to a network and cannot be attacked remotely."],
        correct: [0, 2]
    },
    {
        question: "In order to execute one step of a declarative Jenkins pipeline on a Jenkins node with a specific set of labels, which element has to be present in the respective stage?",
        type: "opcion",
        answers: ["A. server", "B. selector", "C. slave", "D. executor", "E. agent"],
        correct: 4
    },
    {
        question: "Which of the following values could be used in the option config.vm.provision within a Vagrant configuration file?",
        type: "opcion",
        answers: ["A. :shell, path: \"install.sh\"", "B. :boot, iso: \"debian-8.iso\"", "C. :rsync, remote: \"root@localhost:/\"", "D. :clone, template: \"master-vm\"", "E. :extract, file: \"root-fs.tgz\""],
        correct: 0
    },
    {
        question: "What is the purpose of cloud-init?",
        type: "opcion",
        answers: ["A. Standardize the configuration of infrastructure services, such as load balancers or virtual firewalls in a cloud.", "B. Replace common Linux init systems, such as systemd or SysV init.", "C. Prepare the generic image of an IaaS instance to fit a specific instance's configuration.", "D. Assign an IaaS instance to a specific computing node within a cloud.", "E. Orchestrate the creation and start of multiple related IaaS Instances."],
        correct: 2
    },
    {
        question: "How does Packer interact with system images?",
        type: "opcion",
        answers: ["A. Packer periodically connects through the network to the Packer daemons of all running Packer images in order to re-apply the whole template to the running instance.", "B. Packer installs a client within the image which has to be run periodically via cron in order to retrieve the latest template from the Packer server and apply it locally.", "C. Packer downloads and extracts an image in order to make changes to the image's file system, repack the modified image and upload it again.", "D. Packer has to be installed within the target image and is executed during the image's first boot in order to execute preparation tasks.", "E. Packer creates an instance based on a source image, prepares the instance through a network connection and bundles the resulting."],
        correct: 4
    },
    {
        question: "What is the default provider of Vagrant?",
        type: "opcion",
        answers: ["A. lxc", "B. vmware_workstation", "C. docker", "D. virtualbox", "E. hyperv"],
        correct: 3
    },
    {
        question: "What is the purpose of the command vagrant init?",
        type: "opcion",
        answers: ["A. It installs Vagrant on a Linux host", "B. It executes a provisioning tool in a running box", "C. It creates a Vagrant configuration file.", "D. It starts a Vagrant box", "E. It downloads a Vagrant box"],
        correct: 2
    },
    {
        question: "What is the purpose of the packer inspect subcommand?",
        type: "opcion",
        answers: ["A. List the artifacts created during the build process of a Packer image.", "B. Show usage statistics of a Packer image.", "C. Display an overview of the configuration contained in a Packer template.", "D. Execute commands within a running instance of a Packer image.", "E. Retrieve files from an existing Packer image."],
        correct: 2
    },
    {
        question: "Which functionality is provided by Vagrant as well as by Docker? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. Both can download required base images", "B. Both start system images as virtual machines by default.", "C. Both start system images as containers by default.", "D. Both can share directories from the host file system to a guest.", "E. Both can apply changes to a base image before running it."],
        correct: [0, 3, 4]
    },
    {
        question: "Which of the following kinds of data can cloud-init process directly from user-data? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. Cloud-config declarations in YAML", "B. ISO images to boot from", "C. Shell scripts to execute.", "D. Base64-encoded binary files to execute.", "E. List of URLs to import."],
        correct: [0, 2, 4]
    },
    {
        question: "Which of the following Ansible tasks install the packages example-a and example-b using the Ansible yum module? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. - yum:\nname: \"{{ item }}\"\nstate: present\nwith_items:\n-{ example-a, example-b }", "B. - yum:\nname: \"{{ item }}\"\nstate: present\nwith_items:\n-example-a\n-example-b", "C. - yum:\nname: \"{{ item }}\"\nitems:\n-example-a\n-example-b", "D. –yum:\nname: \"{{ item }}\"\nstate: present\nforeach item:\n- example-a\n- example-b", "E. - yum:\nname: \"{{ item }}\"\nstate: present\nwith_items:\n-example-a, example-b"],
        correct: [1, 4]
    },
    {
        question: "Using the Ansible cron module a crontab entry should be created for example.sh which runs once after reboot. Which of the following is a valid Ansible task for this purpose?",
        type: "opcion",
        answers: ["A. –cron:\ncrontab: \"reboot/* * * * * root /usr/local/bin/example.sh", "B. -cron:\nspecial_time: reboot\njob: \"/usr/local/bin/example.sh", "C. –cron:\nspecial: reboot\ncrontab: \"/usr/local/bin/example.sh", "D. –cron:\nuptime: */0\ntask: \"/usr/local/bin/example.sh\"", "E. –cron:\nReboot: \" /usr/local/bin/example,sh"],
        correct: 1
    },
    {
        question: "Which of the following tasks are achievable using docker-machine? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. Set environment variables to configure the docker command.", "B. Install a new Docker host in a virtual machine.", "C. Migrate running containers from one Docker host to another.", "D. Open an interactive Shell on a remote Docker host using an SSH connection.", "E. Start and stop Docker containers on remote Docker hosts."],
        correct: [0, 1, 3]
    },
    {
        question: "When running an Ansible playbook referring to vault-encrypted data files, which parameters can be used to pass the decryption key to ansible-playbook? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. --vault-password-file", "B. --password-file", "C. --ask-pass", "D. --ask-vault-pass", "E. --vault-pass"],
        correct: [0, 3]
    },
    {
        question: "After a node's configuration is changed on a Puppet master, how can the node be instructed to apply the new configuration immediately if the node runs a Puppet agent as a background service?",
        type: "opcion",
        answers: ["A. Run puppet agent --node all --refresh on the master.", "B. Restart the puppet master process.", "C. Run puppet agent -t on the node.", "D. Run puppet refresh on the node.", "E. Run puppet master --distribute on the master."],
        correct: 2
    },
    {
        question: "Which of the following expressions are valid Ansible variable names?",
        type: "varias",
        answers: ["a) example_var", "b) example.var", "c) example var", "d) example-var", "e) examplevar"],
        correct: [0, 4]
    },
    {
        question: "Which variable is used in the Ansible inventory file to specify the location of an SSH private key file?",
        type: "opcion",
        answers: ["a) ansible_private_key_file", "b) ansible_private_key", "c) ansible_ssh_key_file", "d) ansible_ssh_login_credentials", "e) ansible_ssh_private_key_file"],
        correct: 4
    },
    {
        question: "Which of the following functions are supported by the ansible copy module?",
        type: "varias",
        answers: ["a) Create a backup of the original target file.", "b) Append text or data to an existing file.", "c) Set the owner of a file or directory on the target system.", "d) Decompress a file on the target system.", "e) Set permissions of a file or directory on the target system."],
        correct: [3, 4, 0]
    },
    {
        question: "What is Chef Solo?",
        type: "opcion",
        answers: ["a) A simplified configuration format for Chef which provides only a subset of the original Chef configuration options.", "b) A special Linux distribution which automatically reverts any change to the system not applied using Chef.", "c) A tool to use Chef to manage a local system instead of using a distributed chef infrastructure.", "d) An extension to Chef to install operating systems on bare metal servers or virtual machines.", "e) A package manager that retrieves software installed using Chef in the generic Chef Menu Format, CMF, instead of using the target."],
        correct: 2
    },
    {
        question: "Which file contains the global Ansible configuration?",
        type: "opcion",
        answers: ["a) /etc/ansible/all.vars", "b) /etc/ansible/master.conf", "c) /etc/ansible.d/main.conf", "d) /etc/ansible.conf", "e) /etc/ansible/ansible.cfg"],
        correct: 4
    },
    {
        question: "Which criteria can packet filtering firewalls use to permit or suppress traffic?",
        type: "varias",
        answers: ["a) TCP and UDP ports", "b) Object IDs in REST URLs", "c) HTTP Cookies", "d) Common Names in X.509 certificates.", "e) IP addresses"],
        correct: [4, 0]
    },
    {
        question: "Consider the following log message: 'Jun 30 00:36:49 headnode clustermanager{12353}: new node 198.51.100.103'. This log message is processed by the following Logstash filter: grok { match => { \"message\", \"%{SYSLOGBASE} new node %{IPORHOST:node}\" } }. Which of the variables below are contained in the resulting event object?",
        type: "varias",
        answers: ["a) message", "b) grok", "c) node", "d) SYSLOGBASE", "e) IPORHOST"],
        correct: [3, 4]
    },
    {
        question: "What has to be done to configure Filebeat to submit log information to Logstash?",
        type: "varias",
        answers: ["a) Install Filebeat on the Logstash server and allow the Linux user running the Filebeat daemon to login to the remote host via SSH without using a password.", "b) Replace the input section of the Logstash configuration by a filebeat section.", "c) Add an output.logstash section to the Filebeat configuration and specify the Logstash server in that section's hosts attribute.", "d) Add the IP address of the Filebeat node to the option accept option in the section acl of the Logstash input configuration.", "e) Add a beats section to the input section of the Logstash configuration."],
        correct: [2, 4]
    },
    {
        question: "What happens when the following command is executed twice in succession? docker run -tid -v data:/data debian bash",
        type: "opcion",
        answers: ["a) The container resulting from the second invocation can only read the content of /data/ and cannot change it.", "b) The second command invocation fails with an error stating that the volume data is already associated with a running container.", "c) Each container is equipped with its own independent data volume, available at /data/ in the respective container.", "d) Both containers share the content of the data volume, have full permissions to alter its content and mutually see their respective changes.", "e) The original content of the data is available in both containers, although changes stay local within each container."],
        correct: 3
    },
    {
        question: "What happens if a grok filter in Logstash processes a log message which does not match the pattern in the filter's match property?",
        type: "opcion",
        answers: ["a) The message is passed to the unparseable output and no other filters are applied to it.", "b) The message is dropped and no other filters are applied to it.", "c) The message is kept unchanged and no other filters are applied to it.", "d) The message is truncated to those parts which have been matched by the filters.", "e) The message is flagged with the _grokparsefailure tag."],
        correct: 4
    },
    {
        question: "What kind of data is provided to Prometheus by a monitored service?",
        type: "opcion",
        answers: ["a) The monitored service provides metric values for keys defined in Prometheus' monitoring schema.", "b) The monitored service provides arbitrary pairs of keys and metric values which are scraped by Prometheus.", "c) The monitored service provides an interface which Prometheus queries for the value of a specific metric key.", "d) The monitored service provides one metric value which replaces the former value of the service's register in Prometheus.", "e) The monitored service provides a status in terms of one of three well defined service states."],
        correct: 2
    },
    {
        question: "Which of the following best practices help to handle large amounts of log data when using the Elastic Stack for log management?",
        type: "varias",
        answers: ["a) Leverage Elasticsearch indexes for the deletion of expired log data.", "b) Disable logging for all services and components which are externally monitored.", "c) Frequently rotate logs on their origin systems and delete logs that were shipped to Logstash.", "d) Exclude obviously meaningless log data from log processing as early as possible.", "e) Disable logging generally and only enable it in case of failures or errors."],
        correct: [3, 2, 0]
    },
    {
        question: "Which of the following scenarios describes SSL offloading?",
        type: "opcion",
        answers: ["a) To use HTTPS for multiple hosts in the same domain, a wildcard certificate is used on all nodes hosting the services.", "b) The main content of a website is delivered using HTTPS, assets such as images or scripts are delivered using HTTP.", "c) Requests which arrive encrypted via HTTPS are answered with redirects to HTTP URLs to improve performance.", "d) Incoming HTTPS connections are received by a load balancer which handles the encryption and passes decrypted requests to backend servers.", "e) Requests which arrive in plain text via HTTP are redirected to HTTPS URLs to enforce encryption."],
        correct: 3
    },
    {
        question: "When can an SQL injection attack happen?",
        type: "opcion",
        answers: ["a) When strings of arbitrary length are passed to a database so they can exceed the length of data type or data field.", "b) When SQL statements are stored as database content and might be returned unchanged to a client querying the database.", "c) When characters or strings received from an external source are passed unchanged to a database so they can include SQL.", "d) When database queries of an application are redirected to another server which then receives confidential information and might return manipulated data.", "e) When an API which causes writes to the database can be triggered remotely without rate limits or other restrictions."],
        correct: 3
    },
    {
        question: "Which git command restores changes that were saved using git stash save?",
        type: "opcion",
        answers: ["a) git stash revert", "b) git stash restore", "c) git stash merge", "d) git stash commit", "e) git stash pop"],
        correct: 4
    },
    {
        question: "What are the benefits of feature toggles?",
        type: "varias",
        answers: ["a) Feature toggles start microservices on demand when their functionality is requested.", "b) Feature toggles reduce the build time by excluding unnecessary features from a build.", "c) Feature toggles decouple technical deployments from the official launch of a product.", "d) Feature toggles can enable new features for advanced users before globally releasing them.", "e) Feature toggles eliminate the need for feature branches in an SCM during development."],
        correct: [2, 4]
    },
    {
        question: "The following output is generated by git branch: development, master, production, *staging. How can all changes from the development branch be integrated into the staging branch?",
        type: "opcion",
        answers: ["a) git merge development", "b) git cp --merge development", "c) git merge development..staging", "d) git stash development", "e) git branch --merge development"],
        correct: 0
    },
    {
        question: "Where should containerized applications store persistent data such as user uploaded files or billing information?",
        type: "varias",
        answers: ["a) In files inside the container that are exclusively locked by the application.", "b) In database server which is installed within the container.", "c) In dedicated, well known directory trees within the container.", "d) In external systems such as databases or object stores.", "e) In memory with an API to download a serialized dump of the data."],
        correct: [3, 1]
    },
    {
        question: "Given the following Kubernetes deployment with DESIRED: 2, CURRENT: 2, UP-TO-DATE: 2, AVAILABLE: 0, AGE: 17s. Which command scales the application to five containers?",
        type: "opcion",
        answers: ["a) kubectl deployment myapp replicas=5", "b) kubectl edit deployment/myapp replicas=5", "c) kubectl replicate deployment/myapp +3", "d) kubectl scale deployment/myapp --replicas=5", "e) kubectl clone deployment/myapp 3"],
        correct: 3
    },
    {
        question: "Where should a Jenkinsfile describing a build pipeline be located?",
        type: "opcion",
        answers: ["a) As build artifact in the default artifact store associated with the respective Jenkins project.", "b) At the top level of the SCM repository being built.", "c) In the Jenkins folder next to the workspace directory.", "d) On a web server with an HTTP URL Jenkins can access.", "e) In an SCM dedicated repository dedicated to hold Jenkins configuration files."],
        correct: 4
    },
    {
        question: "After creating a new Docker network using the following command: docker network create --driver bridge isolated_nw, which parameter must be added to docker create in order to attach a container to the network?",
        type: "opcion",
        answers: ["a) --alias=isolated_nw", "b) --network=isolated_nw", "c) --ethernet=isolated_nw", "d) --attach=isolated_nw", "e) --eth0=isolated_nw"],
        correct: 1
    },
    {
        question: "The file myapp.yml contains a docker-compose configuration with frontend and backend services. Given that file was successfully processed by 'docker stack deploy myapp --compose-file myapp.yml', which of the following objects might be created?",
        type: "varias",
        answers: ["a) A container called myapp_backend.2.ymia7v7of5g02j3j3i1btt8z.", "b) An overlay network called myapp_default.", "c) A volume called myapp_frontend.1.", "d) A node called myapp_frontend.", "e) A service called myapp_frontend."],
        correct: [1, 0, 4]
    },
    {
        question: "Which of the following statements are true about Jenkins? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Jenkins can delegate tasks to slave nodes.", "b) Jenkins includes a series of integrated testing suites.", "c) Jenkins is specific to Java based applications.", "d) Jenkins' functionality is determined by plugins.", "e) Jenkins only works on local files and cannot use SCM repositories."],
        correct: [0, 3]
    },
    {
        question: "Which of the following information is contained in the output of git status? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) Changed files that will be part of the next commit.", "b) Untracked files which are not subject to version control.", "c) Locked files which cannot be edited until the lock is released.", "d) Changed files that will not be part of the next commit.", "e) Unchanged files which have not been edited locally."],
        correct: [3, 0, 1]
    },
    {
        question: "What happens when a merge conflict occurs in git? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) The conflicting files remain unchanged in the local repository.", "b) Conflict markers are added to the files.", "c) A new branch containing the remote changes is created.", "d) The newest version is placed in the local repository.", "e) The affected files are flagged as conflicting."],
        correct: [1, 4]
    },
    {
        question: "Which configuration option in the Ansible inventory is used to control privilege escalation of the remote user?",
        type: "opcion",
        answers: ["a) priv_user", "b) super", "c) sudo", "d) elevate", "e) become"],
        correct: 4
    },
    {
        question: "Which Ansible modules can be used to change the contents of a file? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) patch", "b) modify", "c) replace", "d) lineinfile", "e) insert"],
        correct: [3, 2, 0]
    },
    {
        question: "What is the Puppet equivalent to an Ansible Playbook called?",
        type: "opcion",
        answers: ["a) A Puppet Manifest", "b) A Puppet Catalog", "c) A Puppet Playbook", "d) A Puppet Factsheet", "e) A Puppet Declaration"],
        correct: 0
    },
    {
        question: "Which of the following Ansible tasks copies the file example.txt to a managed system?",
        type: "opcion",
        answers: ["a) - cp: source: example.txt dst: /tmp/example.txt", "b) - retrieve: src: example.txt dest: /tmp/example.txt", "c) - rsync: src: example.txt dst: /tmp/example.txt", "d) - transfer: src: example.txt dest: /tmp/example.txt", "e) - copy: src: example.txt dest: /tmp/example.txt"],
        correct: 4
    },
    {
        question: "Which of the following commands lists the cookbooks available on a Chef server?",
        type: "opcion",
        answers: ["a) chef-solo cookbook list", "b) knife cookbook list", "c) chef-server cookbook list", "d) kitchen cookbook list", "e) chef-client cookbook list"],
        correct: 1
    },
    {
        question: "An Ansible variable file contains the following content:\nmyapp:\n  option1: one\nWhich of the following strings can be used to reference the defined variable? (Choose two correct answers).",
        type: "varias",
        answers: ["a) myapp['option1']", "b) myapp.option1", "c) myapp(option1);", "d) option1@myapp", "e) myapp{{option1}}"],
        correct: [0, 1]
    },
    {
        question: "Which of the following statements regarding microservices are true? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) Microservices applications are hard to scale because microservice architecture allows only one instance of each microservice.", "b) Interaction between microservices can be slower than the interaction of similar components within a monolithic application.", "c) Microservices facilitate the replacement of the implementation of a specific functionality.", "d) Within one application, individual microservices can be updated and redeployed independent of the remaining microservices.", "e) Integration tests for microservices are not possible until all microservices forming a specific application are completely developed."],
        correct: [2, 1, 3]
    },
    {
        question: "Which Ansible keyword is used in a playbook to store the result (i.e. return code) of a task in a variable?",
        type: "opcion",
        answers: ["a) return", "b) register", "c) set_fact", "d) result", "e) output"],
        correct: 1
    },
    {
        question: "Which of the following functions are provided by the Ansible apt module? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Re-compile an installed package from the source code.", "b) Add the URL of a new repository to the package manager configuration.", "c) Update an installed package to the latest version.", "d) Install a dpkg based Linux distribution on an empty target system.", "e) Update the list of available packages from configured repositories."],
        correct: [2, 4]
    },
    {
        question: "What statement is true regarding the Swarm service created by the following command? docker service create --name myweb --network webnet --mode global nginx",
        type: "opcion",
        answers: ["a) It runs exactly once on each node in a Swarm.", "b) It runs on all nodes which provide the network webnet.", "c) It runs exactly one time in the Swarm and cannot be scaled.", "d) It runs only on those nodes which support the network type global.", "e) It runs on one node by default and can be scaled to an arbitrary number of replicas."],
        correct: 0
    },
    {
        question: "Which of the following mechanisms are used for service discovery in a container environment? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) The container platform sets environment variables containing service information within the containers.", "b) The container platform mounts the sockets for all available services into the container's file systems.", "c) The container platform maintains DNS records which point to containers offering a specific service.", "d) The container platform lists localhost ports assigned to containers in each container's /etc/services file.", "e) The container platform offers a command like docker service discover which should be run within a container."],
        correct: [0, 2]
    },
    {
        question: "Which of the statements below are true about the volume created by the following command? (Choose two correct answers.) docker run -v /data -ti debian",
        type: "varias",
        answers: ["a) The volume containing the container's root file system is retained until the /data volume is deleted.", "b) If the command is run a second time, another volume for /data is created.", "c) The /data volume can be attached to another Docker container.", "d) The /data volume is discarded when the container terminates.", "e) The new /data volume contains a copy of the complete container's base image."],
        correct: [2, 1]
    },
    {
        question: "Which of the following commands lists the nodes in a Docker Swarm cluster?",
        type: "opcion",
        answers: ["a) docker engine ls", "b) docker machine ls", "c) docker-swarm listnodes", "d) docker swarm nodes", "e) docker node ls"],
        correct: 4
    },
    {
        question: "Which of the following container names could have been assigned automatically by Docker?",
        type: "opcion",
        answers: ["a) c0023817", "b) container", "c) docker-c00001", "d) 2.0.17.172", "e) clever_ritchie"],
        correct: 4
    },
    {
        question: "How is a Docker container image retrieved from a Docker registry?",
        type: "opcion",
        answers: ["a) A flat hard disk image is downloaded once per container and mounted as the root file system.", "b) The registry merges all components of the image into one file which is shipped to Docker.", "c) Multiple stacked images are retrieved and layered on top of each other.", "d) Docker retrieves a ZIP archive which is extracted into the container's root file system.", "e) The container is built from an ISO file along with a configuration for an unattended installation."],
        correct: 2
    },
    {
        question: "Which statements are true regarding databases during the deployment of a new release of a service using canary deployment? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) The database is locked while its content is copied to the canary database.", "b) Changes to the database schema can take long and reduce the database performance.", "c) The database schema must be compatible to all running versions of a service.", "d) Traffic to the database will significantly increase because of the additional service instance.", "e) Canary deployments require two synchronized instances of each database."],
        correct: [2, 4]
    },
    {
        question: "Given the following excerpt of a Dockerfile:\nRUN apt-get -y update && apt-get install -y fortunes && apt-get clean\nWhy are the multiple apt-get commands combined in one RUN statement instead of using multiple RUN statements?",
        type: "opcion",
        answers: ["a) To ensure the execution order of the commands because Docker might evaluate the statements of a Dockerfile in any order.", "b) To execute the apt-get install command only if the apt-get update command was successful because Docker does not check the success of RUN statements.", "c) To prevent the commands from running in parallel because Docker executes all RUN statements in their own container at the same time.", "d) To execute both commands in the same container instance and avoid Docker to reset the container to the original base image.", "e) To avoid the creation of unnecessary images because Docker creates a new image for each RUN statement."],
        correct: 4
    },
    {
        question: "Which of the following tasks are completed by docker-compose down when it is used with additional parameters? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Delete all images built from the compose file from their registry.", "b) Delete all networks defined in the compose file.", "c) Delete all images used in the compose file from the Docker nodes.", "d) Delete all volumes defined in the compose file.", "e) Delete all containers defined in the compose file."],
        correct: [3, 2]
    },
    {
        question: "The following command is issued on two docker nodes:\ndocker network create --driver bridge isolated_nw\nAfterwards, one container is started at each node with the parameter --network=isolated_nw. It turns out that the containers cannot interact with each other.\nWhat must be done in order to allow the containers to interact with each other? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Use a host network instead of a bridged network.", "b) Add the option --inter-container to the docker network create command.", "c) Change the --network parameter of docker create to --network=isolated_nw,nofence.", "d) Start the containers on the same node.", "e) Use an overlay network instead of a bridged network."],
        correct: [3, 4]
    },
    {
        question: "If a Dockerfile references the container's base image without a specific version tag, which tag of that image is used to create the container?",
        type: "opcion",
        answers: ["a) nightly", "b) default", "c) lts", "d) current", "e) latest"],
        correct: 4
    },
    {
        question: "What happens if one of the Pods in a Kubernetes Deployment is terminated with the command kubectl pod delete?",
        type: "opcion",
        answers: ["a) The remaining Pods are stopped and a new ReplicaSet is started.", "b) The ReplicaSet immediately starts a new replacement Pod.", "c) The Deployment switches to the state Degraded.", "d) The number of replicas in the ReplicaSet is changed to 4.", "e) The remaining Pods are stopped and the Deployment switches to the state Failed."],
        correct: 1
    },
    {
        question: "A Dockerfile contains the statements:\nCOPY data/ /data/\nVOLUME /data\nWhat happens when the resulting container is started without any additional volume configuration? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) An error is raised because /data/ already contains data when the volume is mounted.", "b) Existing files from /data/ in the image are copied to the new volume.", "c) Changes to files within /data/ affect the Docker image and all other containers derived from it.", "d) Files existing in /data/ in the image are not available in the running container.", "e) A new volume is created and mounted to /data/ within the new container."],
        correct: [1, 4]
    },
    {
        question: "Which section of the Prometheus configuration defines which nodes are monitored?",
        type: "opcion",
        answers: ["a) rules", "b) targets", "c) nodes", "d) listener", "e) scrape_config"],
        correct: 4
    },
    {
        question: "Which of the log messages below matches the following Logstash grok filter?\ngrok { match => [\"message\", \"%{SYSLOGBASE} new node %{IPORHOST:node}\"] }",
        type: "opcion",
        answers: ["a) Jun 30 00:36:49 headnode clustermanager[198.51.100.103]: new node", "b) clustermanager[12353]: Jun 30 00:36:49 headnode new node 198.51.100.103", "c) Jun 30 00:36:49 headnode: new node 198.51.100.103 at clustermanager:12353", "d) %{SYSLOG-FROM:headnode clustermanager[12353]} new node 198.51.100.103", "e) Jun 30 00:36:49 headnode clustermanager[12353]: new node 198.51.100.103"],
        correct: 4
    },
    {
        question: "A declarative Jenkins pipeline contains the following excerpt:\nparameters {\n  string (name: 'TargetEnvironment', defaultValue: 'staging', description: 'Target environment')\n}\nHow can a task use the value provided for TargetEnvironment?",
        type: "opcion",
        answers: ["a) $TargetEnvironment", "b) $ENV{TargetEnvironment}", "c) %TargetEnvironment%", "d) {{TargetEnvironment}}", "e) ${params.TargetEnvironment}"],
        correct: 4
    },
    {
        question: "A recently installed application writes log data to /opt/app/log/info.log. If Filebeat is already installed and set up for communication with a remote Logstash, what has to be done in order to submit the log data of the new application to Logstash?",
        type: "opcion",
        answers: ["a) Add the log file to the path option within the log prospector in the Filebeat configuration and restart Filebeat.", "b) Add a new cron job that invokes filebeat -i /opt/app/log/info.log periodically.", "c) Replace /opt/app/log/info.log by a symbolic link to /dev/filebeat and restart the new application.", "d) Add an additional input channel with the option source => '/opt/app/log/info.log' to the Logstash configuration.", "e) Configure logrotate to execute filebeat -I /opt/app/log/info.log 0 after each rotation of /opt/app/log/info.log."],
        correct: 0
    },
    {
        question: "Which sections can exist in a Logstash configuration file? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) input", "b) generate", "c) output", "d) filter", "e) forward"],
        correct: [2, 3, 0]
    },
    {
        question: "How does Prometheus gather information about monitored hosts and services?",
        type: "opcion",
        answers: ["a) It queries a relational database for metrics written to the database by monitored applications.", "b) It implements the ICMP and SNMP protocols to ping and query remote services.", "c) It opens a webhook where monitored applications have to submit various metrics.", "d) It uses HTTP to retrieve JSON encoded metrics from the monitored objects.", "e) It runs scripts on the Prometheus server which perform tests and return various metrics."],
        correct: 3
    },
    {
        question: "A service should be provided to arbitrary clients on the Internet using HTTPS. Any standard client on the Internet should be able to consume the service without further configuration. Which of the following approaches can be used to implement these requirements? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) Use a certificate issuing service to request certificates during each server deployment.", "b) Use a load balancer that decrypts incoming requests and passes them on in plain HTTP.", "c) Install a wildcard certificate and the respective private key on all the backend servers.", "d) Generate a self-signed certificate during the deployment of each backend server.", "e) Configure the web servers to not use a server certificate when serving HTTPS."],
        correct: [0, 1, 2]
    },
    {
        question: "Which of the following statements is true about load balancers?",
        type: "opcion",
        answers: ["a) Load balancers are a security risk because they obfuscate the origin of connections.", "b) Load balancers help to improve the availability and scalability of a service.", "c) Load balancers require access to private keys in order to be able to forward HTTPS traffic.", "d) Load balancers cannot use connection content, such as HTTP cookies, to route traffic.", "e) Load balancers are a single point of failure because they cannot be deployed redundantly."],
        correct: 1
    },
    {
        question: "What does the command packer validate template.json do?",
        type: "opcion",
        answers: ["a) The command verifies that the latest build of the template can be run without downloading additional images or artifacts.", "b) The command verifies that all existing artifacts generated by template.json have their original checksums.", "c) The command verifies that the file template.json is a syntactically correct and complete Packer template.", "d) The command verifies that images generated previously by template.json still use the most recent source images.", "e) The command verifies that all source images referenced in template.json are available and have valid cryptographic signatures."],
        correct: 2
    },
    {
        question: "Which security issues exist for most publicly available Vagrant boxes? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) They accept SSH logins from the user vagrant with the password vagrant.", "b) Their whole file system, including configuration files, is writable by any user, including vagrant.", "c) They accept SSH logins from the user vagrant with a publicly available SSH key pair.", "d) The vagrant user can use sudo to obtain root privileges without additional authentication.", "e) They export their file system via NFS with full write permissions without any additional restrictions."],
        correct: [0, 2, 3]
    },
    {
        question: "How does Vagrant run virtual machines?",
        type: "opcion",
        answers: ["a) Vagrant ships with an embedded version of VirtualBox.", "b) Vagrant uses a vagrant-specific hypervisor called VagrantVM.", "c) Vagrant uses so-called providers which control external hypervisors such as VirtualBox.", "d) Vagrant has to be run within a running virtual machine which is not controlled by Vagrant.", "e) Vagrant generates virtual machine images but does not provide a mechanism to run them."],
        correct: 2
    },
    {
        question: "What must be the first line of a plain text user-data configuration containing YAML configuration for cloud-init?",
        type: "opcion",
        answers: ["a) #cloud-config", "b) [cloud-config]", "c) --- cloud-config", "d) cloud-config:", "e) #!/usr/bin/cloud-init"],
        correct: 0
    },
    {
        question: "Which of the following sections must exist in a Packer template?",
        type: "opcion",
        answers: ["a) images", "b) provisioners", "c) post-processors", "d) variables", "e) builders"],
        correct: 4
    },
    {
        question: "Which of the following HTTP headers is a CORS header?",
        type: "opcion",
        answers: ["a) X-CORS-Access-Token:", "b) Access-Control-Allow-Origin:", "c) Authorization:", "d) Location:", "e) Referer:"],
        correct: 1
    },
    {
        question: "How is cloud-init integrated with a managed system image?",
        type: "opcion",
        answers: ["a) cloud-init provides its own startup mechanism which replaces the instance's original init system, such as systemd.", "b) cloud-init provides the cloud-init-worker command which has to be invoked periodically within the running instance.", "c) cloud-init provides systemd units which must be included in several stages of the booting process of the instance.", "d) cloud-init provides a Linux kernel module that must be included and loaded in the instance's initramfs.", "e) cloud-init provides the cloud-init-daemon service which is launched during startup and keeps the instance in sync with the desired configuration."],
        correct: 2
    },
    {
        question: "Which of the following elements are present in a Vagrant box file? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Configuration files for provisioners such as Ansible.", "b) A base file system image in a format supported by the provider of the box.", "c) The installer for the Vagrant version which is required to run the box.", "d) A Vagrant guest configuration file that is used to create instances of the box.", "e) A metadata file describing the box and its requirements."],
        correct: [4, 1]
    },
    {
        question: "Which of the following statements describes the principal concept behind test driven development?",
        type: "opcion",
        answers: ["a) Tests are written before the function/method is implemented.", "b) The only acceptable reason to write a test is to prevent fixed bugs from occurring again.", "c) Tests may not be written by the same development team that wrote the tested code.", "d) All tests are generated automatically from the tested source code.", "e) Instead of testing software automatically, manual tests are performed and logged daily."],
        correct: 0
    },
    {
        question: "Which of the following goals are favored by agile software development methodologies? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Long-term release and feature management.", "b) Absolute planning adherence.", "c) Central governance and control.", "d) Flexibility of processes.", "e) Self-organization of teams."],
        correct: [4, 3]
    },
    {
        question: "Which of the following properties apply to a content delivery network? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) CDNs are present in multiple locations to serve content close to clients.", "b) CDNs can stream large media files such as movies or music to clients.", "c) CDNs serve huge numbers of clients with high bandwidth and low latency.", "d) CDNs forward all requests to a backend server and never store content locally.", "e) CDNs require all elements of a web site to be served by the same CDN."],
        correct: [1, 0, 2]
    },
    {
        question: "Which of the following kinds of data are suitable as artifacts in a continuous delivery pipeline? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) Docker container images which contain an application.", "b) Copies of the contents of source code repositories.", "c) Compiled packages to be installed by a Linux package manager.", "d) Build configuration files such as Makefiles or Maven configurations.", "e) Executable applications such as .exe files or .jar packages."],
        correct: [4, 2, 0]
    },
    {
        question: "Which of the following conditionals exist in an Ansible playbook? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) with_playbook", "b) with_nested", "c) with_nodes", "d) with_items", "e) with_sequence"],
        correct: [4, 3, 1]
    },
    {
        question: "Which of the following tasks can Logstash fulfill without using other components of the Elastic Stack? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) Forward log data to other services.", "b) Aggregate log data over a period of time.", "c) Store log data persistently.", "d) Process log data to extract information.", "e) Receive log data from remote systems."],
        correct: [2, 3, 0]
    },
    {
        question: "What is tested by unit tests?",
        type: "opcion",
        answers: ["a) The formal validity of a service's external REST API.", "b) The integration of multiple components of the same software.", "c) The syntactical correctness of the source code of a software component.", "d) The correctness of a specific function of a software component.", "e) The throughput, load capacity and latency of a service."],
        correct: 3
    },
    {
        question: "Which of the following git commands are used to manage files in a repository? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) git cp", "b) git move", "c) git mv", "d) git copy", "e) git rm"],
        correct: [4, 2]
    },
    {
        question: "An online shop needs to store information about clients and orders. A list of fixed properties for clients and orders exists. The data storage should enforce specific data types on these properties and ensure that each order is associated with an existing client. Which of the following cloud services is capable of fulfilling these requirements?",
        type: "opcion",
        answers: ["a) An in-memory database like memcached.", "b) An object store like OpenStack Swift.", "c) A messaging service like OpenStack Zaqar.", "d) A relational database like MariaDB.", "e) A NoSQL database like MongoDB."],
        correct: 3
    },
    {
        question: "What implications does container virtualization have for DevOps? (Choose two correct answers.)",
        type: "varias",
        answers: ["a) Containers decouple the packaging of an application from its infrastructure.", "b) Containers complicate the deployment of software and require early deployment tests.", "c) Containers require application specific adjustment to the container platform.", "d) Containers require developers to have detailed knowledge of their IT infrastructure.", "e) Containers let developers test their software under production conditions."],
        correct: [0, 4]
    },
    {
        question: "Which of the following HTTP methods are used by REST? (Choose three correct answers.)",
        type: "varias",
        answers: ["a) GET", "b) PUT", "c) CREATE", "d) DELETE", "e) REPLACE"],
        correct: [1, 3, 0]
    },
    {
        question: "The file index.php, which is being maintained in a git repository, was changed locally and contains an error. If the error has not been committed to the repository yet, which of the following git commands reverts the local copy of index.php to the latest committed version in the current branch?",
        type: "opcion",
        answers: ["a) git revert -- index.php", "b) git repair -- index.php", "c) git clean -- index.php", "d) git lastver -- index.php", "e) git checkout -- index.php"],
        correct: 4
    },
    // PREGUNTAS DE RESPUESTA ESCRITA
    {
        question: "Which subcommand of docker volume deletes all volumes which are not associated with a container? (Specify ONLY the subcommand without any path or parameters)",
        type: "escribir",
        correct: "prune"
    },
    {
        question: "Which property of a Kubernetes Deployment specifies the number of instances to create for a specific Pod? (Specify ONLY the option name, no matter of its location in the object hierarchy)",
        type: "escribir",
        correct: "replicas"
    },
    {
        question: "Which Ansible command line tool is used to download, install and manage roles from a public community site or an SCM such as Git? (Specify ONLY the command without any path or parameters)",
        type: "escribir",
        correct: "ansible-galaxy"
    },
    {
        question: "What is the default URL path Prometheus tries to retrieve from a target when gathering monitoring information? (Specify the path only, without any host name or scheme)",
        type: "escribir",
        correct: "/metrics"
    },
    {
        question: "In a docker swarm with nodes node-1 (Leader), node-2, node-3, node-4 (Reachable), and node-5 (Reachable), which node should be configured as DOCKER_HOST in order to run services on the swarm? (Specify ONLY the HOSTNAME of one of the potential target nodes)",
        type: "escribir",
        correct: "node-3"
    },
    {
        question: "Which git subcommand copies a local commit to a remote repository? (Specify ONLY the subcommand without any path or parameters.)",
        type: "escribir",
        correct: "push"
    },
    {
        question: "Which Ansible command is used to manage and store sensitive data in encrypted files? (Specify ONLY the command without any path or parameters.)",
        type: "escribir",
        correct: "ansible-vault"
    },
    {
        question: "Which elements exist on the highest level of the definition of every Kubernetes Object? (Specify the name of one of the elements, without any values.)",
        type: "escribir",
        correct: "apiVersion"
    },
    {
        question: "Which docker-machine subcommand outputs a list of commands that set environment variables which are required to make docker work with a Docker host managed by docker-machine? (Specify only the subcommand without any path or parameters.)",
        type: "escribir",
        correct: "env"
    },
    {
        question: "Which statement in a Dockerfile defines which command should be started in the container by default when it is started? (Specify ONLY the statement's name without any values or parameters.)",
        type: "escribir",
        correct: "CMD"
    },
    {
        question: "Which docker subcommand starts a new container? (Specify only the subcommand without any path or parameters.)",
        type: "escribir",
        correct: "run"
    },
    {
        question: "Which vagrant subcommand executes a command in a running box? (Specify only the subcommand without any path or parameters.)",
        type: "escribir",
        correct: "ssh"
    }
];