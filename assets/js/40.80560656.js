(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{438:function(e,a,t){"use strict";t.r(a);var r=t(56),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"almalinux-8-4-for-arm-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-4-for-arm-release-notes"}},[e._v("#")]),e._v(" AlmaLinux 8.4 for ARM Release Notes")]),e._v(" "),t("h2",{attrs:{id:"providing-feedback-and-getting-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#providing-feedback-and-getting-help"}},[e._v("#")]),e._v(" Providing Feedback and Getting Help")]),e._v(" "),t("p",[e._v("Please report any issues you may encounter on the "),t("a",{attrs:{href:"https://bugs.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(". Additonally, if you feel like providing feedback, talking about anything or asking any questions you might want to check out "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://almalinux.discourse.group/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Forums"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://reddit.com/r/almalinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("The AlmaLinux Community on Reddit"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The "),t("strong",[e._v("Fastest Mirror")]),e._v(" will be selected automatically in network install mode")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("OpenSCAP")]),e._v(" security profiles are now ready for production")])]),e._v(" "),t("li",[t("p",[e._v("A "),t("strong",[e._v("devel")]),e._v(" repo is released as well with extra packages and build dependencies not included in the upstream distribution. This is for developers only and shouldn’t be enabled on production installations")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("strong",[e._v("PowerTools")]),e._v(" repo is now disabled by default to match the upstream distribution behavior and is moved to separate file "),t("code",[e._v("almalinux-powertools.repo")]),e._v(" ("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=74",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#74"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("Added new module streams:")]),e._v(" "),t("ul",[t("li",[e._v("Python 3.9")]),e._v(" "),t("li",[e._v("SWIG 4.0")]),e._v(" "),t("li",[e._v("Subversion 1.14")]),e._v(" "),t("li",[e._v("Redis 6")]),e._v(" "),t("li",[e._v("PostgreSQL 13")]),e._v(" "),t("li",[e._v("MariaDB 10.5")])])]),e._v(" "),t("li",[t("p",[e._v("Compiler Updates:")]),e._v(" "),t("ul",[t("li",[e._v("GCC Toolset 10")]),e._v(" "),t("li",[e._v("LLVM Toolset 11.0.0")]),e._v(" "),t("li",[e._v("Rust Toolset 1.49.0")]),e._v(" "),t("li",[e._v("Go Toolset 1.15.7")])])])]),e._v(" "),t("p",[e._v("You can reference the upstream "),t("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/8.4_release_notes/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("RHEL 8.4 release notes"),t("OutboundLink")],1),e._v("  for a full list of changes in this release.")]),e._v(" "),t("h2",{attrs:{id:"installation-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[e._v("#")]),e._v(" Installation instructions")]),e._v(" "),t("p",[e._v("There are three installation ISO images available:")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.4-aarch64-boot.iso")]),e._v(" - a single network installation CD image\nthat downloads packages over the Internet.")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.4-aarch64-minimal.iso")]),e._v(" - a minimal self-containing DVD image\nthat makes possible offline installation.")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.4-aarch64-dvd.iso")]),e._v(" - a full installation DVD image that\ncontains mostly all AlmaLinux packages.")]),e._v(" "),t("p",[e._v("You should select a mirror closest to your geographic area listed on the "),t("a",{attrs:{href:"https://mirrors.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors.almalinux.org"),t("OutboundLink")],1),e._v(" website (local mirrors will be a lot quicker than using "),t("code",[e._v("repo.almalinux.org")]),e._v(" directly) and download a suitable ISO image from the 8.4/isos/aarch64/ directory, for example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" http://almalinux-mirror.tpa.hivelocity.net/8.4/isos/aarch64/AlmaLinux-8.4-aarch64-boot.iso\n")])])]),t("p",[e._v("Download and import the AlmaLinux public key:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n$ gpg --import RPM-GPG-KEY-AlmaLinux\n")])])]),t("p",[e._v("Download and verify a checksums list:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/8.4/isos/aarch64/CHECKSUM\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# we are looking for “Good signature”")]),e._v("\n$ gpg --verify CHECKSUM\ngpg: Signature made Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" 09:01:15 AM UTC using RSA key ID C21AD6EA\ngpg: Good signature from "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux <packager@almalinux.org>"')]),e._v("\ngpg: WARNING: This key is not certified with a trusted signature"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n     Subkey fingerprint: E53C F5EF 91CE B0AD "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1812")]),e._v("  ECB8 51D6 647E C21A D6EA\n")])])]),t("p",[e._v("Verify the downloaded ISO image checksum:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# calculate the downloaded ISO SHA256 checksum")]),e._v("\n$ sha256sum AlmaLinux-8.4-aarch64-boot.iso\n80bf7881a4c9df4d2ec6a8167a848aaa48a589e642cda4e020231b8577813d0e  AlmaLinux-8.4-aarch64-boot.iso\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compare it with expected checksum, it should be the same")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" CHECKSUM "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SHA256.*AlmaLinux-8.4-aarch64-boot.iso'")]),e._v("\nSHA256 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("AlmaLinux-8.4-aarch64-boot.iso"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 80bf7881a4c9df4d2ec6a8167a848aaa48a589e642cda4e020231b8577813d0e\n")])])]),t("p",[e._v("If you decide to use the "),t("code",[e._v("AlmaLinux-8.4-aarch64-boot.iso")]),e._v(" image, you may\nneed to provide the "),t("code",[e._v("8.4/BaseOS/aarch64/kickstart/")]),e._v(" repository from the\nselected mirror as the Installation Source if the installer will not be able\nto find closest mirror for some reason.")]),e._v(" "),t("p",[e._v("There are no extra Installation Sources required if you decided to go with\neither the minimal or DVD ISO images.")]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),t("ul",[t("li",[e._v('The mirrors support implemented with help of the DNF fastestmirror plugin is known to be a bit "quirky". We are going to switch to geolocation-based mirror selection soon.')]),e._v(" "),t("li",[e._v("We don’t provide OVAL definitions for AlmaLinux updates yet so the "),t("code",[e._v("Ensure Software Patches Installed")]),e._v(" OpenSCAP check will be marked as "),t("code",[e._v("notchecked")]),e._v(". However, OpenSCAP is already configured for AlmaLinux OVAL sources so no configuration will be needed when definitions become available.")])]),e._v(" "),t("h2",{attrs:{id:"added-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-packages"}},[e._v("#")]),e._v(" Added packages")]),e._v(" "),t("p",[e._v("Here is a list of added packages in comparison with upstream distribution.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("almalinux-backgrounds")]),e._v(" "),t("td",[e._v("AlmaLinux background images."),t("br"),e._v("Replaces "),t("code",[e._v("redhat-backgrounds")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-indexhtml")]),e._v(" "),t("td",[e._v("AlmaLinux default browser page"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-indexhtml")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-logos")]),e._v(" "),t("td",[e._v("AlmaLinux graphics for OS"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-logos")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-logos-httpd")]),e._v(" "),t("td",[e._v("AlmaLinux graphics for HTTPD server"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-logos-httpd")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-logos-ipa")]),e._v(" "),t("td",[e._v("AlmaLinux graphics for IPA server"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-logos-ipa")])])]),e._v(" "),t("tr",[t("td",[e._v("almalinux-release")]),e._v(" "),t("td",[e._v("AlmaLinux release package, repos, and EULA"),t("br"),e._v("Replaces "),t("code",[e._v("redhat-release")]),e._v(" and "),t("code",[e._v("redhat-release-eula")])])])])]),e._v(" "),t("h2",{attrs:{id:"removed-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed-packages"}},[e._v("#")]),e._v(" Removed packages")]),e._v(" "),t("p",[e._v("Here is a list of removed packages in comparison with the upstream distribution."),t("br"),e._v("\nAlmaLinux OS is a community distribution so all changes are subject to discussion. If you would like to do so, please join "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/engineeringpackaging",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat"),t("OutboundLink")],1),e._v(" as well as filing a bug report at "),t("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(" to discuss if you think any of the packages below should be included into the repos.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("insights-client")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("kmod-redhat-*")]),e._v(" "),t("td",[e._v("RHEL specific modules from Driver Update Program")])]),e._v(" "),t("tr",[t("td",[e._v("kpatch*")]),e._v(" "),t("td",[e._v("RHEL specific live patches for kernel")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-backgrounds")]),e._v(" "),t("td",[e._v("RHEL specific background images")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-indexhtml")]),e._v(" "),t("td",[e._v("RHEL specific default browser page")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-logos")]),e._v(" "),t("td",[e._v("RHEL specific graphics for OS")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-logos-httpd")]),e._v(" "),t("td",[e._v("RHEL specific graphics for HTTPD server")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-logos-ipa")]),e._v(" "),t("td",[e._v("RHEL specific graphics for IPA server")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-release")]),e._v(" "),t("td",[e._v("RHEL specific release package and repos")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-release-eula")]),e._v(" "),t("td",[e._v("RHEL specific EULA")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-support-lib-python")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("redhat-support-tool")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("rhc")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("rhc-worker-playbook")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("rhsm-gtk")]),e._v(" "),t("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("rhsm-icons")]),e._v(" "),t("td",[e._v("RHEL specific GUI for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("spice-qxl-wddm-dod")]),e._v(" "),t("td",[e._v("Contains binaries built by upstream vendor")])]),e._v(" "),t("tr",[t("td",[e._v("subscription-manager-cockpit")]),e._v(" "),t("td",[e._v("RHEL specific Cockpit module for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("subscription-manager-initial-setup-addon")]),e._v(" "),t("td",[e._v("RHEL specific initial setup addon for Subscription Manager")])]),e._v(" "),t("tr",[t("td",[e._v("subscription-manager-plugin-container")]),e._v(" "),t("td",[e._v("RHEL specific Subscription Manager plugin for upstream vendor containers")])]),e._v(" "),t("tr",[t("td",[e._v("virt-who")]),e._v(" "),t("td",[e._v("RHEL specific package to connect to upstream vendor resources")])]),e._v(" "),t("tr",[t("td",[e._v("virtio-win")]),e._v(" "),t("td",[e._v("Contain binaries built by upstream vendor")])])])]),e._v(" "),t("p",[e._v("Red Hat and RHEL are trademarks or registered trademarks of Red Hat, Inc. or its subsidiaries in the United States and other countries.")])])}),[],!1,null,null,null);a.default=s.exports}}]);