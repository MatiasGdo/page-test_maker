// Preguntas DevOps - Parte 3 (preguntas 21-30)
const questions_devops_part3 = [
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
    }
];