// Preguntas DevOps - Parte 4 (preguntas 31+) - Primera parte de 10 preguntas
const questions_devops_part4 = [
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
        answers: ["A. Run puppet agent --node all --refresh on the master.", "B. Restart the puppet master process.", "C. Run puppet agent –t on the node.", "D. Run puppet refresh on the node.", "E. Run puppet master --distribute on the master."],
        correct: 2
    },
    {
        question: "Which of the following expressions are valid Ansible variable names? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. example_var", "B. example.var", "C. example var", "D. example-var", "E. examplevar"],
        correct: [0, 4]
    },
    {
        question: "Which variable is used in the Ansible inventory file to specify the location of an SSH private key file?",
        type: "opcion",
        answers: ["A. ansible_private_key_file", "B. ansible_private_key", "C. ansible_ssh_key_file", "D. ansible_ssh_login_credentials", "E. ansible_ssh_private_key_file"],
        correct: 4
    },
    {
        question: "Which of the following functions are supported by the ansible copy module? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. Create a backup of the original target file.", "B. Append text or data to an existing file.", "C. Set the owner of a file or directory on the target system.", "D. Decompress a file on the target system.", "E. Set permissions of a file or directory on the target system."],
        correct: [0, 2, 4]
    },
    {
        question: "What is Chef Solo?",
        type: "opcion",
        answers: ["A. A simplified configuration format for Chef which provides only a subset of the original Chef configuration options.", "B. A special Linux distribution which automatically reverts any change to the system not applied using Chef.", "C. A tool to use Chef to manage a local system instead of using a distributed chef infrastructure.", "D. An extension to Chef to install operating systems on bare metal servers or virtual machines.", "E. A package manager that retrieves software installed using Chef in the generic Chef Menu Format, CMF, instead of using the target."],
        correct: 2
    },
    {
        question: "Which file contains the global Ansible configuration?",
        type: "opcion",
        answers: ["A. /etc/ansible/all.vars", "B. /etc/ansible/master.conf", "C. /etc/ansible.d/main.conf", "D. /etc/ansible.conf", "E. /etc/ansible/ansible.cfg"],
        correct: 4
    },
    {
        question: "Which criteria can packet filtering firewalls use to permit or suppress traffic? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. TCP and UDP ports", "B. Object IDs in REST URLs", "C. HTTP Cookies", "D. Common Names in X.509 certificates.", "E. IP addresses"],
        correct: [0, 4]
    },
    {
        question: "Which sub command of docker volume deletes all volumes which are not associated with a container? (Specify ONLY the sub command without any path or parameter)",
        type: "escribir",
        correct: "prune"
    }
];