const questions_lpi_202 = [
  {
    question: "Which Apache HTTPD configuration directive is used to specify the method of authentication, e.g. None or Basic?",
    type: "opcion",
    answers: ["A. AuthType", "B. AllowedAuthUser", "C. AllowAuth", "D. AuthUser"],
    correct: 0
  },
  {
    question: "Which keyword is used in the Squid configuration to define networks and times used to limit access to the service?",
    type: "opcion",
    answers: ["A. allow", "B. acl", "C. http_allow", "D. permit"],
    correct: 1
  },
  {
    question: "Which Apache HTTPD configuration directive specifies the RSA private key that was used in the generation of the SSL certificate for the server?",
    type: "opcion",
    answers: ["A. SSLPrivateKeyFile", "B. SSLKeyFile", "C. SSLCertificateKeyFile", "D. SSLRSAKeyFile"],
    correct: 2
  },
  {
    question: "Which of these sets of entries does the following command return?",
    type: "opcion",
    answers: ["A. Entries that don't have a cn of marie or don't have a telephoneNumber that begins with 9.", "B. Entries that have a cn of marie and a telephoneNumber that ending with 9.", "C. Entries that don't have a cn of marie and don't have a telephoneNumber beginning with 9.", "D. Entries that have a cn of marie or don't have a telephoneNumber beginning with 9.", "E. Entries that have a cn of marie or have a telephoneNumber beginning with 9"],
    correct: 3
  },
  {
    question: "Which of the following statements is INCORRECT regarding the LDIF file format?",
    type: "opcion",
    answers: ["A. If an attribute contains binary data, some specific configurations must be made for this entry", "B. In the file, a blank line separates one entry from another one", "C. The LDIF file accepts any type of file encoding.", "D. It contains a dn line that indicates where the attributes listed in the following lines of the file must be added."],
    correct: 2
  },
  {
    question: "Which option within the ISC DHCPD configuration file defines the IPv4 DNS server address(es) to be sent to the DHCP clients?",
    type: "opcion",
    answers: ["A. domain-server", "B. domain-name-servers", "C. name-server", "D. servers"],
    correct: 1
  },
  {
    question: "Which of the following is correct about this excerpt from an LDIF file?",
    type: "opcion",
    answers: ["A. o is the operator name", "B. dn is the relative distinguished name", "C. dn is the domain name", "D. DC is the delegation container.", "E. cn is the common name"],
    correct: 4
  },
  {
    question: "Select the alternative that shows the correct way to disable a user login for all users except root.",
    type: "opcion",
    answers: ["A. The use of the pam_block module along with the /etc/login configuration file.", "B. The use of the pam_deny module along with the /etc/deny configuration file.", "C. The use of the pam_pwdb module along with the /etc/pwdv.conf configuration file.", "D. The use of the pam_nologin module along with the /etc/nologin configuration file"],
    correct: 3
  },
  {
    question: "Which of the following types of IPv6 address assignments does DHCPv6 support? (Choose three.)",
    type: "varias",
    answers: ["A. Assignments of blacklisted IPv6 addresses that should no longer be used.", "B. Assignments of temporary IPv6 addresses that cannot be renewed", "C. Assignments of IPv6 prefixes that can be used for routing or further assignments", "D. Assignments of anonymous IPv6 addresses whose assignment is not logged by the DHCPv6 server", "E. Assignments of normal IPv6 addresses that can be renewed"],
    correct: [4, 1, 2]
  },
  {
    question: "Which of the following commands is used to change user passwords in an OpenLDAP directory?",
    type: "opcion",
    answers: ["A. ldappasswd", "B. setent", "C. dapchpw", "D. dpasswd", "E. olppasswd"],
    correct: 0
  },
  {
    question: "Which of the following are commonly used log file directives in Apache? (Choose TWO correct answers.)",
    type: "varias",
    answers: ["A. VHostLog", "B. ErrorLog", "C. CustomLog", "D. ServerLog", "E. ConfigLog"],
    correct: [2, 1]
  },
  {
    question: "Which of the following lines is valid in a configuration file in /etc/pam.d/?",
    type: "opcion",
    answers: ["A. authrequired:pam_unix.so(try_first_pass nullok)", "B. authtry_first_pass nullok, require pam_unix.so", "C. authpam_unix.so(required try_first_pass nullok)", "D. authrequired pam_unix.sotry_first_pass nullok"],
    correct: 3
  },
  {
    question: "Which of the following values can be used in the OpenLDAP attribute olcBackend for any object of the class olcBackendConfig to specify a backend? (Choose three.)",
    type: "varias",
    answers: ["A. xml", "B. text", "C. bdb", "D. ldap", "E. passwd"],
    correct: [2, 4, 3]
  },
  {
    question: "Which of the following PAM modules sets and unsets environment variables?",
    type: "opcion",
    answers: ["A. pam-vars", "B. pam_export", "C. pam-env", "D. pam_shell", "E. pam_set"],
    correct: 2
  },
  {
    question: "After running ssh-keygen and accepting the default values, which of the following files are changed or created? (Choose two.)",
    type: "varias",
    answers: ["A. ~/.ssh/id_rsa.key", "B. ~/.ssh/id_rsa.prv", "C. ~/.ssh/id_rsa", "D. ~/.ssh/id_rsa.crt", "E. ~/.ssh/id_rsa.pub"],
    correct: [4, 2]
  },
  {
    question: "Which of the following OpenVPN configuration options makes OpenVPN forward network packets between VPN clients itself instead of passing the packets on to the Linux host which runs the OpenVPN server for further processing?",
    type: "opcion",
    answers: ["A. client-router", "B. inter-client-traffic", "C. client-pass", "D. grant-client-traffic", "E. client-to-client"],
    correct: 4
  },
  {
    question: "Which of the following commands can be used to connect and interact with remote TCP network services? (Choose two.)",
    type: "varias",
    answers: ["A. nc", "B. cat", "C. nettalk", "D. netmap", "E. telnet"],
    correct: [0, 4]
  },
  {
    question: "With Nginx, which of the following directives is used to proxy requests to a FastCGI application?",
    type: "opcion",
    answers: ["A. proxy_fastcgi", "B. fastcgi_forward", "C. proxy_fastcgi_pass", "D. fastcgi_proxy", "E. fastcgi_pass"],
    correct: 4
  },
  {
    question: "There is a restricted area in an Apache site, which requires users to authenticate against the file /srv/www/security/site-passwd. Which command is used to CHANGE the password of existing users, without losing data, when Basic authentication is being used.",
    type: "opcion",
    answers: ["A. htpasswd -D /srv/www/security/site-passwd user", "B. htpasswd -c /srv/www/security/site passwd user", "C. None of the above", "D. htpasswd /srv/www/security/site-passwd user", "E. htpasswd -n /srv/www/security/site-passwd user"],
    correct: 3
  },
  {
    question: "Which of the following statements are true regarding Server Name Indication (SNI)? (Choose two.)",
    type: "varias",
    answers: ["A. It allows multiple SSL/TLS secured virtual HTTP hosts to coexist on the same IP address.", "B. It provides a list of available virtual hosts to the client during the TLS handshake.", "C. It submits the host name of the requested URL during the TLS handshake.", "D. It supports transparent failover of TLS sessions from one web server to another.", "E. It enables HTTP servers to update the DNS of their virtual hosts' names using the X 509 certificates of the virtual hosts."],
    correct: [0, 2]
  },
  {
    question: "The following Apache HTTPD configuration has been set up to create a virtual host available at www.example.com and www2.example.com:\n\nEven though Apache HTTPD correctly processed the configuration file, requests to both names are not handled correctly. What should be changed in order to ensure correct operations?",
    type: "opcion",
    answers: ["A. The configuration must be split into two VirtualHost sections since each virtual host may only have one name.", "B. Both virtual host names have to be mentioned in the opening VirtualHost tag", "C. Both virtual host names have to be placed as comma separated values in one ServerName declaration.", "D. The port mentioned in opening VirtualHost tag has to be appended to the ServerName declaration's values", "E. Only one Server name declaration may exist, but additional names can be declared in ServerAlias options."],
    correct: 4
  },
  {
    question: "Given the following Squid configuration excerpt:\n\ncache_dir ufs /var/spool/squid3/ 1024 16 256\n\nWhich of the following directories will exist directly within the directory /var/spool/squid3/? (Choose two.)",
    type: "varias",
    answers: ["A. A0", "B. FF", "C. 0b", "D. 0F", "E. 00"],
    correct: [3, 4]
  },
  {
    question: "Which option within a Nginx server configuration section defines the file system path from which the content of the server is retrieved?",
    type: "opcion",
    answers: ["A. htdocs", "B. location", "C. root", "D. DocumentRooT", "E. base_dir"],
    correct: 2
  },
  {
    question: "Which of the following information has to be submitted to a certification authority in order to request a web server certificate?",
    type: "opcion",
    answers: ["A. The list of ciphers supported by the web server", "B. The web server's SSL configuration file", "C. The certificate signing request", "D. The IP address of the web server", "E. The web server's private key"],
    correct: 2
  },
  {
    question: "Which attitude of an object in LDAP defines which other attributes can be set for the object? (Specify ONLY the attribute name without any values.)",
    type: "escribir",
    correct: "class"
  },
  {
    question: "A user requests a “hidden” Samba share, named confidential, similar to the Windows Administration Share. How can this be configured?",
    type: "opcion",
    answers: ["A. [#confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700", "B. [$confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700", "C. [confidential$]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700", "D. [confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700", "E. [%confidential]\ncomment = hidden share\npath = /srv/smb/hidden\nwrite list = user\ncreate mask = 0700\ndirectory mask = 0700"],
    correct: 2
  },
  {
    question: "How must Samba be configured such that it can check CIFS passwords against those found in /etc/passwd and /etc/shadow?",
    type: "opcion",
    answers: ["A. Run smbpasswd to convert /etc/passwd and /etc/shadow to a Samba password file", "B. Delete the smbpasswd file and create a symbolic link to the passwd and shadow file", "C. Set the parameters “encrypt passwords = yes” and “password file = /etc/passwd”", "D. Set the parameters “encrypt passwords = yes”, “password file = /etc/passwd” and “password algorithm = crypt”", "E. It is not possible for Samba to use /etc/passwd and /etc/shadow directly"],
    correct: 4
  },
  {
    question: "In a BIND zone file, what does the @ character indicate?",
    type: "opcion",
    answers: ["A. It’s an alias for the e-mail address of the zone master", "B. It’s the name of the zone as defined in the zone statement in named.conf", "C. It’s used to create an alias between two CNAME entries", "D. It’s the fully qualified host name of the DNS server"],
    correct: 1
  },
  {
    question: "In order to protect a directory on an Apache HTTPD web server with a password, this configuration was added to an .htaccess file in the respective directory:\n\nFurthermore, a file /var/www/dir/ .htpasswd was created with the following content:\nusera:S3cr3t\n\nGiven that all these files were correctly processed by the web server processes, which of the following statements is true about requests to the directory?",
    type: "opcion",
    answers: ["A. Requests are answered with HTTP error code 500 (Internal Server Error)", "B. Accessing the directory as usera raises HTTP error code 442 (User Not Existent)", "C. The user usera can access the site using the password s3cr3t", "D. The browser prompts the visitor for a username and password but logins for usera do not seem to work", "E. The web server delivers the content of the directory without requesting authentication"],
    correct: 2
  },
  {
    question: "In which CIFS share must printer drivers be placed to allow Point’n’Print driver deployment on Windows?",
    type: "opcion",
    answers: ["A. NETLOGON", "B. The name of the share is specified in the option print driver share within each printable share in smb.conf", "C. winx64drv$", "D. print$", "E. pnpdrivers$"],
    correct: 3
  },
  {
    question: "Performing a DNS lookup with dig results in this answer:\n\nSeleccione una:",
    type: "opcion",
    answers: ["A. There is no . after linuserv.example.net in the PTR record in the reverse lookup zone file", "B. There is no . after linuserv in the PTR record in the forward lookup zone file", "C. There is no . after linuserv.example.net in the PTR record in the forward lookup zone file", "D. The . in the NS definition in the reverse lookup zone has to be removed"],
    correct: 0
  },
  {
    question: "The content of which local file has to be transmitted to a remote SSH server in order to be able to log into the remote server using SSH keys?",
    type: "opcion",
    answers: ["A. ~/.ssh/id_rsa", "B. ~/.ssh/id_rsa.pub", "C. ~/.ssh/authorized_keys", "D. ~/.ssh/config", "E. ~./ssh/known_hosts"],
    correct: 2
  },
  {
    question: "The program vsftpd, running in a chroot jail, gives the following error:\n\n/bin/vsftpd: error while loading shared libraries: libc.so.6: cannot open shared object file:\n\nNo such file or directory\n\nWhich of the following actions would fix the error?",
    type: "opcion",
    answers: ["A. Copy the required library to the appropriate lib directory in the chroot jail", "B. Run the program using the command chroot and the option--static_libs", "C. The file /etc/ld.so.conf in the root filesystem must contain the path to the appropriate lib directory in the chroot jail", "D. Create a symbolic link that points to the required library outside the chroot jail"],
    correct: 0
  },
  {
    question: "What information can be found in the file specified by the status parameter in an OpenVPN server configuration file? (Choose two.)",
    type: "varias",
    answers: ["A. A history of all clients who have connected at some point", "B. Statistical information regarding the currently running openvpn daemon", "C. Errors and warnings generated by the openvpn daemon", "D. Routing information", "E. A list of currently connected clients"],
    correct: [3, 4]
  },
  {
    question: "What is DNSSEC used for?",
    type: "opcion",
    answers: ["A. Authentication of the user that initiated the DNS query", "B. Encrypting DNS queries and answers", "C. Secondary DNS queries for local zones", "D. Encrypted DNS queries between nameservers", "E. Cryptographic authentication of DNS zones"],
    correct: 4
  },
  {
    question: "What is the name of the network security scanner project which, at the core, is a server with a set of network vulnerability tests?",
    type: "opcion",
    answers: ["A. NetMap", "B. OpenVAS", "C. Wireshark", "D. Smartscan"],
    correct: 1
  },
  {
    question: "What option for BIND is required in the global options to disable recursive queries on the DNS server by default?",
    type: "opcion",
    answers: ["A. allow-recursive-query ( none; );", "B. allow-recursive-query off;", "C. recursion { disabled; };", "D. recursion no;", "E. recursion { none; };"],
    correct: 3
  },
  {
    question: "What option in the client configuration file would tell OpenVPN to use a dynamic source port when making a connection to a peer?",
    type: "opcion",
    answers: ["A. nobind", "B. source-port", "C. src-port", "D. remote", "E. dynamic-bind"],
    correct: 0
  },
  {
    question: "In response to a certificate signing request, a certification authority sent a web server certificate along with the certificate of an intermediate certification authority that signed the web server certificate.\n\nWhat should be done with the intermediate certificate in order to use the web server certificate with Apache HTTPD?",
    type: "opcion",
    answers: ["A. The intermediate certificate should be improved into the certificate store of the web browser used to test the correct operation of the web server", "B. The intermediate certificate should be used to verify the certificate before its deployment on the web server and can be deleted", "C. The intermediate certificate should be merged with the web server’s certificate into one file that is specified in SSLCertificateFile", "D. The intermediate certificate should be archived and resent to the certification authority in order to request a renewal of the certificate", "E. The intermediate certificate should be stored in its own file which is referenced in SSLCaCertificateFile"],
    correct: 2
  },
  {
    question: "What word is missing from the following excerpt of a named.conf file?",
    type: "opcion",
    answers: ["A. group", "B. networks", "C. list", "D. acl", "E. net"],
    correct: 3
  },
  {
    question: "When the default policy for the netfilter INPUT chain is set to DROP, why should a rule allowing traffic to localhost exist?",
    type: "opcion",
    answers: ["A. The iptables command communicates with the netfilter management daemon netfilterd on localhost to create and change packet filter rules", "B. Some applications use the localhost interface to communicate with other applications", "C. syslogd receives messages on localhost", "D. It doesn’t matter; netfilter never affects packets addressed to localhost", "E. All traffic to localhost must always be allowed"],
    correct: 1
  },
  {
    question: "When using mod_authz_core, which of the following strings can be used as an argument to Require in an Apache HTTPD configuration file to specify the authentication provider? (Choose three.)",
    type: "varias",
    answers: ["A. all", "B. expr", "C. header", "D. regex", "E. method"],
    correct: [4, 0, 1]
  },
  {
    question: "Which Apache HTTPD directive enables HTTPS protocol support?",
    type: "opcion",
    answers: ["A. HTTPSEnable on", "B. SSLEngine on", "C. SSLEnable on", "D. StartTLS on", "E. HTTPSEngine on"],
    correct: 1
  },
  {
    question: "Which BIND option should be used to limit the IP addresses from which slave name servers may connect?",
    type: "opcion",
    answers: ["A. allow-slaves", "B. allow-zone-transfer", "C. allow-transfer", "D. allow-queries", "E. allow-secondary"],
    correct: 2
  },
  {
    question: "Which command is used to configure which file systems a NFS server makes available to clients?",
    type: "opcion",
    answers: ["A. nfsservct1", "B. exportfs", "C. mount", "D. telinit", "E. mkfs.nfs"],
    correct: 1
  },
  {
    question: "Which global option in squid.conf sets the port number or numbers that Squid will use to listen for client requests?",
    type: "opcion",
    answers: ["A. http_port", "B. server_port", "C. client_port", "D. port", "E. squid_port"],
    correct: 0
  },
  {
    question: "Which http_access directive for Squid allows users in the ACL named sales_net to only access the Internet at times specified in the time_acl named sales_time?",
    type: "opcion",
    answers: ["A. allow http_access sales_net sales_time", "B. http_access deny sales_time sales_net", "C. http_access allow sales_net and sales-time", "D. http_access allow sales_net sales_time", "E. http_access sales_net sales_time"],
    correct: 3
  },
  {
    question: "Which Linux user is used by vsftpd to perform file system operations for anonymous FTP users?",
    type: "opcion",
    answers: ["A. The Linux user specified in the configuration option ftp_username", "B. The Linux user root, but vsftpd grants access to anonymous users only to globally read-/writeable files", "C. The Linux user which runs the vsftpd process", "D. The Linux user with the same user name that was used to anonymously log into the FTP server", "E. The Linux user that owns the root FTP directory served by vsftpd"],
    correct: 0
  },
  {
    question: "Which of the following DNS records could be a glue record?",
    type: "opcion",
    answers: ["A. ns1.lab  A  198.51.100.53", "B. lab  NS  198.51.100.53", "C. ns1.  A  198.51.100.53", "D. ns1.lab  NS  198.51.100.53", "E. ns1.lab  GLUE  198.51.100.53"],
    correct: 0
  },
  {
    question: "Which of the following lines in the sshd configuration file should, if present, be changed in order to increase the security of the server? (Choose two.)",
    type: "varias",
    answers: ["A. IgnoreRhosts yes", "B. Protocol 2, 1", "C. Port 22", "D. PermitRootLogin yes", "E. PermitEmptyPasswords no"],
    correct: [1, 3]
  },
  {
    question: "Which of the following nmap parameters scans a target for open TCP ports? (Choose two.)",
    type: "varias",
    answers: ["A. -sZ", "B. -sU", "C. -sO", "D. -sT", "E. -sS"],
    correct: [3, 4]
  },
  {
    question: "Which of the following options are valid in /etc/exports? (Choose two.)",
    type: "varias",
    answers: ["A. ro", "B. uid", "C. rootsquash", "D. norootsquash", "E. rw"],
    correct: [4, 0]
  },
  {
    question: "Which of the following Samba configuration parameters is functionally identical to the parameter read only=yes?",
    type: "opcion",
    answers: ["A. write access=no", "B. write only=no", "C. read write=no", "D. writeable=no", "E. browseable=no"],
    correct: 3
  },
  {
    question: "Which of the following Samba services handles the membership of a file server in an Active Directory domain?",
    type: "opcion",
    answers: ["A. msadd", "B. nmbd", "C. samba", "D. winbindd", "E. admemb"],
    correct: 2
  },
  {
    question: "Which of the following sshd configuration should be set to no in order to fully disable password based logins? (Choose two.)",
    type: "varias",
    answers: ["A. PAMAuthentication", "B. PasswordAuthentication", "C. ChallengegeResponseAuthentication", "D. UsePasswords", "E. PermitPlaintextLogin"],
    correct: [2, 1]
  },
  {
    question: "Which of the following statements is true regarding the NFSv4 pseudo file system on the NFS server?",
    type: "opcion",
    answers: ["A. It usually contains bind mounts of the directory trees to be exported", "B. It usually contains symlinks to the directory trees to be exported", "C. It must be called /exports", "D. It is defined in the option Nfsv4-Root in /etc/pathmapd.conf", "E. It must be a dedicated partition on the server"],
    correct: 0
  },
  {
    question: "Which of the statements below are correct regarding the following commands, which are executed on a Linux router? (Choose two.)\nIp6tables -A FORWARD -s fe80::/64 -j DROP\np6tables -A FORWARD -d fe80::/64 -j DROP",
    type: "varias",
    answers: ["A. The rules suppress any automatic configuration through router advertisements or DHCPv6", "B. The rules disable packet forwarding because network nodes always use addresses from fe80::/64 to identify routers in their routing tables", "C. Both ip6tables commands complete without an error message or warning", "D. Packets with source or destination addresses from fe80::/64 will never occur in the FORWARD chain", "E. ip6tables returns an error for the second command because the affected network is already part of another rule"],
    correct: [2, 0]
  },
  {
    question: "Which of these tools, without any options, provides the most information when performing DNS queries?",
    type: "opcion",
    answers: ["A. host", "B. nslookup", "C. named-checkconf", "D. dig", "E. named-checkzone"],
    correct: 3
  },
  {
    question: "On a Linux router, packet forwarding for IPv4 has been enabled. After a reboot, the machine no longer forwards IP packets from other hosts. The command:\necho 1 > /proc/sys/net/ipv4/ip_forward\ntemporarily resolves this issue.\nWhich one of the following options is the best way to ensure this setting is saved across system restarts?",
    type: "opcion",
    answers: ["A. In /etc/rc.local add net.ipv4.ip_forward = 1", "B. In /etc/sysct1.conf change net.ipv4.ip_forward to 1", "C. Add echo 1 > /proc/sys/net/ipv4/ip_forward to the root user login script", "D. Add echo 1 > /proc/sys/net/ipv4/ip_forward to any user login script", "E. In /etc/sysconfig/iptables-config add ipv4.ip_forward = 1"],
    correct: 1
  },
  {
    question: "Which statements about the Alias and Redirect directives in Apache HTTPD’s configuration file are true? (Choose two.)",
    type: "varias",
    answers: ["A. Redirect is handled on the client side", "B. Alias is not a valid configuration directive", "C. Redirect works with regular expressions", "D. Alias is handled on the server side", "E. Alias can only reference files under DocumentRoot"],
    correct: [0, 3]
  },
  {
    question: "Which tool creates a Certificate Signing Request (CSR) for serving HTTPS with Apache HTTPD?",
    type: "opcion",
    answers: ["A. httpsgen", "B. openssl", "C. apachect1", "D. certgen", "E. cartool"],
    correct: 1
  },
  {
    question: "With fail2ban, what is a ‘jail’?",
    type: "opcion",
    answers: ["A. A netfilter rules chain blocking offending IP addresses for a particular service", "B. A filter definition and a set of one or more actions to take when the filter is matched", "C. The chroot environment in which fail2ban runs", "D. A group of services on the server which should be monitored for similar attack patterns in the log files"],
    correct: 1
  },
  {
    question: "What command creates a SSH key pair? (Specify ONLY the command without any path or parameters)",
    type: "escribir",
    correct: "ssh-keygen"
  },
  {
    question: "What configuration directive of the Apache HTTPD server defines where log files are stored? (Specify ONE of the directives without any other options.)",
    type: "escribir",
    correct: "ErrorLog"
  },
  {
    question: "Which directive in a Nginx server configuration block defines the TCP ports on which the virtual host will be available, and which protocols it will use? (Specify ONLY the option name without any values.)",
    type: "escribir",
    correct: "listen"
  },
  {
    question: "A company is transitioning to a new DNS domain name and wants to accept e-mail for both domains for all of its users on a Postfix server. Which configuration option should be updated to accomplish this?",
    type: "opcion",
    answers: ["A. mydomains", "B. mydestination", "C. myhosts", "D. mydomain", "E. mylocations"],
    correct: 1
  },
  {
    question: "After the installation of Dovecot, it is observed that the dovecot processes are shown in ps ax like this:\nIn order to associate the processes with users and peers, the username, IP address of the peer and the connection status, which of the following options must be set?",
    type: "opcion",
    answers: ["A. sys.ps.allow_descriptions = 1 in sysct1.conf or /proc", "B. --with-linux-extprocnames for ./configure when building Dovecot", "C. verbose_proctitle = yes in the Dovecot configuration", "D. proc.all.show_status = 1 in sysctl.conf or /proc"],
    correct: 2
  },
  {
    question: "For what purpose is TCP/IP stack fingerprinting used by nmap?",
    type: "opcion",
    answers: ["A. It is used to uniquely identify servers on the network for forensics.", "B. It is used to identify duplicate responses from the same remote server.", "C. It is used to masquerade the responses of remote servers.", "D. It is used to determine the remote operating system.", "E. It is used to filter out responses from specific servers."],
    correct: 3
  },
  {
    question: "Given the following Squid configuration excerpt:\ncache_dir ufs /var/spool/squid3/ 1024 16 256\nWhich of the following directories will exist directly within the directory: /var/spool/squid3/? (Choose two.)",
    type: "varias",
    answers: ["A. A0", "B. 0b", "C. 00", "D. FF", "E. 0F"],
    correct: [4, 1]
  },
  {
    question: "How are PAM modules organized and stored?",
    type: "opcion",
    answers: ["A. As dynamically linked binaries in /usr/lib/pam/sbin/", "B. As shared object files within the /lib/ directory hierarchy", "C. A statically linked binaries in /etc/pam.d/bin/", "D. As Linux kernel modules within the respective sub directory of /lib/modules/", "E. As plain text files in /etc/security/"],
    correct: 0
  },
  {
    question: "How is the LDAP administrator account configured when the rootdn and rootpw directives are not present in the slapd.conf file?",
    type: "opcion",
    answers: ["A. The account is defined in the file /etc/ldap.root.conf", "B. The account is defined by an ACL in slapd.conf", "C. The account is defined in the file /etc/ldap.secret", "D. The default account admin with the password admin are used", "E. The default account admin is used without a password"],
    correct: 1
  },
  {
    question: "In a PAM configuration file, which of the following is true about the required control flag?",
    type: "opcion",
    answers: ["A. The success of the module is needed for the module-type facility to succeed. However, all remaining modules of the same type will be invoked", "B. The module is not critical and whether it returns success or failure is not important", "C. If the module returns success, no more modules of the same type will be invoked", "D. If the module returns failure, no more modules of the same type will be invoked", "E. The success of the module is needed for the module-type facility to succeed. If it returns a failure, control is returned to the calling application"],
    correct: 0
  },
  {
    question: "In order to join a file server to the Active Directory domain intra.example.com, the following smb.conf has been created:\nThe command net ads join raises an error and the server is not joined to the domain. What should be done to successfully join the domain?",
    type: "opcion",
    answers: ["A. Remove all idmap configuration stanzas since the id mapping is defined globally in an Active Directory domain and cannot be changed on a member server.", "B. Remove the winbind enum users and winbind enum groups since winbind is incompatible with Active Directory domains.", "C. Change server role to ad member server to join an Active Directory domain instead of an NT4 domain.", "D. Manually create a machine account in the Active Directory domain and specify the machine account’s name with –U when starting net ads join.", "E. Add realm = intra.example.com to the smb.conf and change workgroup to the domain’s netbios workgroup name."],
    correct: 0
  },
  {
    question: "It has been discovered that the company mail server is configured as an open relay. Which of the following actions would help prevent the mail server from being used as an open relay while maintaining the possibility to receive company mails? (Choose two.)",
    type: "varias",
    answers: ["A. Restrict Postfix to only relay outbound SMTP from the internal network", "B. Configure Dovecot to support IMAP connectivity", "C. Restrict Postfix to only accept e-mail for domains hosted on this server", "D. Upgrade the mailbox format from mbox to maildir", "E. Configure netfilter to not permit port 25 traffic on the public network"],
    correct: [4, 0]
  },
  {
    question: "Select the Samba option below that should be used if the main intention is to setup a guest printer service?",
    type: "opcion",
    answers: ["A. security = ldap", "B. security = share", "C. security = pam", "D. security = printing", "E. security = cups"],
    correct: 1
  },
  {
    question: "The following Apache HTTPD configuration has been set up to create a virtual host available at www.example.com and www2.example.com:\nEven though Apache HTTPD correctly processed the configuration file, requests to both names are not handled correctly. What should be changed in order to ensure correct operations?",
    type: "opcion",
    answers: ["A. Both virtual host names have to be placed as comma separated values in one ServerName declaration.", "B. Only one Server name declaration may exist, but additional names can be declared in ServerAlias options.", "C. The configuration must be split into two VirtualHost sections since each virtual host may only have one name.", "D. Both virtual host names have to be mentioned in the opening VirtualHost tag.", "E. The port mentioned in opening VirtualHost tag has to be appended to the ServerName declaration’s values."],
    correct: 0
  },
  {
    question: "The Samba configuration file contains the following lines:\nA workstation is on the wired network with an IP address of 192.168.1.177 but is unable to access the Samba server. A wireless laptop with an IP address 192.168.2.93 can access the Samba server. Additional trouble shooting shows that almost every machine on the wired network is unable to access the Samba server.\nWhich alternate host allow declaration will permit wired workstations to connect to the Samba server without denying access to anyone else? (Choose two.)",
    type: "varias",
    answers: ["A. host deny = 192.168.1.100/255.255.255.0 192.168.2.31 localhost", "B. host allow = 192.168.1.100 192.168.2.200 localhost", "C. host allow = 192.168.1.1-255", "D. host deny = 192.168.2.200/255.255.255.0 192.168.2.31 localhost", "E. host allow = 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0 localhost"],
    correct: [3, 4]
  },
  {
    question: "There is a restricted area in a site hosted by Apache HTTPD, which requires users to authenticate against the file /srv/www/security/sitepasswd.\nWhich command is used to CHANGE the password of existing users, without losing data, when Basic authentication is being used?",
    type: "opcion",
    answers: ["A. htpasswd –n /srv/www/security/sitepasswd user", "B. htpasswd –D /srv/www/security/sitepasswd user", "C. htpasswd –c /srv/www/security/sitepasswd user", "D. htpasswd /srv/www/security/sitepasswd user"],
    correct: 2
  },
  {
    question: "What does the samba-tool testparm command confirm regarding the Samba configuration?",
    type: "opcion",
    answers: ["A. The service operates as expected.", "B. All running Samba processes use the most recent configuration version.", "C. The Samba services are started automatically when the system boots.", "D. The netfilter configuration on the Samba server does not block any access to the services defined in the configuration.", "E. The configuration loads successfully."],
    correct: 4
  },
  {
    question: "When are Sieve filters usually applied to an email?",
    type: "opcion",
    answers: ["A. When the email is received by an SMTP smarthost", "B. When the email is relayed by an SMTP server", "C. When the email is sent to the first server by an MUA", "D. When the email is retrieved by an MUA", "E. When the email is delivered to a mailbox"],
    correct: 4
  },
  {
    question: "When trying to reverse proxy a web server through Nginx, what keyword is missing from the following configuration sample?",
    type: "opcion",
    answers: ["A. remote_proxy", "B. forward_to", "C. proxy_reverse", "D. A. remote_proxy\nproxy_pass", "E. reverse_proxy"],
    correct: 3
  },
  {
    question: "Which Apache HTTPD configuration directive is used to specify the method of authentication, e.g. None or Basic?",
    type: "opcion",
    answers: ["A. AuthUser", "B. AuthType", "C. AllowAuth", "D. AllowedAuthUser"],
    correct: 1
  },
  {
    question: "Which Apache HTTPD configuration directive specifies the RSA private key that was used in the generation of the SSL certificate for the server?",
    type: "opcion",
    answers: ["A. SSLRSAKeyFile", "B. SSLPrivateKeyFile", "C. SSLKeyFile", "D. SSLCertificateKeyFile"],
    correct: 3
  },
  {
    question: "Which keyword is used in the Squid configuration to define networks and times used to limit access to the service?",
    type: "opcion",
    answers: ["A. http_allow", "B. acl", "C. allow", "D. permit"],
    correct: 1
  },
  {
    question: "Which of the following actions synchronizes UNIX passwords with the Samba passwords when the encrypted Samba password is changed using smbpasswd?",
    type: "opcion",
    answers: ["A. There are no actions to accomplish this since is not possible.", "B. Run netvamp regularly, to convert the passwords.", "C. Run winbind –sync, to synchronize the passwords.", "D. Add smb unix password = sync to smb.conf", "E. Add unix password sync = yes to smb.conf"],
    correct: 4
  },
  {
    question: "Which of the following are logging directives in Apache HTTPD? (Choose two.)",
    type: "varias",
    answers: ["A. CustomLog", "B. ErrorLog", "C. TransferLog", "D. VHostLog", "E. ServerLog"],
    correct: [2, 0]
  },
  {
    question: "Which of the following authentication mechanisms are supported by Dovecot? (Choose three.)",
    type: "varias",
    answers: ["A. krb5", "B. cram-md5", "C. ldap", "D. plain", "E. digest-md5"],
    correct: [4, 1, 3]
  },
  {
    question: "Which of the following information has to be submitted to a certification authority in order to request a web server certificate?",
    type: "opcion",
    answers: ["A. The certificate signing request.", "B. The web server’s SSL configuration file.", "C. The web server’s private key.", "D. The IP address of the web server.", "E. The list of ciphers supported by the web server."],
    correct: 0
  },
  {
    question: "Which of the following PAM modules allows the system administrator to use an arbitrary file containing a list of user and group names with restrictions on the system resources available to them?",
    type: "opcion",
    answers: ["A. pam_limits", "B. pam_filter", "C. pam_unix", "D. pam_listfile"],
    correct: 0
  },
  {
    question: "Which of the following services belongs to NFSv4 and does not exist in NFSv3?",
    type: "opcion",
    answers: ["A. rpc.idmapd", "B. rpc.mountd", "C. nfsd", "D. rpc.statd"],
    correct: 0
  },
  {
    question: "Which of the following statements are true regarding Server Name Indication (SNI)? (Choose two.)",
    type: "varias",
    answers: ["A. It supports transparent failover of TLS sessions from one web server to another.", "B. It enables HTTP servers to update the DNS of their virtual hosts’ names using the X 509 certificates of the virtual hosts.", "C. It provides a list of available virtual hosts to the client during the TLS handshake.", "D. It allows multiple SSL/TLS secured virtual HTTP hosts to coexist on the same IP address.", "E. It submits the host name of the requested URL during the TLS handshake."],
    correct: [3, 4]
  },
  {
    question: "Which of the following statements in the ISC DHCPD configuration is used to specify whether or not an address pool can be used by nodes which have a corresponding host section in the configuration?",
    type: "opcion",
    answers: ["A. unconfigured-hosts", "B. identified-nodes", "C. unmatched-hwaddr", "D. missing-peers", "E. unknown-clients"],
    correct: 4
  },
  {
    question: "Which option within a Nginx server configuration section defines the file system path from which the content of the server is retrieved?",
    type: "opcion",
    answers: ["A. base_dir", "B. htdocs", "C. location", "D. DocumentRoot", "E. root"],
    correct: 4
  },
  {
    question: "Which Postfix command can be used to rebuild all of the alias database files with a single invocation and without the need for any command line arguments?",
    type: "opcion",
    answers: ["A. postmapbuild", "B. newaliases", "C. postalias", "D. makealiases"],
    correct: 1
  },
  {
    question: "With Nginx, which of the following directives is used to proxy requests to a FastCGI application?",
    type: "opcion",
    answers: ["A. fastcgi_forward", "B. proxy_fastcgi_pass", "C. proxy_fastcgi", "D. fastcgi_pass", "E. fastcgi_proxy"],
    correct: 3
  },
  {
    question: "According to this LDIF excerpt, which organizational unit is Robert Smith part of? (Specify only the organizational unit.)",
    type: "escribir",
    correct: "people"
  },
  {
    question: "In order to export /usr and /bin via NFSv4, /exports was created and contains working bind mounts to /usr and /bin. The following lines are added to /etc/exports on the NFC server:\nAfter running mount -t nfsv4 server:/ /mnt of an NFC-Client, it is observed that /mnt contains the content of the server’s /usr directory instead of the content of the NFSv4 foot folder.\nWhich option in /etc/exports has to be changed or removed in order to make the NFSv4 root folder appear when mounting the highest level of the server? (Specify ONLY the option name without any values or parameters.)",
    type: "escribir",
    correct: "mount"
  },
  {
    question: "In order to specify alterations to an LDAP entry, what keyword is missing from the following LDIF file excerpt? (Specify the keyword only and no other information.)",
    type: "escribir",
    correct: "add"
  },
  {
    question: "What command displays NFC kernel statistics? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "nfsstat"
  },
  {
    question: "What is the name of the root element of the LDAP tree holding the configuration of an OpenLDAP server that is using directory based configuration? (Specify ONLY the element’s name without any additional information.)",
    type: "escribir",
    correct: "slapd"
  },
  {
    question: "What is the path to the global Postfix configuration file? (Specify the full name of the file, including path.)",
    type: "escribir",
    correct: "etc/postfix/main.cf"
  },
  {
    question: "Which action in a Sieve filter forwards a message to another email address without changing the message? (Specify ONLY the action’s name without any parameters.)",
    type: "escribir",
    correct: "redirect"
  },
  {
    question: "Which OpenLDAP client command can be used to change the password for an LDAP entry? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "ldappasswd"
  },
  {
    question: "A BIND server should be upgraded to use TSIG. Which configuration parameters should be added if the server should use the algorithm hmac-md5 and the key skrKc4DoTzi/takIlPi7JZA==?",
    type: "opcion",
    answers: ["A. a.", "B. b.", "C. c.", "D. d.", "E. e."],
    correct: 0
  },
  {
    question: "A zone file contains the following lines and is included in the BIND configuration using this configuration stanza. Which problem is contained in this configuration?",
    type: "opcion",
    answers: ["A. Names of records in a zone file cannot be fully qualified domain names.", "B. An A record cannot contain an IPv4 address because its value is supposed to be a reverse DNS name.", "C. The $ORIGIN declaration cannot be used in zone files that are included for a specific zone name in the BIND configuration.", "D. The zone statement in the BIND configuration must contain the cross-zone-data yes; statement.", "E. The zone cannot contain records for a name which is outside the zone’s hierarchy."],
    correct: 2
  },
  {
    question: "After running ssh-keygen and accepting the default values, which of the following files are changed or created? (Choose two.)",
    type: "varias",
    answers: ["A. ~/.ssh/id_rsa.prv", "B. ~/.ssh/id_rsa", "C. ~/.ssh/id_rsa.pub", "D. ~/.ssh/id_rsa.key", "E. ~/.ssh/id_rsa.crt"],
    correct: [2, 1]
  },
  {
    question: "In order to prevent all anonymous FTP users from listing uploaded file names, what security precaution can be taken when creating an upload directory?",
    type: "opcion",
    answers: ["A. The directory must not have the write permission set.", "B. The directory must not have the read permission set.", "C. The directory must not have the read or execute permission set.", "D. The directory must not contain other directories.", "E. The directory must not have the execute permission set."],
    correct: 1
  },
  {
    question: "In the main Postfix configuration file, how are service definitions continued on the next line?",
    type: "opcion",
    answers: ["A. The following line must begin with a plus character (+).", "B. The initial line must end with a backslash character (\\).", "C. The following line must begin with white space indentation.", "D. The service definition continues on the following lines until all of the required fields are specified.", "E. It isn’t possible. The service definition must fit on one line."],
    correct: 2
  },
  {
    question: "Select the alternative that shows the correct way to disable a user login for all users except root.",
    type: "opcion",
    answers: ["A. The use of the pam_pwdb module along with the /etc/pwdv.conf configuration file.", "B. The use of the pam_block module along with the /etc/login configuration file.", "C. The use of the pam_deny module along with the /etc/deny configuration file.", "D. The use of the pam_nologin module along with the /etc/nologin configuration file."],
    correct: 3
  },
  {
    question: "To allow X connections to be forwarded from or through an SSH server, what configuration keyword must be set to yes in the sshd configuration file?",
    type: "opcion",
    answers: ["A. AllowForwarding", "B. XllForwarding", "C. XllForwardingAllow", "D. ForwardingAllow"],
    correct: 1
  },
  {
    question: "To which destination will a route appear in the Linux routing table after activating IPv6 on a router’s network interface, even when no global IPv6 addresses have been assigned to the interface?",
    type: "opcion",
    answers: ["A. fe80::/10", "B. fe80::/64", "C. 0::/0", "D. 0::/128", "E. 2000::/3"],
    correct: 0
  },
  {
    question: "Using its standard configuration, how does fail2ban block offending SSH clients?",
    type: "opcion",
    answers: ["A. By modifying and adjusting the TCP Wrapper configuration for SSHD.", "B. By rejecting connections due to its role as a proxy in front of SSHD.", "C. By creating and maintaining netfilter rules.", "D. By creating null routes that drop any answer packets sent to the client.", "E. By modifying and adjusting the SSHD configuration."],
    correct: 4
  },
  {
    question: "What is DNSSEC used for?",
    type: "opcion",
    answers: ["A. Encrypting DNS queries and answers", "B. Encrypted DNS queries between nameservers", "C. Authentication of the user that initiated the DNS query", "D. Cryptographic authentication of DNS zones", "E. Secondary DNS queries for local zones"],
    correct: 3
  },
  {
    question: "What is the name of the Dovecot configuration variable that specifies the location of user mail?",
    type: "opcion",
    answers: ["A. maildir", "B. user_mail_dir", "C. mail_location", "D. mbox", "E. user_dir"],
    correct: 2
  },
  {
    question: "What is the purpose of DANE?",
    type: "opcion",
    answers: ["A. Discover which servers within a DNS domain offer a specific service.", "B. Invalidate name information stored on caching name servers to speed up DNS updates.", "C. Verify the integrity of name information retrieved via DNS.", "D. Provide a way to verify the association of X 509 certificates to DNS host names.", "E. Allow secure dynamic DNS updates."],
    correct: 3
  },
  {
    question: "What is the standard port used by OpenVPN?",
    type: "opcion",
    answers: ["A. 4500", "B. 500", "C. 1194", "D. 1723"],
    correct: 2
  },
  {
    question: "Which command is used to administer IPv6 netfilter rules?",
    type: "opcion",
    answers: ["A. iptables6", "B. ipv6tables", "C. iptables", "D. ip6tables", "E. iptablesv6"],
    correct: 3
  },
  {
    question: "Which configuration parameter on a Postfix server modifies only the sender address and not the recipient address?",
    type: "opcion",
    answers: ["A. alias_maps", "B. sender_canonical_maps", "C. alias_rewrite_maps", "D. sender_rewrite_maps"],
    correct: 1
  },
  {
    question: "Which FTP names are recognized as anonymous users in vsftp when the option anonymous_enable is set to yes in the configuration files? (Choose two.)",
    type: "varias",
    answers: ["A. In the described configuration, any username which neither belongs to an existing user nor has another special meaning is treated as anonymous user", "B. nobody", "C. anonymous", "D. ftp", "E. guest"],
    correct: [2, 3]
  },
  {
    question: "Which netfilter table contains built-in chains called INPUT, OUTPUT and FORWARD?",
    type: "opcion",
    answers: ["A. nat", "B. ipconn", "C. default", "D. masq", "E. filter"],
    correct: 4
  },
  {
    question: "Which of the following actions are available in Sieve core filters? (Choose three.)",
    type: "varias",
    answers: ["A. reject", "B. drop", "C. discard", "D. relay", "E. fileinto"],
    correct: [4, 3, 0]
  },
  {
    question: "Which of the following commands can be used to connect and interact with remote TCP network services? (Choose two.)",
    type: "varias",
    answers: ["A. nc", "B. telnet", "C. nettalk", "D. cat", "E. netmap"],
    correct: [0, 1]
  },
  {
    question: "Which of the following commands displays an overview of the Postfix queue content to help identify remote sites that are causing excessive mail traffic?",
    type: "opcion",
    answers: ["A. mailtraf", "B. postmap", "C. qshape", "D. queuequery", "E. poststats"],
    correct: 2
  },
  {
    question: "Which of the following commands is used to change user passwords in an OpenLDAP directory?",
    type: "opcion",
    answers: ["A. ldapchpw", "B. ldpasswd", "C. setent", "D. ldappasswd", "E. olppasswd"],
    correct: 3
  },
  {
    question: "Which of the following DNS record types is used for reverse DNS queries?",
    type: "opcion",
    answers: ["A. IN", "B. RIN", "C. PTR", "D. REV", "E. CNAME"],
    correct: 2
  },
  {
    question: "Which of the following is correct about this excerpt from an LDIF file?",
    type: "opcion",
    answers: ["A. dn is the relative distinguished name.", "B. o is the operator name.", "C. cn is the common name.", "D. dn is the domain name.", "E. DC is the delegation container."],
    correct: 0
  },
  {
    question: "Which of the following lines is valid in a configuration file in /etc/pam.d/?",
    type: "opcion",
    answers: ["A. auth pam_unix.so(required try_first_pass nullok)", "B. auth required:pam_unix.so(try_first_pass nullok)", "C. auth required pam_unix.so try_first_pass nullok", "D. auth try_first_pass nullok, require pam_unix.so"],
    correct: 2
  },
  {
    question: "Which of the following OpenVPN configuration options makes OpenVPN forward network packets between VPN clients itself instead of passing the packets on to the Linux host which runs the OpenVPN server for further processing?",
    type: "opcion",
    answers: ["A. grant-client-traffic", "B. client-to-client", "C. inter-client-traffic", "D. client-pass"],
    correct: 1
  },
  {
    question: "Which of the following PAM modules sets and unsets environment variables?",
    type: "opcion",
    answers: ["A. pam-vars", "B. pam_set", "C. pam_shell", "D. pam-env", "E. pam_export"],
    correct: 3
  },
  {
    question: "Which of the following statements allow the logical combinations of conditions in Sieve filters? (Choose two.)",
    type: "varias",
    answers: ["A. and", "B. noneof", "C. allof", "D. anyof", "E. or"],
    correct: [2, 4]
  },
  {
    question: "Which of the following statements is INCORRECT regarding the LDIF file format?",
    type: "opcion",
    answers: ["A. It contains a dn line that indicates where the attributes listed in the following lines of the file must be added.", "B. In the file, a blank line separates one entry from another one.", "C. The LDIF file accepts any type of file encoding.", "D. If an attribute contains binary data, some specific configurations must be made for this entry."],
    correct: 2
  },
  {
    question: "Which of the following types of IPv6 address assignments does DHCPv6 support? (Choose three.)",
    type: "varias",
    answers: ["A. Assignments of anonymous IPv6 addresses whose assignment is not logged by the DHCPv6 server.", "B. Assignments of blacklisted IPv6 addresses that should no longer be used.", "C. Assignments of normal IPv6 addresses that can be renewed.", "D. Assignments of IPv6 prefixes that can be used for routing or further assignments.", "E. Assignments of temporary IPv6 addresses that cannot be renewed."],
    correct: [2, 4, 3]
  },
  {
    question: "Which of the following values can be used in the OpenLDAP attribute olcBackend for any object of the class olcBackendConfig to specify a backend? (Choose three.)",
    type: "varias",
    answers: ["A. ldap", "B. bdb", "C. xml", "D. passwd", "E. text"],
    correct: [1, 0, 4]
  },
  {
    question: "Which of these sets of entries does the following command return?",
    type: "opcion",
    answers: ["A. Entries that don’t have a cn of marie or don’t have a telephoneNumber that begins with 9.", "B. Entries that don’t have a cn of marie and don’t have a telephoneNumber beginning with 9.", "C. Entries that have a cn of marie and a telephoneNumber that ending with 9.", "D. Entries that have a cn of marie or have a telephoneNumber beginning with 9.", "E. Entries that have a cn of marie or don’t have a telephoneNumber beginning with 9."],
    correct: 2
  },
  {
    question: "Which of these tools provides DNS information in the following format?",
    type: "opcion",
    answers: ["A. named-checkconf", "B. named-checkzone", "C. host", "D. nslookup", "E. dig"],
    correct: 2
  },
  {
    question: "Which option in allowed-hosts specifies which host are permitted to ask for domain name information from the server?",
    type: "opcion",
    answers: ["A. query-group", "B. allowed-hosts", "C. accept-query", "D. permit-query", "E. allow-query"],
    correct: 4
  },
  {
    question: "Which option within the ISC DHCPD configuration file defines the IPv4 DNS server address(es) to be sent to the DHCP clients?",
    type: "opcion",
    answers: ["A. domain-name-servers", "B. servers", "C. domain-server", "D. name-server"],
    correct: 0
  },
  {
    question: "Which rdnc sub command can be used in conjunction with the name of a zone in order to make BIND reread the content of the specific zone file without reloading other zones as well? (Choose two.)",
    type: "varias",
    answers: ["A. fileupdate", "B. zoneupdate", "C. lookup", "D. reload", "E. reread"],
    correct: [2, 0]
  },
  {
    question: "According to the configuration below, what is the full e-mail address of the administrator for this domain?",
    type: "escribir",
    correct: "admin@mars.example.com"
  },
  {
    question: "What option in the sshd configuration file instructs sshd to permit only specific user names to log in to a system? (Specify ONLY the option name without any values.)",
    type: "escribir",
    correct: "sshd_config"
  },
  {
    question: "Which attitude of an object in LDAP defines which other attributes can be set for the object? (Specify ONLY the attribute name without any values.)",
    type: "escribir",
    correct: "class"
  },
  {
    question: "Which doveadm sub-command displays a list of connections of Dovecot in the following format? (Specify ONLY the command without any parameters.)",
    type: "escribir",
    correct: "who"
  },
  {
    question: "Which option in the Postfix configuration makes Postfix pass email to external destinations to another SMTP-server? (Specify ONLY the option name without any values.)",
    type: "escribir",
    correct: "relay server"
  },
  {
    question: "In order to specify alterations to an LDAP entry, what keyword is missing from the following LDIF file excerpt? (Specify the keyword only and no other information.)",
    type: "escribir",
    correct: "add"
  },
  {
    question: "What command displays NFC kernel statistics? (Specify ONLY the command without any path or parameters.)",
    type: "escribir",
    correct: "nfsstat"
  },
  {
    question: "What is the name of the root element of the LDAP tree holding the configuration of an OpenLDAP server that is using directory based configuration? (Specify ONLY the element’s name without any additional information.)",
    type: "escribir",
    correct: "slapd"
  },
  {
    question: "What is the path to the global Postfix configuration file? (Specify the full name of the file, including path.)",
    type: "escribir",
    correct: "etc/postfix/main.cf"
  },
  {
    question: "According to this LDIF excerpt, which organizational unit is Robert Smith part of? (Specify only the organizational unit.)",
    type: "escribir",
    correct: "people"
  },
  {
    question: "In order to export /usr and /bin via NFSv4, /exports was created and contains working bind mounts to /usr and /bin. The following lines are added to /etc/exports on the NFC server: After running mount -t nfsv4 server:/ /mnt of an NFC-Client, it is observed that /mnt contains the content of the server’s /usr directory instead of the content of the NFSv4 foot folder. Which option in /etc/exports has to be changed or removed in order to make the NFSv4 root folder appear when mounting the highest level of the server? (Specify ONLY the option name without any values or parameters.)",
    type: "escribir",
    correct: "mount"
  }
];