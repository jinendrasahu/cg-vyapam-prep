BOOK.add({
  subject: 'comp',
  id: 'comp-11',
  title: 'कम्प्यूटर शब्दावली एवं संक्षिप्त रूप (Abbreviations & Terminology)',
  notes: `
    <h3>परिचय</h3>
    <p>CG व्यापम सहायक ग्रेड-3 सहित लगभग हर परीक्षा में कम्प्यूटर के 2–4 प्रश्न सीधे <b>संक्षिप्त रूप (Abbreviation) के पूर्ण रूप (Full Form)</b> या किसी <b>तकनीकी शब्द के अर्थ</b> पर आते हैं। नीचे विषयवार तालिकाएँ दी गई हैं — पहला स्तंभ संक्षिप्त रूप, दूसरा अंग्रेज़ी पूर्ण रूप तथा तीसरा हिन्दी अर्थ/उपयोग।</p>
    <div class="tip">पढ़ने का तरीका: पहले पूर्ण रूप के <b>मुख्य शब्द</b> पकड़ें (जैसे ROM में Read-Only, SMPS में Switched Mode), फिर विकल्पों में "मिलते-जुलते नकली शब्द" (Logical बनाम Logic, Universal बनाम Unique) पहचानने का अभ्यास करें।</div>

    <h3>1. प्रोसेसर, मदरबोर्ड एवं हार्डवेयर</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>CPU</td><td>Central Processing Unit</td><td>केंद्रीय प्रसंस्करण इकाई — कम्प्यूटर का "मस्तिष्क"</td></tr>
      <tr><td>ALU</td><td>Arithmetic Logic Unit</td><td>अंकगणितीय एवं तार्किक इकाई — जोड़, घटाव, तुलना (AND/OR/NOT)</td></tr>
      <tr><td>CU</td><td>Control Unit</td><td>नियंत्रण इकाई — सभी भागों के कार्य का समन्वय</td></tr>
      <tr><td>MU</td><td>Memory Unit</td><td>मेमोरी इकाई</td></tr>
      <tr><td>GPU</td><td>Graphics Processing Unit</td><td>ग्राफ़िक्स प्रसंस्करण इकाई — चित्र/वीडियो/गेम हेतु</td></tr>
      <tr><td>NPU</td><td>Neural Processing Unit</td><td>AI गणनाओं हेतु विशेष प्रोसेसर</td></tr>
      <tr><td>TPU</td><td>Tensor Processing Unit</td><td>Google द्वारा विकसित मशीन-लर्निंग प्रोसेसर</td></tr>
      <tr><td>FPU</td><td>Floating Point Unit</td><td>दशमलव (फ़्लोटिंग पॉइंट) संख्याओं की गणना करने वाली इकाई</td></tr>
      <tr><td>DSP</td><td>Digital Signal Processor</td><td>ऑडियो/वीडियो संकेतों का प्रसंस्करण</td></tr>
      <tr><td>IC</td><td>Integrated Circuit</td><td>एकीकृत परिपथ (चिप) — तृतीय पीढ़ी</td></tr>
      <tr><td>SSI / MSI</td><td>Small / Medium Scale Integration</td><td>एक चिप पर कुछ दर्जन / सैकड़ों घटक</td></tr>
      <tr><td>LSI</td><td>Large Scale Integration</td><td>बड़े पैमाने का एकीकरण</td></tr>
      <tr><td>VLSI</td><td>Very Large Scale Integration</td><td>अति बृहत् पैमाने का एकीकरण — माइक्रोप्रोसेसर (चतुर्थ पीढ़ी)</td></tr>
      <tr><td>ULSI</td><td>Ultra Large Scale Integration</td><td>अत्यधिक बृहत् पैमाने का एकीकरण</td></tr>
      <tr><td>RISC</td><td>Reduced Instruction Set Computer</td><td>कम व सरल निर्देशों वाला प्रोसेसर (जैसे ARM)</td></tr>
      <tr><td>CISC</td><td>Complex Instruction Set Computer</td><td>अधिक व जटिल निर्देशों वाला प्रोसेसर (जैसे x86)</td></tr>
      <tr><td>MIPS</td><td>Million Instructions Per Second</td><td>प्रति सेकंड दस लाख निर्देश — CPU गति की इकाई</td></tr>
      <tr><td>FLOPS</td><td>Floating Point Operations Per Second</td><td>सुपरकम्प्यूटर की गति की इकाई</td></tr>
      <tr><td>GHz</td><td>Gigahertz</td><td>10⁹ चक्र प्रति सेकंड — क्लॉक स्पीड</td></tr>
      <tr><td>PCB</td><td>Printed Circuit Board</td><td>मुद्रित परिपथ बोर्ड (मदरबोर्ड इसी प्रकार का बोर्ड है)</td></tr>
      <tr><td>SoC</td><td>System on Chip</td><td>एक ही चिप पर CPU, GPU, मेमोरी नियंत्रक आदि — मोबाइल में</td></tr>
      <tr><td>MAR</td><td>Memory Address Register</td><td>मेमोरी पता रजिस्टर — जिस स्थान को पढ़ना/लिखना है उसका पता</td></tr>
      <tr><td>MDR / MBR</td><td>Memory Data Register / Memory Buffer Register</td><td>मेमोरी से आया या जाने वाला डेटा रखने वाला रजिस्टर</td></tr>
      <tr><td>PC (रजिस्टर)</td><td>Program Counter</td><td>अगले निर्देश का पता रखने वाला रजिस्टर</td></tr>
      <tr><td>IR</td><td>Instruction Register</td><td>वर्तमान में निष्पादित हो रहे निर्देश को रखने वाला रजिस्टर</td></tr>
      <tr><td>ACC</td><td>Accumulator</td><td>संचायक — ALU के परिणाम अस्थायी रूप से रखता है</td></tr>
      <tr><td>BIOS</td><td>Basic Input Output System</td><td>मूल इनपुट-आउटपुट प्रणाली — ROM/फ़्लैश में स्थित फ़र्मवेयर</td></tr>
      <tr><td>UEFI</td><td>Unified Extensible Firmware Interface</td><td>BIOS का आधुनिक उत्तराधिकारी</td></tr>
      <tr><td>CMOS</td><td>Complementary Metal Oxide Semiconductor</td><td>BIOS सेटिंग, दिनांक-समय रखने वाली चिप (बैटरी से चलती है)</td></tr>
      <tr><td>POST</td><td>Power On Self Test</td><td>चालू होते ही हार्डवेयर की स्व-जाँच</td></tr>
      <tr><td>SMPS</td><td>Switched Mode Power Supply</td><td>AC को कम वोल्टेज DC में बदलकर कम्प्यूटर को बिजली देने वाली इकाई</td></tr>
      <tr><td>PSU</td><td>Power Supply Unit</td><td>बिजली आपूर्ति इकाई</td></tr>
      <tr><td>UPS</td><td>Uninterruptible Power Supply</td><td>अबाधित बिजली आपूर्ति — बिजली जाने पर बैटरी से बैकअप</td></tr>
      <tr><td>CVT</td><td>Constant Voltage Transformer</td><td>स्थिर वोल्टेज ट्रांसफ़ॉर्मर</td></tr>
      <tr><td>FSB</td><td>Front Side Bus</td><td>CPU को मदरबोर्ड के अन्य भागों से जोड़ने वाली बस (पुरानी)</td></tr>
      <tr><td>PCI</td><td>Peripheral Component Interconnect</td><td>विस्तार कार्ड लगाने का स्लॉट</td></tr>
      <tr><td>PCIe</td><td>Peripheral Component Interconnect Express</td><td>PCI का तीव्र आधुनिक रूप — ग्राफ़िक्स कार्ड, NVMe SSD</td></tr>
      <tr><td>AGP</td><td>Accelerated Graphics Port</td><td>पुराना ग्राफ़िक्स कार्ड स्लॉट</td></tr>
      <tr><td>SATA</td><td>Serial Advanced Technology Attachment</td><td>हार्ड डिस्क/SSD जोड़ने का सीरियल इंटरफ़ेस</td></tr>
      <tr><td>PATA</td><td>Parallel Advanced Technology Attachment</td><td>पुराना समानांतर डिस्क इंटरफ़ेस</td></tr>
      <tr><td>IDE (हार्डवेयर)</td><td>Integrated Drive Electronics</td><td>पुराना डिस्क ड्राइव इंटरफ़ेस</td></tr>
      <tr><td>SCSI</td><td>Small Computer System Interface</td><td>"स्कज़ी" — सर्वरों में डिस्क जोड़ने का इंटरफ़ेस</td></tr>
      <tr><td>USB</td><td>Universal Serial Bus</td><td>सार्वभौमिक सीरियल बस — प्लग एंड प्ले पोर्ट</td></tr>
      <tr><td>VGA</td><td>Video Graphics Array</td><td>एनालॉग डिस्प्ले मानक/पोर्ट (15 पिन)</td></tr>
      <tr><td>SVGA</td><td>Super Video Graphics Array</td><td>VGA से उच्च रेज़ोल्यूशन (800×600)</td></tr>
      <tr><td>XGA</td><td>Extended Graphics Array</td><td>1024×768 रेज़ोल्यूशन मानक</td></tr>
      <tr><td>HDMI</td><td>High-Definition Multimedia Interface</td><td>ऑडियो + वीडियो एक ही केबल से (डिजिटल)</td></tr>
      <tr><td>DVI</td><td>Digital Visual Interface</td><td>डिजिटल वीडियो पोर्ट (केवल वीडियो)</td></tr>
      <tr><td>DP</td><td>DisplayPort</td><td>आधुनिक डिजिटल डिस्प्ले पोर्ट</td></tr>
      <tr><td>PS/2</td><td>Personal System/2</td><td>पुराना कीबोर्ड-माउस पोर्ट (बैंगनी = कीबोर्ड, हरा = माउस)</td></tr>
      <tr><td>RJ-45</td><td>Registered Jack 45</td><td>ईथरनेट (LAN) केबल का कनेक्टर; RJ-11 टेलीफ़ोन हेतु</td></tr>
      <tr><td>KVM</td><td>Keyboard, Video, Mouse</td><td>एक कीबोर्ड-मॉनिटर-माउस से कई कम्प्यूटर चलाने वाला स्विच</td></tr>
      <tr><td>I/O</td><td>Input/Output</td><td>निवेश/निर्गम</td></tr>
      <tr><td>DMA</td><td>Direct Memory Access</td><td>CPU को बीच में लाए बिना उपकरण का सीधे मेमोरी से डेटा आदान-प्रदान</td></tr>
      <tr><td>IRQ</td><td>Interrupt Request</td><td>उपकरण द्वारा CPU का ध्यान माँगने का संकेत</td></tr>
      <tr><td>NIC</td><td>Network Interface Card</td><td>नेटवर्क अंतरापृष्ठ कार्ड (LAN कार्ड) — इसमें MAC पता होता है</td></tr>
      <tr><td>MODEM</td><td>Modulator-Demodulator</td><td>डिजिटल ↔ एनालॉग संकेत परिवर्तक</td></tr>
      <tr><td>SMART</td><td>Self-Monitoring, Analysis and Reporting Technology</td><td>हार्ड डिस्क/SSD की स्व-निगरानी तकनीक</td></tr>
    </table>

    <h3>2. मेमोरी एवं भंडारण (Memory & Storage)</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>RAM</td><td>Random Access Memory</td><td>यादृच्छिक अभिगम स्मृति — अस्थायी (Volatile) मुख्य मेमोरी</td></tr>
      <tr><td>ROM</td><td>Read Only Memory</td><td>केवल पठनीय स्मृति — स्थायी (Non-volatile)</td></tr>
      <tr><td>PROM</td><td>Programmable Read Only Memory</td><td>केवल एक बार प्रोग्राम की जा सकने वाली ROM</td></tr>
      <tr><td>EPROM</td><td>Erasable Programmable Read Only Memory</td><td>पराबैंगनी (UV) प्रकाश से मिटाई जा सकने वाली ROM</td></tr>
      <tr><td>EEPROM</td><td>Electrically Erasable Programmable Read Only Memory</td><td>विद्युत संकेत से मिटाई जा सकने वाली ROM (फ़्लैश मेमोरी इसी का रूप)</td></tr>
      <tr><td>DRAM</td><td>Dynamic Random Access Memory</td><td>संधारित्र (Capacitor) आधारित, बार-बार रिफ़्रेश आवश्यक — मुख्य मेमोरी</td></tr>
      <tr><td>SRAM</td><td>Static Random Access Memory</td><td>फ़्लिप-फ़्लॉप आधारित, रिफ़्रेश नहीं — तेज़, महँगी, कैश में</td></tr>
      <tr><td>SDRAM</td><td>Synchronous Dynamic Random Access Memory</td><td>सिस्टम क्लॉक से तालमेल वाली DRAM</td></tr>
      <tr><td>DDR</td><td>Double Data Rate</td><td>एक क्लॉक चक्र में दो बार डेटा स्थानांतरण (DDR4, DDR5)</td></tr>
      <tr><td>VRAM</td><td>Video Random Access Memory</td><td>ग्राफ़िक्स कार्ड की मेमोरी</td></tr>
      <tr><td>NVRAM</td><td>Non-Volatile Random Access Memory</td><td>बिजली जाने पर भी डेटा बनाए रखने वाली RAM</td></tr>
      <tr><td>SIMM / DIMM</td><td>Single / Dual In-line Memory Module</td><td>RAM मॉड्यूल के प्रकार</td></tr>
      <tr><td>SO-DIMM</td><td>Small Outline Dual In-line Memory Module</td><td>लैपटॉप की छोटी RAM स्टिक</td></tr>
      <tr><td>HDD</td><td>Hard Disk Drive</td><td>चुंबकीय हार्ड डिस्क</td></tr>
      <tr><td>SSD</td><td>Solid State Drive</td><td>फ़्लैश मेमोरी आधारित ड्राइव — कोई घूमने वाला भाग नहीं</td></tr>
      <tr><td>FDD</td><td>Floppy Disk Drive</td><td>फ़्लॉपी डिस्क ड्राइव</td></tr>
      <tr><td>CD</td><td>Compact Disc</td><td>सघन डिस्क (लगभग 700 MB)</td></tr>
      <tr><td>CD-ROM</td><td>Compact Disc Read Only Memory</td><td>केवल पढ़ी जा सकने वाली CD</td></tr>
      <tr><td>CD-R</td><td>Compact Disc Recordable</td><td>एक बार लिखी जा सकने वाली CD</td></tr>
      <tr><td>CD-RW</td><td>Compact Disc ReWritable</td><td>बार-बार मिटाकर लिखी जा सकने वाली CD</td></tr>
      <tr><td>DVD</td><td>Digital Versatile Disc</td><td>डिजिटल बहुमुखी डिस्क (4.7 GB एक परत)</td></tr>
      <tr><td>BD</td><td>Blu-ray Disc</td><td>नीली-बैंगनी लेज़र वाली डिस्क (25 GB एक परत)</td></tr>
      <tr><td>WORM</td><td>Write Once Read Many</td><td>एक बार लिखें, अनेक बार पढ़ें</td></tr>
      <tr><td>NAS</td><td>Network Attached Storage</td><td>नेटवर्क से जुड़ा साझा भंडारण उपकरण</td></tr>
      <tr><td>SAN</td><td>Storage Area Network</td><td>सर्वरों हेतु समर्पित उच्च-गति भंडारण नेटवर्क</td></tr>
      <tr><td>RAID</td><td>Redundant Array of Independent Disks</td><td>कई डिस्कों को मिलाकर सुरक्षा/गति (पुराना रूप: Inexpensive Disks)</td></tr>
      <tr><td>NVMe</td><td>Non-Volatile Memory Express</td><td>PCIe पर चलने वाला तीव्र SSD प्रोटोकॉल</td></tr>
      <tr><td>MMC / eMMC</td><td>MultiMediaCard / embedded MultiMediaCard</td><td>फ़्लैश मेमोरी कार्ड / मोबाइल में अंतर्निहित भंडारण</td></tr>
      <tr><td>SD</td><td>Secure Digital</td><td>मेमोरी कार्ड</td></tr>
      <tr><td>SDHC / SDXC</td><td>Secure Digital High Capacity / eXtended Capacity</td><td>32 GB तक / 2 TB तक के SD कार्ड</td></tr>
      <tr><td>FAT</td><td>File Allocation Table</td><td>फ़ाइल आवंटन तालिका — फ़ाइल सिस्टम (FAT32)</td></tr>
      <tr><td>exFAT</td><td>Extended File Allocation Table</td><td>पेन ड्राइव/मेमोरी कार्ड हेतु फ़ाइल सिस्टम</td></tr>
      <tr><td>NTFS</td><td>New Technology File System</td><td>Windows का मुख्य फ़ाइल सिस्टम</td></tr>
      <tr><td>MBR (डिस्क)</td><td>Master Boot Record</td><td>डिस्क का प्रथम सेक्टर — बूट जानकारी व पार्टिशन तालिका</td></tr>
      <tr><td>GPT (डिस्क)</td><td>GUID Partition Table</td><td>MBR की आधुनिक पार्टिशन योजना (UEFI के साथ)</td></tr>
      <tr><td>GUID</td><td>Globally Unique Identifier</td><td>वैश्विक रूप से अद्वितीय पहचानकर्ता</td></tr>
      <tr><td>RPM</td><td>Revolutions Per Minute</td><td>प्रति मिनट चक्कर — हार्ड डिस्क की घूर्णन गति (5400/7200)</td></tr>
      <tr><td>FIFO</td><td>First In First Out</td><td>पहले आओ पहले जाओ — कतार (Queue)</td></tr>
      <tr><td>LIFO</td><td>Last In First Out</td><td>अंतिम आओ पहले जाओ — स्टैक (Stack)</td></tr>
    </table>

    <h3>3. मेमोरी की इकाइयाँ (Units)</h3>
    <table>
      <tr><th>इकाई</th><th>पूर्ण रूप</th><th>मान</th></tr>
      <tr><td>Bit</td><td>Binary Digit</td><td>0 या 1 — सबसे छोटी इकाई</td></tr>
      <tr><td>Nibble</td><td>—</td><td>4 बिट</td></tr>
      <tr><td>Byte (B)</td><td>—</td><td>8 बिट</td></tr>
      <tr><td>KB</td><td>Kilobyte</td><td>1024 बाइट (2¹⁰)</td></tr>
      <tr><td>MB</td><td>Megabyte</td><td>1024 KB (2²⁰ बाइट)</td></tr>
      <tr><td>GB</td><td>Gigabyte</td><td>1024 MB (2³⁰ बाइट)</td></tr>
      <tr><td>TB</td><td>Terabyte</td><td>1024 GB (2⁴⁰ बाइट)</td></tr>
      <tr><td>PB</td><td>Petabyte</td><td>1024 TB (2⁵⁰ बाइट)</td></tr>
      <tr><td>EB</td><td>Exabyte</td><td>1024 PB (2⁶⁰ बाइट)</td></tr>
      <tr><td>ZB</td><td>Zettabyte</td><td>1024 EB (2⁷⁰ बाइट)</td></tr>
      <tr><td>YB</td><td>Yottabyte</td><td>1024 ZB (2⁸⁰ बाइट)</td></tr>
      <tr><td>bps / Kbps / Mbps / Gbps</td><td>bits / Kilobits / Megabits / Gigabits per second</td><td>डेटा-स्थानांतरण (इंटरनेट) गति की इकाइयाँ — "b" छोटा = बिट</td></tr>
      <tr><td>MBps</td><td>Megabytes per second</td><td>"B" बड़ा = बाइट; 1 MBps = 8 Mbps</td></tr>
    </table>
    <div class="tip">क्रम याद रखें: <b>K-M-G-T-P-E-Z-Y</b> — "<b>K</b>ya <b>M</b>era <b>G</b>har <b>T</b>umhare <b>P</b>aas <b>E</b>k <b>Z</b>ebra <b>Y</b>ard?" हर अगली इकाई पिछली की 1024 गुनी (बाइनरी में)।</div>

    <h3>4. इनपुट-आउटपुट उपकरण व डिस्प्ले</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>OCR</td><td>Optical Character Recognition</td><td>प्रकाशीय अक्षर पहचान — छपे/लिखे पाठ को संपादन योग्य टेक्स्ट में बदलना</td></tr>
      <tr><td>OMR</td><td>Optical Mark Recognition</td><td>प्रकाशीय चिह्न पहचान — उत्तर-पुस्तिका के गोले जाँचना</td></tr>
      <tr><td>MICR</td><td>Magnetic Ink Character Recognition</td><td>चुंबकीय स्याही अक्षर पहचान — बैंक चेक</td></tr>
      <tr><td>BCR</td><td>Bar Code Reader</td><td>बारकोड पढ़ने वाला उपकरण — दुकानें/पुस्तकालय</td></tr>
      <tr><td>QR</td><td>Quick Response (Code)</td><td>द्वि-आयामी (2D) कोड — UPI भुगतान</td></tr>
      <tr><td>POS</td><td>Point of Sale</td><td>बिक्री बिंदु टर्मिनल (कार्ड स्वाइप मशीन)</td></tr>
      <tr><td>ATM</td><td>Automated Teller Machine</td><td>स्वचालित गणक मशीन</td></tr>
      <tr><td>VDU</td><td>Visual Display Unit</td><td>दृश्य प्रदर्शन इकाई (मॉनिटर)</td></tr>
      <tr><td>CRT</td><td>Cathode Ray Tube</td><td>कैथोड किरण नलिका — पुराने भारी मॉनिटर</td></tr>
      <tr><td>LCD</td><td>Liquid Crystal Display</td><td>द्रव क्रिस्टल प्रदर्शन</td></tr>
      <tr><td>LED</td><td>Light Emitting Diode</td><td>प्रकाश उत्सर्जक डायोड</td></tr>
      <tr><td>OLED</td><td>Organic Light Emitting Diode</td><td>कार्बनिक LED — स्वयं प्रकाश देता है, बैकलाइट नहीं</td></tr>
      <tr><td>AMOLED</td><td>Active Matrix Organic Light Emitting Diode</td><td>मोबाइल स्क्रीन में प्रयुक्त OLED</td></tr>
      <tr><td>TFT</td><td>Thin Film Transistor</td><td>पतली फ़िल्म ट्रांजिस्टर — सक्रिय मैट्रिक्स LCD</td></tr>
      <tr><td>DPI</td><td>Dots Per Inch</td><td>प्रिंटर/स्कैनर का रेज़ोल्यूशन</td></tr>
      <tr><td>PPI</td><td>Pixels Per Inch</td><td>स्क्रीन की पिक्सेल सघनता</td></tr>
      <tr><td>PPM</td><td>Pages Per Minute</td><td>लेज़र/इंकजेट प्रिंटर की गति</td></tr>
      <tr><td>CPS</td><td>Characters Per Second</td><td>डॉट मैट्रिक्स प्रिंटर की गति</td></tr>
      <tr><td>LPM</td><td>Lines Per Minute</td><td>लाइन प्रिंटर की गति</td></tr>
      <tr><td>NLQ</td><td>Near Letter Quality</td><td>टाइपराइटर जैसी छपाई गुणवत्ता</td></tr>
      <tr><td>DMP</td><td>Dot Matrix Printer</td><td>इम्पैक्ट प्रिंटर — कार्बन कॉपी संभव</td></tr>
      <tr><td>MFP</td><td>Multi-Function Printer</td><td>प्रिंट + स्कैन + कॉपी + फ़ैक्स एक में</td></tr>
      <tr><td>CCD</td><td>Charge-Coupled Device</td><td>स्कैनर/कैमरे का प्रकाश-संवेदी सेंसर</td></tr>
      <tr><td>DSLR</td><td>Digital Single-Lens Reflex</td><td>डिजिटल कैमरे का प्रकार</td></tr>
      <tr><td>HD / FHD / UHD</td><td>High Definition / Full HD / Ultra HD</td><td>1280×720 / 1920×1080 / 3840×2160 (4K)</td></tr>
      <tr><td>VR</td><td>Virtual Reality</td><td>आभासी वास्तविकता — पूर्णतः कृत्रिम दृश्य-जगत</td></tr>
      <tr><td>AR</td><td>Augmented Reality</td><td>संवर्धित वास्तविकता — वास्तविक दृश्य पर डिजिटल परत</td></tr>
      <tr><td>MR</td><td>Mixed Reality</td><td>मिश्रित वास्तविकता</td></tr>
      <tr><td>3D</td><td>Three Dimensional</td><td>त्रि-आयामी</td></tr>
      <tr><td>UI / UX</td><td>User Interface / User Experience</td><td>उपयोगकर्ता अंतरापृष्ठ / उपयोगकर्ता अनुभव</td></tr>
      <tr><td>HCI</td><td>Human Computer Interaction</td><td>मानव-कम्प्यूटर अन्योन्यक्रिया</td></tr>
    </table>

    <h3>5. कीबोर्ड की कुंजियाँ</h3>
    <table>
      <tr><th>कुंजी</th><th>पूर्ण रूप</th><th>कार्य</th></tr>
      <tr><td>Esc</td><td>Escape</td><td>चालू क्रिया रद्द करना</td></tr>
      <tr><td>Ctrl</td><td>Control</td><td>अन्य कुंजी के साथ शॉर्टकट (Ctrl+C)</td></tr>
      <tr><td>Alt</td><td>Alternate</td><td>वैकल्पिक कार्य/मेन्यू शॉर्टकट</td></tr>
      <tr><td>Del</td><td>Delete</td><td>कर्सर के दाईं ओर का अक्षर/चयनित वस्तु हटाना</td></tr>
      <tr><td>Ins</td><td>Insert</td><td>इन्सर्ट/ओवरटाइप मोड बदलना</td></tr>
      <tr><td>PrtSc</td><td>Print Screen</td><td>स्क्रीन का चित्र क्लिपबोर्ड पर</td></tr>
      <tr><td>PgUp / PgDn</td><td>Page Up / Page Down</td><td>एक स्क्रीन ऊपर/नीचे</td></tr>
      <tr><td>Caps Lock</td><td>Capitals Lock</td><td>बड़े अक्षर (Capital) लगातार टाइप करना</td></tr>
      <tr><td>Num Lock</td><td>Number Lock</td><td>न्यूमेरिक कीपैड चालू/बंद</td></tr>
      <tr><td>Fn / F1–F12</td><td>Function / Function Keys</td><td>F1 = सहायता, F2 = नाम बदलना, F5 = रिफ़्रेश</td></tr>
    </table>

    <h3>6. सॉफ़्टवेयर, प्रोग्रामिंग एवं डेटाबेस</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>OS</td><td>Operating System</td><td>प्रचालन तंत्र</td></tr>
      <tr><td>DOS</td><td>Disk Operating System</td><td>डिस्क प्रचालन तंत्र (CLI आधारित)</td></tr>
      <tr><td>MS-DOS</td><td>Microsoft Disk Operating System</td><td>Microsoft का DOS (1981)</td></tr>
      <tr><td>GUI</td><td>Graphical User Interface</td><td>ग्राफ़िकल उपयोगकर्ता अंतरापृष्ठ — आइकन, विंडो, माउस</td></tr>
      <tr><td>CUI</td><td>Character User Interface</td><td>अक्षर-आधारित अंतरापृष्ठ</td></tr>
      <tr><td>CLI</td><td>Command Line Interface</td><td>कमांड टाइप करके चलाने वाला अंतरापृष्ठ</td></tr>
      <tr><td>API</td><td>Application Programming Interface</td><td>दो सॉफ़्टवेयर के बीच संवाद का नियम-समूह</td></tr>
      <tr><td>SDK</td><td>Software Development Kit</td><td>सॉफ़्टवेयर विकास किट</td></tr>
      <tr><td>IDE (सॉफ़्टवेयर)</td><td>Integrated Development Environment</td><td>एकीकृत विकास परिवेश — कोड लिखना, कम्पाइल, डिबग एक जगह</td></tr>
      <tr><td>JVM</td><td>Java Virtual Machine</td><td>जावा बाइटकोड चलाने वाली आभासी मशीन</td></tr>
      <tr><td>JDK / JRE</td><td>Java Development Kit / Java Runtime Environment</td><td>जावा विकास किट / चलाने का परिवेश</td></tr>
      <tr><td>BASIC</td><td>Beginner's All-purpose Symbolic Instruction Code</td><td>आरंभिक सीखने वालों की भाषा</td></tr>
      <tr><td>COBOL</td><td>Common Business Oriented Language</td><td>व्यावसायिक डेटा प्रसंस्करण भाषा</td></tr>
      <tr><td>FORTRAN</td><td>Formula Translation</td><td>वैज्ञानिक गणनाओं की प्रथम उच्च-स्तरीय भाषा</td></tr>
      <tr><td>LISP</td><td>List Processing</td><td>कृत्रिम बुद्धिमत्ता हेतु प्रारंभिक भाषा</td></tr>
      <tr><td>PROLOG</td><td>Programming in Logic</td><td>तर्क-आधारित AI भाषा</td></tr>
      <tr><td>ALGOL</td><td>Algorithmic Language</td><td>एल्गोरिथ्म लिखने हेतु प्रारंभिक भाषा</td></tr>
      <tr><td>OOP</td><td>Object Oriented Programming</td><td>वस्तु-उन्मुख प्रोग्रामिंग (C++, Java, Python)</td></tr>
      <tr><td>SQL</td><td>Structured Query Language</td><td>संरचित क्वेरी भाषा — डेटाबेस से डेटा निकालना/बदलना</td></tr>
      <tr><td>DBMS</td><td>Database Management System</td><td>डेटाबेस प्रबंधन प्रणाली (MS Access)</td></tr>
      <tr><td>RDBMS</td><td>Relational Database Management System</td><td>संबंधपरक DBMS — डेटा तालिकाओं (Tables) में (Oracle, MySQL)</td></tr>
      <tr><td>DDL</td><td>Data Definition Language</td><td>CREATE, ALTER, DROP — संरचना परिभाषित करना</td></tr>
      <tr><td>DML</td><td>Data Manipulation Language</td><td>INSERT, UPDATE, DELETE, SELECT — डेटा बदलना</td></tr>
      <tr><td>DCL</td><td>Data Control Language</td><td>GRANT, REVOKE — अनुमति नियंत्रण</td></tr>
      <tr><td>TCL</td><td>Transaction Control Language</td><td>COMMIT, ROLLBACK</td></tr>
      <tr><td>ACID</td><td>Atomicity, Consistency, Isolation, Durability</td><td>डेटाबेस लेन-देन (Transaction) के चार गुण</td></tr>
      <tr><td>ERD</td><td>Entity Relationship Diagram</td><td>सत्ता-संबंध आरेख</td></tr>
      <tr><td>DFD</td><td>Data Flow Diagram</td><td>डेटा प्रवाह आरेख</td></tr>
      <tr><td>SDLC</td><td>Software Development Life Cycle</td><td>सॉफ़्टवेयर विकास जीवन-चक्र</td></tr>
      <tr><td>UML</td><td>Unified Modeling Language</td><td>सॉफ़्टवेयर डिज़ाइन का मानक आरेख-भाषा</td></tr>
      <tr><td>EXE</td><td>Executable</td><td>चलाने योग्य प्रोग्राम फ़ाइल</td></tr>
      <tr><td>DLL</td><td>Dynamic Link Library</td><td>कई प्रोग्रामों द्वारा साझा कोड की फ़ाइल</td></tr>
      <tr><td>BAT</td><td>Batch File</td><td>DOS/Windows कमांडों की श्रृंखला वाली फ़ाइल</td></tr>
      <tr><td>CSV</td><td>Comma Separated Values</td><td>अल्पविराम से अलग मान — सारणीबद्ध पाठ फ़ाइल</td></tr>
      <tr><td>RTF</td><td>Rich Text Format</td><td>फ़ॉर्मेटिंग सहित पाठ फ़ाइल</td></tr>
      <tr><td>ODF</td><td>OpenDocument Format</td><td>LibreOffice/OpenOffice का खुला फ़ाइल मानक (.odt, .ods)</td></tr>
      <tr><td>PDF</td><td>Portable Document Format</td><td>Adobe द्वारा विकसित, हर उपकरण पर समान दिखने वाला प्रारूप</td></tr>
      <tr><td>XPS</td><td>XML Paper Specification</td><td>Microsoft का PDF जैसा प्रारूप</td></tr>
      <tr><td>WYSIWYG</td><td>What You See Is What You Get</td><td>जो स्क्रीन पर दिखे वही छपे</td></tr>
      <tr><td>GIGO</td><td>Garbage In, Garbage Out</td><td>गलत इनपुट = गलत आउटपुट</td></tr>
      <tr><td>FOSS</td><td>Free and Open Source Software</td><td>मुक्त एवं मुक्त-स्रोत सॉफ़्टवेयर</td></tr>
      <tr><td>OSS</td><td>Open Source Software</td><td>स्रोत कोड सार्वजनिक</td></tr>
      <tr><td>GNU</td><td>GNU's Not Unix</td><td>पुनरावर्ती (Recursive) संक्षिप्त रूप — मुक्त सॉफ़्टवेयर परियोजना</td></tr>
      <tr><td>GPL</td><td>General Public License</td><td>मुक्त सॉफ़्टवेयर का लाइसेंस</td></tr>
      <tr><td>EULA</td><td>End User License Agreement</td><td>अंतिम उपयोगकर्ता लाइसेंस समझौता</td></tr>
      <tr><td>OEM</td><td>Original Equipment Manufacturer</td><td>मूल उपकरण निर्माता</td></tr>
      <tr><td>OLE</td><td>Object Linking and Embedding</td><td>एक दस्तावेज़ में दूसरे प्रोग्राम की वस्तु जोड़ना</td></tr>
      <tr><td>DTP</td><td>Desktop Publishing</td><td>डेस्कटॉप प्रकाशन (PageMaker, InDesign)</td></tr>
      <tr><td>CAD / CAM</td><td>Computer Aided Design / Manufacturing</td><td>कम्प्यूटर-सहायित अभिकल्पन / निर्माण</td></tr>
      <tr><td>CAI / CBT</td><td>Computer Aided Instruction / Computer Based Training</td><td>कम्प्यूटर-सहायित शिक्षण / प्रशिक्षण</td></tr>
      <tr><td>ERP</td><td>Enterprise Resource Planning</td><td>उद्यम संसाधन नियोजन (SAP)</td></tr>
      <tr><td>CRM</td><td>Customer Relationship Management</td><td>ग्राहक संबंध प्रबंधन</td></tr>
      <tr><td>MIS</td><td>Management Information System</td><td>प्रबंधन सूचना प्रणाली</td></tr>
      <tr><td>DSS</td><td>Decision Support System</td><td>निर्णय सहायक प्रणाली</td></tr>
      <tr><td>OLAP / OLTP</td><td>Online Analytical / Transaction Processing</td><td>ऑनलाइन विश्लेषणात्मक / लेन-देन प्रसंस्करण</td></tr>
      <tr><td>EDP</td><td>Electronic Data Processing</td><td>इलेक्ट्रॉनिक डेटा प्रसंस्करण</td></tr>
      <tr><td>IT / ICT</td><td>Information Technology / Information and Communication Technology</td><td>सूचना प्रौद्योगिकी / सूचना एवं संचार प्रौद्योगिकी</td></tr>
      <tr><td>BPO / KPO</td><td>Business / Knowledge Process Outsourcing</td><td>व्यावसायिक / ज्ञान प्रक्रिया बाह्य-स्रोतन</td></tr>
      <tr><td>SPOOL</td><td>Simultaneous Peripheral Operations On-Line</td><td>स्पूलिंग — प्रिंट कार्यों की कतार</td></tr>
      <tr><td>VM</td><td>Virtual Machine</td><td>आभासी मशीन</td></tr>
      <tr><td>FAQ</td><td>Frequently Asked Questions</td><td>अक्सर पूछे जाने वाले प्रश्न</td></tr>
      <tr><td>EOF</td><td>End Of File</td><td>फ़ाइल का अंत</td></tr>
    </table>

    <h3>7. कृत्रिम बुद्धिमत्ता एवं उभरती तकनीकें</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>AI</td><td>Artificial Intelligence</td><td>कृत्रिम बुद्धिमत्ता</td></tr>
      <tr><td>ML</td><td>Machine Learning</td><td>यंत्र अधिगम — डेटा से स्वयं सीखना</td></tr>
      <tr><td>DL</td><td>Deep Learning</td><td>गहन अधिगम — बहु-स्तरीय न्यूरल नेटवर्क</td></tr>
      <tr><td>ANN</td><td>Artificial Neural Network</td><td>कृत्रिम तंत्रिका नेटवर्क</td></tr>
      <tr><td>NLP</td><td>Natural Language Processing</td><td>प्राकृतिक भाषा प्रसंस्करण (अनुवाद, चैटबॉट)</td></tr>
      <tr><td>LLM</td><td>Large Language Model</td><td>बृहत् भाषा मॉडल</td></tr>
      <tr><td>GPT (AI)</td><td>Generative Pre-trained Transformer</td><td>ChatGPT में प्रयुक्त मॉडल-परिवार</td></tr>
      <tr><td>AGI</td><td>Artificial General Intelligence</td><td>मानव-समान सामान्य बुद्धिमत्ता (परिकल्पित)</td></tr>
      <tr><td>RPA</td><td>Robotic Process Automation</td><td>दोहराव वाले कार्यों का सॉफ़्टवेयर से स्वचालन</td></tr>
      <tr><td>TTS / STT</td><td>Text To Speech / Speech To Text</td><td>पाठ से वाणी / वाणी से पाठ</td></tr>
      <tr><td>IoT</td><td>Internet of Things</td><td>वस्तुओं का इंटरनेट — सेंसरयुक्त उपकरण आपस में जुड़े</td></tr>
      <tr><td>IIoT</td><td>Industrial Internet of Things</td><td>औद्योगिक IoT</td></tr>
      <tr><td>SaaS</td><td>Software as a Service</td><td>सेवा के रूप में सॉफ़्टवेयर (Gmail, Google Docs)</td></tr>
      <tr><td>PaaS</td><td>Platform as a Service</td><td>सेवा के रूप में प्लेटफ़ॉर्म (Google App Engine)</td></tr>
      <tr><td>IaaS</td><td>Infrastructure as a Service</td><td>सेवा के रूप में अवसंरचना — सर्वर, भंडारण (AWS EC2)</td></tr>
      <tr><td>AWS</td><td>Amazon Web Services</td><td>Amazon की क्लाउड सेवा</td></tr>
      <tr><td>OTT</td><td>Over The Top</td><td>इंटरनेट से सीधे वीडियो सेवा (Netflix)</td></tr>
      <tr><td>OTA</td><td>Over The Air</td><td>वायरलेस रूप से सॉफ़्टवेयर अपडेट</td></tr>
      <tr><td>IVR</td><td>Interactive Voice Response</td><td>स्वचालित फ़ोन-उत्तर प्रणाली ("हिन्दी के लिए 1 दबाएँ")</td></tr>
      <tr><td>CCTV</td><td>Closed Circuit Television</td><td>बंद परिपथ टेलीविज़न — निगरानी कैमरा</td></tr>
      <tr><td>PDA</td><td>Personal Digital Assistant</td><td>व्यक्तिगत डिजिटल सहायक (स्मार्टफ़ोन का पूर्वज)</td></tr>
      <tr><td>DRM</td><td>Digital Rights Management</td><td>डिजिटल अधिकार प्रबंधन — नकल रोकना</td></tr>
      <tr><td>IPR</td><td>Intellectual Property Rights</td><td>बौद्धिक संपदा अधिकार</td></tr>
    </table>

    <h3>8. नेटवर्किंग एवं संचार</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>PAN (नेटवर्क)</td><td>Personal Area Network</td><td>व्यक्तिगत क्षेत्र नेटवर्क (लगभग 10 मीटर — ब्लूटूथ)</td></tr>
      <tr><td>LAN</td><td>Local Area Network</td><td>स्थानीय क्षेत्र नेटवर्क — भवन/कार्यालय</td></tr>
      <tr><td>CAN</td><td>Campus Area Network</td><td>परिसर क्षेत्र नेटवर्क — विश्वविद्यालय परिसर</td></tr>
      <tr><td>MAN</td><td>Metropolitan Area Network</td><td>महानगरीय क्षेत्र नेटवर्क — एक शहर</td></tr>
      <tr><td>WAN</td><td>Wide Area Network</td><td>विस्तृत क्षेत्र नेटवर्क — देश/विश्व (इंटरनेट सबसे बड़ा WAN)</td></tr>
      <tr><td>WLAN</td><td>Wireless Local Area Network</td><td>बेतार LAN (Wi-Fi)</td></tr>
      <tr><td>VPN</td><td>Virtual Private Network</td><td>आभासी निजी नेटवर्क — सार्वजनिक इंटरनेट पर एन्क्रिप्टेड सुरंग</td></tr>
      <tr><td>P2P</td><td>Peer to Peer</td><td>सहकर्मी-से-सहकर्मी नेटवर्क (कोई केंद्रीय सर्वर नहीं)</td></tr>
      <tr><td>OSI</td><td>Open Systems Interconnection</td><td>7 परतों वाला नेटवर्क संदर्भ मॉडल (ISO द्वारा)</td></tr>
      <tr><td>TCP</td><td>Transmission Control Protocol</td><td>विश्वसनीय, कनेक्शन-आधारित परिवहन प्रोटोकॉल</td></tr>
      <tr><td>UDP</td><td>User Datagram Protocol</td><td>तेज़, कनेक्शन-रहित परिवहन प्रोटोकॉल</td></tr>
      <tr><td>IP</td><td>Internet Protocol</td><td>पता देना व पैकेट को मार्ग देना (Routing)</td></tr>
      <tr><td>IPv4 / IPv6</td><td>Internet Protocol version 4 / version 6</td><td>32 बिट / 128 बिट पता</td></tr>
      <tr><td>MAC</td><td>Media Access Control</td><td>NIC का 48 बिट भौतिक (हार्डवेयर) पता</td></tr>
      <tr><td>ARP</td><td>Address Resolution Protocol</td><td>IP पते से MAC पता ज्ञात करना</td></tr>
      <tr><td>RARP</td><td>Reverse Address Resolution Protocol</td><td>MAC पते से IP पता ज्ञात करना</td></tr>
      <tr><td>ICMP</td><td>Internet Control Message Protocol</td><td>त्रुटि-संदेश व ping कमांड</td></tr>
      <tr><td>DHCP</td><td>Dynamic Host Configuration Protocol</td><td>उपकरणों को स्वतः IP पता देना</td></tr>
      <tr><td>DNS</td><td>Domain Name System</td><td>डोमेन नाम को IP पते में बदलना ("इंटरनेट की फ़ोन-बुक")</td></tr>
      <tr><td>NAT</td><td>Network Address Translation</td><td>निजी IP पतों को एक सार्वजनिक IP से इंटरनेट पर भेजना</td></tr>
      <tr><td>SNMP</td><td>Simple Network Management Protocol</td><td>नेटवर्क उपकरणों का प्रबंधन/निगरानी</td></tr>
      <tr><td>NTP</td><td>Network Time Protocol</td><td>कम्प्यूटरों की घड़ियाँ मिलाना</td></tr>
      <tr><td>SSH</td><td>Secure Shell</td><td>दूरस्थ कम्प्यूटर में सुरक्षित (एन्क्रिप्टेड) लॉगिन</td></tr>
      <tr><td>Telnet</td><td>Teletype Network</td><td>दूरस्थ लॉगिन (असुरक्षित, बिना एन्क्रिप्शन)</td></tr>
      <tr><td>FTP</td><td>File Transfer Protocol</td><td>फ़ाइल स्थानांतरण प्रोटोकॉल (पोर्ट 20/21)</td></tr>
      <tr><td>TFTP</td><td>Trivial File Transfer Protocol</td><td>सरल फ़ाइल स्थानांतरण (UDP पर)</td></tr>
      <tr><td>HTTP</td><td>HyperText Transfer Protocol</td><td>वेब पेज स्थानांतरण प्रोटोकॉल (पोर्ट 80)</td></tr>
      <tr><td>HTTPS</td><td>HyperText Transfer Protocol Secure</td><td>SSL/TLS से एन्क्रिप्टेड HTTP (पोर्ट 443, ताले का चिह्न)</td></tr>
      <tr><td>SMTP</td><td>Simple Mail Transfer Protocol</td><td>ई-मेल भेजना</td></tr>
      <tr><td>POP3</td><td>Post Office Protocol version 3</td><td>ई-मेल सर्वर से डाउनलोड कर प्राप्त करना</td></tr>
      <tr><td>IMAP</td><td>Internet Message Access Protocol</td><td>ई-मेल सर्वर पर रखते हुए अनेक उपकरणों पर पढ़ना</td></tr>
      <tr><td>MIME</td><td>Multipurpose Internet Mail Extensions</td><td>ई-मेल में चित्र/ऑडियो संलग्नक</td></tr>
      <tr><td>SSL</td><td>Secure Sockets Layer</td><td>सुरक्षित सॉकेट परत (पुराना)</td></tr>
      <tr><td>TLS</td><td>Transport Layer Security</td><td>परिवहन परत सुरक्षा — SSL का उत्तराधिकारी</td></tr>
      <tr><td>FDDI</td><td>Fiber Distributed Data Interface</td><td>ऑप्टिकल फ़ाइबर आधारित रिंग नेटवर्क मानक</td></tr>
      <tr><td>STP / UTP</td><td>Shielded / Unshielded Twisted Pair</td><td>परिरक्षित / अपरिरक्षित व्यावर्तित युग्म केबल</td></tr>
      <tr><td>OFC</td><td>Optical Fibre Cable</td><td>प्रकाशीय तंतु केबल — पूर्ण आंतरिक परावर्तन पर आधारित</td></tr>
      <tr><td>PSTN</td><td>Public Switched Telephone Network</td><td>सार्वजनिक स्विच्ड टेलीफ़ोन नेटवर्क (लैंडलाइन)</td></tr>
      <tr><td>DSL / ADSL</td><td>Digital Subscriber Line / Asymmetric DSL</td><td>टेलीफ़ोन लाइन पर ब्रॉडबैंड; ADSL में डाउनलोड गति अधिक</td></tr>
      <tr><td>ISDN</td><td>Integrated Services Digital Network</td><td>एकीकृत सेवा डिजिटल नेटवर्क</td></tr>
      <tr><td>FTTH</td><td>Fibre To The Home</td><td>घर तक ऑप्टिकल फ़ाइबर ब्रॉडबैंड</td></tr>
      <tr><td>DTH</td><td>Direct To Home</td><td>उपग्रह से सीधे घर तक टीवी प्रसारण</td></tr>
      <tr><td>VoIP</td><td>Voice over Internet Protocol</td><td>इंटरनेट से वॉयस कॉल</td></tr>
      <tr><td>IPTV</td><td>Internet Protocol Television</td><td>इंटरनेट प्रोटोकॉल पर टीवी</td></tr>
      <tr><td>Wi-Fi</td><td>(परीक्षाओं में) Wireless Fidelity</td><td>IEEE 802.11 मानक वाला बेतार LAN</td></tr>
      <tr><td>Li-Fi</td><td>Light Fidelity</td><td>LED प्रकाश से डेटा संचार</td></tr>
      <tr><td>WiMAX</td><td>Worldwide Interoperability for Microwave Access</td><td>लंबी दूरी का बेतार ब्रॉडबैंड (IEEE 802.16)</td></tr>
      <tr><td>SSID</td><td>Service Set Identifier</td><td>Wi-Fi नेटवर्क का नाम</td></tr>
      <tr><td>WEP</td><td>Wired Equivalent Privacy</td><td>पुराना, कमज़ोर Wi-Fi सुरक्षा मानक</td></tr>
      <tr><td>WPA</td><td>Wi-Fi Protected Access</td><td>Wi-Fi सुरक्षा मानक (WPA2, WPA3)</td></tr>
      <tr><td>AP</td><td>Access Point</td><td>बेतार उपकरणों को नेटवर्क से जोड़ने वाला बिंदु</td></tr>
      <tr><td>NFC</td><td>Near Field Communication</td><td>कुछ सेंटीमीटर दूरी का संपर्क-रहित संचार (टैप-टू-पे)</td></tr>
      <tr><td>RFID</td><td>Radio Frequency Identification</td><td>रेडियो आवृत्ति पहचान — FASTag, पुस्तकालय टैग</td></tr>
      <tr><td>IR</td><td>Infrared</td><td>अवरक्त — टीवी रिमोट</td></tr>
      <tr><td>GPS</td><td>Global Positioning System</td><td>वैश्विक स्थिति-निर्धारण प्रणाली (अमेरिका)</td></tr>
      <tr><td>NavIC</td><td>Navigation with Indian Constellation</td><td>भारत की क्षेत्रीय नौवहन प्रणाली (ISRO)</td></tr>
      <tr><td>IRNSS</td><td>Indian Regional Navigation Satellite System</td><td>NavIC का तकनीकी नाम</td></tr>
      <tr><td>GIS</td><td>Geographic Information System</td><td>भौगोलिक सूचना प्रणाली — मानचित्र आधारित डेटा</td></tr>
      <tr><td>GSM</td><td>Global System for Mobile Communications</td><td>मोबाइल संचार की वैश्विक प्रणाली (2G, SIM आधारित)</td></tr>
      <tr><td>CDMA</td><td>Code Division Multiple Access</td><td>कोड विभाजन बहु-अभिगम</td></tr>
      <tr><td>TDMA</td><td>Time Division Multiple Access</td><td>समय विभाजन बहु-अभिगम</td></tr>
      <tr><td>FDMA</td><td>Frequency Division Multiple Access</td><td>आवृत्ति विभाजन बहु-अभिगम</td></tr>
      <tr><td>GPRS</td><td>General Packet Radio Service</td><td>सामान्य पैकेट रेडियो सेवा — 2.5G मोबाइल डेटा</td></tr>
      <tr><td>EDGE</td><td>Enhanced Data rates for GSM Evolution</td><td>2.75G मोबाइल डेटा</td></tr>
      <tr><td>UMTS</td><td>Universal Mobile Telecommunications System</td><td>3G मानक</td></tr>
      <tr><td>LTE</td><td>Long Term Evolution</td><td>4G मानक</td></tr>
      <tr><td>VoLTE</td><td>Voice over Long Term Evolution</td><td>4G नेटवर्क पर HD वॉयस कॉल</td></tr>
      <tr><td>3G / 4G / 5G</td><td>Third / Fourth / Fifth Generation</td><td>मोबाइल नेटवर्क की पीढ़ियाँ</td></tr>
      <tr><td>SIM</td><td>Subscriber Identity Module</td><td>ग्राहक पहचान मॉड्यूल</td></tr>
      <tr><td>IMEI</td><td>International Mobile Equipment Identity</td><td>मोबाइल हैंडसेट की 15 अंकीय विशिष्ट पहचान (*#06#)</td></tr>
      <tr><td>SMS</td><td>Short Message Service</td><td>लघु संदेश सेवा (160 अक्षर)</td></tr>
      <tr><td>MMS</td><td>Multimedia Messaging Service</td><td>चित्र/वीडियो संदेश सेवा</td></tr>
      <tr><td>USSD</td><td>Unstructured Supplementary Service Data</td><td>*99# जैसे कोड — बिना इंटरनेट बैंकिंग</td></tr>
      <tr><td>IEEE</td><td>Institute of Electrical and Electronics Engineers</td><td>"आई-ट्रिपल-ई" — 802.3 (ईथरनेट), 802.11 (Wi-Fi) मानक</td></tr>
      <tr><td>ISO</td><td>International Organization for Standardization</td><td>अंतरराष्ट्रीय मानकीकरण संगठन (जिनेवा)</td></tr>
      <tr><td>ANSI</td><td>American National Standards Institute</td><td>अमेरिकी राष्ट्रीय मानक संस्थान</td></tr>
    </table>

    <h3>9. इंटरनेट एवं वेब</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>WWW</td><td>World Wide Web</td><td>विश्वव्यापी वेब — टिम बर्नर्स-ली (1989)</td></tr>
      <tr><td>W3C</td><td>World Wide Web Consortium</td><td>वेब मानक निर्धारित करने वाली संस्था</td></tr>
      <tr><td>URL</td><td>Uniform Resource Locator</td><td>वेब संसाधन का पूर्ण पता</td></tr>
      <tr><td>URI</td><td>Uniform Resource Identifier</td><td>संसाधन पहचानकर्ता (URL इसका एक प्रकार)</td></tr>
      <tr><td>HTML</td><td>HyperText Markup Language</td><td>वेब पेज बनाने की मार्कअप भाषा</td></tr>
      <tr><td>DHTML</td><td>Dynamic HyperText Markup Language</td><td>गतिशील HTML</td></tr>
      <tr><td>XHTML</td><td>Extensible HyperText Markup Language</td><td>XML नियमों वाला HTML</td></tr>
      <tr><td>XML</td><td>eXtensible Markup Language</td><td>डेटा संग्रहण/आदान-प्रदान हेतु विस्तारणीय मार्कअप भाषा (अपने टैग)</td></tr>
      <tr><td>CSS</td><td>Cascading Style Sheets</td><td>वेब पेज की रूप-सज्जा</td></tr>
      <tr><td>JSON</td><td>JavaScript Object Notation</td><td>हल्का डेटा-आदान-प्रदान प्रारूप</td></tr>
      <tr><td>AJAX</td><td>Asynchronous JavaScript and XML</td><td>पूरा पेज रीलोड किए बिना डेटा अद्यतन</td></tr>
      <tr><td>ASP</td><td>Active Server Pages</td><td>Microsoft की सर्वर-साइड तकनीक</td></tr>
      <tr><td>JSP</td><td>JavaServer Pages</td><td>जावा आधारित सर्वर-साइड तकनीक</td></tr>
      <tr><td>ISP</td><td>Internet Service Provider</td><td>इंटरनेट सेवा प्रदाता (BSNL, Jio, Airtel)</td></tr>
      <tr><td>ARPANET</td><td>Advanced Research Projects Agency Network</td><td>इंटरनेट का पूर्वज (1969, अमेरिका)</td></tr>
      <tr><td>NSFNET</td><td>National Science Foundation Network</td><td>अमेरिकी शैक्षिक नेटवर्क (1985)</td></tr>
      <tr><td>ERNET</td><td>Education and Research Network</td><td>भारत का प्रथम इंटरनेट-सदृश शैक्षिक नेटवर्क (1986)</td></tr>
      <tr><td>VSNL</td><td>Videsh Sanchar Nigam Limited</td><td>भारत में सार्वजनिक इंटरनेट (15 अगस्त 1995) प्रारंभ करने वाली कंपनी</td></tr>
      <tr><td>BSNL</td><td>Bharat Sanchar Nigam Limited</td><td>भारत संचार निगम लिमिटेड</td></tr>
      <tr><td>TRAI</td><td>Telecom Regulatory Authority of India</td><td>भारतीय दूरसंचार विनियामक प्राधिकरण</td></tr>
      <tr><td>ICANN</td><td>Internet Corporation for Assigned Names and Numbers</td><td>डोमेन नाम व IP पते का वैश्विक समन्वय</td></tr>
      <tr><td>IANA</td><td>Internet Assigned Numbers Authority</td><td>IP पते व मूल (Root) DNS का प्रबंधन</td></tr>
      <tr><td>NIXI</td><td>National Internet Exchange of India</td><td>.in डोमेन व भारतीय इंटरनेट एक्सचेंज</td></tr>
      <tr><td>TLD</td><td>Top Level Domain</td><td>शीर्ष स्तरीय डोमेन (.com, .in)</td></tr>
      <tr><td>gTLD / ccTLD</td><td>generic TLD / country code TLD</td><td>सामान्य (.com, .org) / देश कोड (.in, .uk)</td></tr>
      <tr><td>FQDN</td><td>Fully Qualified Domain Name</td><td>पूर्ण योग्य डोमेन नाम (www.example.com)</td></tr>
      <tr><td>SEO</td><td>Search Engine Optimization</td><td>सर्च इंजन अनुकूलन</td></tr>
      <tr><td>CMS</td><td>Content Management System</td><td>सामग्री प्रबंधन प्रणाली (WordPress)</td></tr>
      <tr><td>CDN</td><td>Content Delivery Network</td><td>उपयोगकर्ता के निकट सर्वरों से सामग्री पहुँचाने वाला नेटवर्क</td></tr>
      <tr><td>RSS</td><td>Really Simple Syndication</td><td>वेबसाइट की नई सामग्री की फ़ीड</td></tr>
      <tr><td>Blog</td><td>Weblog</td><td>ऑनलाइन डायरी/लेख</td></tr>
      <tr><td>E-mail</td><td>Electronic Mail</td><td>इलेक्ट्रॉनिक डाक</td></tr>
      <tr><td>CC / BCC</td><td>Carbon Copy / Blind Carbon Copy</td><td>प्रतिलिपि / गुप्त प्रतिलिपि (BCC प्राप्तकर्ता दूसरों को नहीं दिखते)</td></tr>
      <tr><td>FYI</td><td>For Your Information</td><td>आपकी जानकारी हेतु</td></tr>
      <tr><td>Fax</td><td>Facsimile</td><td>प्रतिकृति — दस्तावेज़ की फ़ोन लाइन से प्रति भेजना</td></tr>
      <tr><td>WPM</td><td>Words Per Minute</td><td>टाइपिंग गति</td></tr>
    </table>

    <h3>10. साइबर सुरक्षा</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>DoS</td><td>Denial of Service</td><td>सेवा-निषेध आक्रमण — सर्वर को अनुरोधों से ठप करना</td></tr>
      <tr><td>DDoS</td><td>Distributed Denial of Service</td><td>अनेक संक्रमित कम्प्यूटरों (बॉटनेट) से DoS</td></tr>
      <tr><td>IDS / IPS</td><td>Intrusion Detection / Prevention System</td><td>घुसपैठ पहचान / रोकथाम प्रणाली</td></tr>
      <tr><td>CAPTCHA</td><td>Completely Automated Public Turing test to tell Computers and Humans Apart</td><td>मनुष्य व बॉट में अंतर करने वाली जाँच</td></tr>
      <tr><td>OTP</td><td>One Time Password</td><td>एक बार प्रयुक्त होने वाला पासवर्ड</td></tr>
      <tr><td>PIN</td><td>Personal Identification Number</td><td>व्यक्तिगत पहचान संख्या</td></tr>
      <tr><td>2FA / MFA</td><td>Two-Factor / Multi-Factor Authentication</td><td>द्वि-कारक / बहु-कारक प्रमाणीकरण (पासवर्ड + OTP)</td></tr>
      <tr><td>PKI</td><td>Public Key Infrastructure</td><td>सार्वजनिक कुंजी अवसंरचना — डिजिटल प्रमाणपत्र</td></tr>
      <tr><td>CA</td><td>Certificate Authority</td><td>डिजिटल प्रमाणपत्र जारी करने वाला प्राधिकरण</td></tr>
      <tr><td>AES</td><td>Advanced Encryption Standard</td><td>उन्नत एन्क्रिप्शन मानक (सममित कुंजी)</td></tr>
      <tr><td>DES</td><td>Data Encryption Standard</td><td>पुराना सममित एन्क्रिप्शन मानक (56 बिट कुंजी)</td></tr>
      <tr><td>RSA</td><td>Rivest–Shamir–Adleman</td><td>तीन आविष्कारकों के नाम पर असममित (सार्वजनिक कुंजी) एल्गोरिथ्म</td></tr>
      <tr><td>SHA</td><td>Secure Hash Algorithm</td><td>सुरक्षित हैश एल्गोरिथ्म (SHA-256)</td></tr>
      <tr><td>MD5</td><td>Message Digest 5</td><td>पुराना हैश एल्गोरिथ्म (128 बिट)</td></tr>
      <tr><td>PGP</td><td>Pretty Good Privacy</td><td>ई-मेल एन्क्रिप्शन सॉफ़्टवेयर</td></tr>
      <tr><td>CIA (त्रय)</td><td>Confidentiality, Integrity, Availability</td><td>सूचना सुरक्षा के तीन स्तंभ — गोपनीयता, अखंडता, उपलब्धता</td></tr>
      <tr><td>APT</td><td>Advanced Persistent Threat</td><td>लंबे समय तक छिपा रहने वाला लक्षित साइबर हमला</td></tr>
      <tr><td>XSS</td><td>Cross-Site Scripting</td><td>वेबसाइट में दुर्भावनापूर्ण स्क्रिप्ट डालना</td></tr>
      <tr><td>MITM</td><td>Man-in-the-Middle</td><td>दो पक्षों के बीच संचार को गुप्त रूप से बीच में पकड़ना</td></tr>
      <tr><td>BYOD</td><td>Bring Your Own Device</td><td>कार्यालय में अपना उपकरण प्रयोग करने की नीति</td></tr>
      <tr><td>CISO</td><td>Chief Information Security Officer</td><td>मुख्य सूचना सुरक्षा अधिकारी</td></tr>
      <tr><td>SOC</td><td>Security Operations Centre</td><td>सुरक्षा संचालन केंद्र (SoC = System on Chip से भिन्न)</td></tr>
      <tr><td>CERT-In</td><td>Indian Computer Emergency Response Team</td><td>भारतीय कम्प्यूटर आपात प्रतिक्रिया दल (2004, MeitY)</td></tr>
      <tr><td>NCIIPC</td><td>National Critical Information Infrastructure Protection Centre</td><td>महत्त्वपूर्ण सूचना अवसंरचना की सुरक्षा (NTRO के अधीन)</td></tr>
      <tr><td>I4C</td><td>Indian Cyber Crime Coordination Centre</td><td>भारतीय साइबर अपराध समन्वय केंद्र (गृह मंत्रालय); हेल्पलाइन 1930</td></tr>
      <tr><td>DPDP</td><td>Digital Personal Data Protection (Act, 2023)</td><td>डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम</td></tr>
    </table>

    <h3>11. कोड प्रणाली एवं फ़ाइल प्रारूप</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>ASCII</td><td>American Standard Code for Information Interchange</td><td>7 बिट (128 अक्षर) कोड</td></tr>
      <tr><td>EBCDIC</td><td>Extended Binary Coded Decimal Interchange Code</td><td>8 बिट कोड — IBM मेनफ़्रेम</td></tr>
      <tr><td>BCD</td><td>Binary Coded Decimal</td><td>प्रत्येक दशमलव अंक हेतु 4 बिट</td></tr>
      <tr><td>ISCII</td><td>Indian Script Code for Information Interchange</td><td>भारतीय लिपियों हेतु 8 बिट कोड</td></tr>
      <tr><td>Unicode / UTF</td><td>Unicode Transformation Format (UTF-8, UTF-16, UTF-32)</td><td>विश्व की सभी लिपियों हेतु सार्वभौमिक कोड</td></tr>
      <tr><td>LSB / MSB</td><td>Least / Most Significant Bit</td><td>सबसे कम / अधिक स्थानीय मान वाला बिट</td></tr>
      <tr><td>RGB</td><td>Red, Green, Blue</td><td>स्क्रीन के योगात्मक मूल रंग</td></tr>
      <tr><td>CMYK</td><td>Cyan, Magenta, Yellow, Key (Black)</td><td>छपाई के व्यवकलनात्मक रंग</td></tr>
      <tr><td>JPEG</td><td>Joint Photographic Experts Group</td><td>फ़ोटो हेतु हानिपूर्ण (Lossy) संपीडन</td></tr>
      <tr><td>GIF</td><td>Graphics Interchange Format</td><td>256 रंग, सरल एनिमेशन</td></tr>
      <tr><td>PNG</td><td>Portable Network Graphics</td><td>हानिरहित (Lossless), पारदर्शिता समर्थन</td></tr>
      <tr><td>BMP</td><td>Bitmap</td><td>असंपीडित चित्र प्रारूप</td></tr>
      <tr><td>TIFF</td><td>Tagged Image File Format</td><td>उच्च गुणवत्ता छपाई/स्कैन</td></tr>
      <tr><td>SVG</td><td>Scalable Vector Graphics</td><td>वेक्टर चित्र — बड़ा करने पर धुंधला नहीं</td></tr>
      <tr><td>EPS</td><td>Encapsulated PostScript</td><td>मुद्रण हेतु वेक्टर चित्र प्रारूप</td></tr>
      <tr><td>PSD</td><td>Photoshop Document</td><td>Adobe Photoshop की परतों वाली फ़ाइल</td></tr>
      <tr><td>MPEG</td><td>Moving Picture Experts Group</td><td>वीडियो/ऑडियो संपीडन मानक</td></tr>
      <tr><td>MP3</td><td>MPEG Audio Layer III</td><td>संपीडित ऑडियो</td></tr>
      <tr><td>MP4</td><td>MPEG-4 Part 14</td><td>वीडियो कंटेनर प्रारूप</td></tr>
      <tr><td>AVI</td><td>Audio Video Interleave</td><td>Microsoft का वीडियो प्रारूप</td></tr>
      <tr><td>WAV</td><td>Waveform Audio File Format</td><td>असंपीडित ऑडियो</td></tr>
      <tr><td>WMA / WMV</td><td>Windows Media Audio / Video</td><td>Microsoft के ऑडियो/वीडियो प्रारूप</td></tr>
      <tr><td>FLAC</td><td>Free Lossless Audio Codec</td><td>हानिरहित संपीडित ऑडियो</td></tr>
      <tr><td>MIDI</td><td>Musical Instrument Digital Interface</td><td>वाद्य यंत्रों व कम्प्यूटर के बीच संगीत-संकेत</td></tr>
      <tr><td>Codec</td><td>Coder-Decoder</td><td>ऑडियो/वीडियो को संपीडित/विसंपीडित करने वाला प्रोग्राम</td></tr>
      <tr><td>Pixel</td><td>Picture Element</td><td>चित्र-तत्व — स्क्रीन का सबसे छोटा बिंदु</td></tr>
      <tr><td>Voxel</td><td>Volume Element</td><td>त्रि-आयामी पिक्सेल</td></tr>
      <tr><td>Malware</td><td>Malicious Software</td><td>दुर्भावनापूर्ण सॉफ़्टवेयर</td></tr>
      <tr><td>Bot</td><td>Robot</td><td>स्वचालित प्रोग्राम</td></tr>
    </table>

    <h3>12. ई-गवर्नेंस, डिजिटल भुगतान एवं संस्थाएँ</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>हिन्दी अर्थ / उपयोग</th></tr>
      <tr><td>NIC</td><td>National Informatics Centre</td><td>राष्ट्रीय सूचना-विज्ञान केंद्र (1976) — सरकारी वेबसाइटें, NICNET</td></tr>
      <tr><td>NeGP</td><td>National e-Governance Plan</td><td>राष्ट्रीय ई-शासन योजना (2006)</td></tr>
      <tr><td>MeitY</td><td>Ministry of Electronics and Information Technology</td><td>इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी मंत्रालय</td></tr>
      <tr><td>C-DAC</td><td>Centre for Development of Advanced Computing</td><td>प्रगत संगणन विकास केंद्र, पुणे (1988) — PARAM सुपरकम्प्यूटर</td></tr>
      <tr><td>PARAM</td><td>PARAllel Machine</td><td>भारत का सुपरकम्प्यूटर (PARAM 8000, 1991)</td></tr>
      <tr><td>NIELIT</td><td>National Institute of Electronics and Information Technology</td><td>CCC, O-Level पाठ्यक्रम संचालित करने वाली संस्था</td></tr>
      <tr><td>CCC</td><td>Course on Computer Concepts</td><td>NIELIT का मूल कम्प्यूटर साक्षरता पाठ्यक्रम</td></tr>
      <tr><td>PGDCA</td><td>Post Graduate Diploma in Computer Applications</td><td>कम्प्यूटर अनुप्रयोग में स्नातकोत्तर डिप्लोमा</td></tr>
      <tr><td>STPI</td><td>Software Technology Parks of India</td><td>भारतीय सॉफ़्टवेयर प्रौद्योगिकी पार्क</td></tr>
      <tr><td>NASSCOM</td><td>National Association of Software and Service Companies</td><td>भारतीय IT उद्योग संघ</td></tr>
      <tr><td>STQC</td><td>Standardisation Testing and Quality Certification</td><td>मानकीकरण, परीक्षण एवं गुणवत्ता प्रमाणन निदेशालय</td></tr>
      <tr><td>NKN</td><td>National Knowledge Network</td><td>शैक्षिक व शोध संस्थानों का उच्च-गति नेटवर्क</td></tr>
      <tr><td>NOFN</td><td>National Optical Fibre Network</td><td>ग्राम पंचायतों तक ऑप्टिकल फ़ाइबर (अब भारतनेट)</td></tr>
      <tr><td>CSC</td><td>Common Service Centre</td><td>सामान्य सेवा केंद्र — गाँवों में ई-सेवाएँ</td></tr>
      <tr><td>CHiPS</td><td>Chhattisgarh Infotech Promotion Society</td><td>छत्तीसगढ़ की IT/ई-गवर्नेंस नोडल संस्था (2001)</td></tr>
      <tr><td>UIDAI</td><td>Unique Identification Authority of India</td><td>भारतीय विशिष्ट पहचान प्राधिकरण — आधार</td></tr>
      <tr><td>DBT</td><td>Direct Benefit Transfer</td><td>प्रत्यक्ष लाभ अंतरण — सीधे खाते में राशि</td></tr>
      <tr><td>UMANG</td><td>Unified Mobile Application for New-age Governance</td><td>सरकारी सेवाओं का एकीकृत मोबाइल ऐप</td></tr>
      <tr><td>GeM</td><td>Government e-Marketplace</td><td>सरकारी ई-बाज़ार — सरकारी ख़रीद पोर्टल</td></tr>
      <tr><td>PFMS</td><td>Public Financial Management System</td><td>सार्वजनिक वित्तीय प्रबंधन प्रणाली</td></tr>
      <tr><td>GSTN</td><td>Goods and Services Tax Network</td><td>GST की IT अवसंरचना</td></tr>
      <tr><td>CPGRAMS</td><td>Centralised Public Grievance Redress and Monitoring System</td><td>केंद्रीकृत लोक शिकायत निवारण पोर्टल</td></tr>
      <tr><td>CCTNS</td><td>Crime and Criminal Tracking Network and Systems</td><td>अपराध एवं अपराधी ट्रैकिंग नेटवर्क (पुलिस)</td></tr>
      <tr><td>ONDC</td><td>Open Network for Digital Commerce</td><td>डिजिटल वाणिज्य हेतु खुला नेटवर्क</td></tr>
      <tr><td>DPI (शासन)</td><td>Digital Public Infrastructure</td><td>डिजिटल सार्वजनिक अवसंरचना (आधार, UPI, डिजिलॉकर)</td></tr>
      <tr><td>NDLI</td><td>National Digital Library of India</td><td>राष्ट्रीय डिजिटल पुस्तकालय</td></tr>
      <tr><td>SWAYAM</td><td>Study Webs of Active-Learning for Young Aspiring Minds</td><td>सरकारी MOOC मंच</td></tr>
      <tr><td>DIKSHA</td><td>Digital Infrastructure for Knowledge Sharing</td><td>स्कूली शिक्षकों/छात्रों का डिजिटल मंच</td></tr>
      <tr><td>MOOC</td><td>Massive Open Online Course</td><td>विशाल मुक्त ऑनलाइन पाठ्यक्रम</td></tr>
      <tr><td>PMGDISHA</td><td>Pradhan Mantri Gramin Digital Saksharta Abhiyan</td><td>प्रधानमंत्री ग्रामीण डिजिटल साक्षरता अभियान</td></tr>
      <tr><td>UPI</td><td>Unified Payments Interface</td><td>एकीकृत भुगतान अंतरापृष्ठ (2016, NPCI)</td></tr>
      <tr><td>NPCI</td><td>National Payments Corporation of India</td><td>भारतीय राष्ट्रीय भुगतान निगम — UPI, RuPay, IMPS</td></tr>
      <tr><td>BHIM</td><td>Bharat Interface for Money</td><td>NPCI का UPI ऐप</td></tr>
      <tr><td>IMPS</td><td>Immediate Payment Service</td><td>तत्काल भुगतान सेवा — 24×7</td></tr>
      <tr><td>NEFT</td><td>National Electronic Funds Transfer</td><td>राष्ट्रीय इलेक्ट्रॉनिक निधि अंतरण</td></tr>
      <tr><td>RTGS</td><td>Real Time Gross Settlement</td><td>तत्क्षण सकल निपटान — न्यूनतम 2 लाख रुपये</td></tr>
      <tr><td>AePS</td><td>Aadhaar enabled Payment System</td><td>आधार व बायोमेट्रिक से बैंक लेन-देन</td></tr>
      <tr><td>NACH</td><td>National Automated Clearing House</td><td>बार-बार होने वाले भुगतान (EMI, वेतन) का स्वचालित निपटान</td></tr>
      <tr><td>IFSC</td><td>Indian Financial System Code</td><td>बैंक शाखा का 11 अक्षरीय कोड</td></tr>
      <tr><td>KYC</td><td>Know Your Customer</td><td>अपने ग्राहक को जानें — पहचान सत्यापन</td></tr>
      <tr><td>PAN (कर)</td><td>Permanent Account Number</td><td>स्थायी खाता संख्या (10 अक्षरीय, आयकर विभाग)</td></tr>
      <tr><td>IRCTC</td><td>Indian Railway Catering and Tourism Corporation</td><td>ऑनलाइन रेल टिकट</td></tr>
      <tr><td>G2C / G2B / G2G / G2E</td><td>Government to Citizen / Business / Government / Employee</td><td>ई-गवर्नेंस के मॉडल</td></tr>
      <tr><td>B2B / B2C / C2C</td><td>Business to Business / Business to Consumer / Consumer to Consumer</td><td>ई-कॉमर्स के मॉडल (C2C — OLX)</td></tr>
    </table>

    <h3>13. कम्प्यूटर इतिहास व कंपनियाँ</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>पूर्ण रूप</th><th>टिप्पणी</th></tr>
      <tr><td>ENIAC</td><td>Electronic Numerical Integrator And Computer</td><td>प्रथम सामान्य-उद्देश्य इलेक्ट्रॉनिक डिजिटल कम्प्यूटर (1946)</td></tr>
      <tr><td>EDVAC</td><td>Electronic Discrete Variable Automatic Computer</td><td>संग्रहित-प्रोग्राम अवधारणा (वॉन न्यूमैन)</td></tr>
      <tr><td>EDSAC</td><td>Electronic Delay Storage Automatic Calculator</td><td>प्रथम व्यावहारिक संग्रहित-प्रोग्राम कम्प्यूटर (1949, कैम्ब्रिज)</td></tr>
      <tr><td>UNIVAC</td><td>Universal Automatic Computer</td><td>प्रथम व्यावसायिक कम्प्यूटर (अमेरिका, 1951)</td></tr>
      <tr><td>IBM</td><td>International Business Machines</td><td>"बिग ब्लू" — अमेरिकी कंपनी</td></tr>
      <tr><td>HP</td><td>Hewlett-Packard</td><td>संस्थापकों के उपनाम पर</td></tr>
      <tr><td>AMD</td><td>Advanced Micro Devices</td><td>प्रोसेसर निर्माता (Ryzen)</td></tr>
      <tr><td>Intel</td><td>Integrated Electronics</td><td>प्रथम व्यावसायिक माइक्रोप्रोसेसर Intel 4004 (1971)</td></tr>
      <tr><td>LASER</td><td>Light Amplification by Stimulated Emission of Radiation</td><td>लेज़र प्रिंटर, CD/DVD</td></tr>
    </table>

    <h3>14. कम्प्यूटर शब्दावली (Glossary) — 150+ शब्द</h3>
    <h4>(क) सिस्टम, हार्डवेयर व मेमोरी</h4>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>बूटिंग (Booting)</td><td>कम्प्यूटर चालू होने पर BIOS/UEFI द्वारा POST कर ऑपरेटिंग सिस्टम को RAM में लोड करने की प्रक्रिया। <b>कोल्ड बूट</b> = बंद से चालू करना; <b>वार्म बूट</b> = रीस्टार्ट (Ctrl+Alt+Del)।</td></tr>
      <tr><td>बूटस्ट्रैप लोडर (Bootstrap Loader)</td><td>ROM में स्थित छोटा प्रोग्राम जो OS लोड करना शुरू करता है।</td></tr>
      <tr><td>फ़र्मवेयर (Firmware)</td><td>हार्डवेयर में स्थायी रूप से (ROM/फ़्लैश) लिखा सॉफ़्टवेयर, जैसे BIOS — हार्डवेयर व सॉफ़्टवेयर के बीच की कड़ी।</td></tr>
      <tr><td>ड्राइवर (Device Driver)</td><td>वह सिस्टम सॉफ़्टवेयर जो OS को किसी विशेष हार्डवेयर (प्रिंटर, ग्राफ़िक्स कार्ड) से संवाद करना सिखाता है।</td></tr>
      <tr><td>कैश मेमोरी (Cache)</td><td>CPU व RAM के बीच अति-तीव्र, छोटी SRAM मेमोरी; बार-बार प्रयुक्त डेटा रखती है (L1 &gt; L2 &gt; L3 गति)। <b>कैश हिट</b> = डेटा कैश में मिला; <b>कैश मिस</b> = नहीं मिला।</td></tr>
      <tr><td>बफ़र (Buffer)</td><td>दो उपकरणों/प्रक्रियाओं की गति के अंतर को संतुलित करने हेतु डेटा का अस्थायी भंडार (जैसे वीडियो बफ़रिंग, प्रिंटर बफ़र)।</td></tr>
      <tr><td>स्पूलिंग (Spooling)</td><td>धीमे उपकरण (प्रिंटर) हेतु कार्यों को डिस्क पर कतार में रखना ताकि CPU दूसरे कार्य कर सके।</td></tr>
      <tr><td>रजिस्टर (Register)</td><td>CPU के भीतर सबसे तेज़ व सबसे छोटी मेमोरी।</td></tr>
      <tr><td>मेमोरी पदानुक्रम</td><td>गति के घटते क्रम में: रजिस्टर → कैश → RAM → SSD/HDD → ऑप्टिकल/टेप।</td></tr>
      <tr><td>वोलेटाइल (Volatile)</td><td>बिजली जाने पर डेटा मिट जाना (RAM, कैश); नॉन-वोलेटाइल = डेटा बना रहे (ROM, SSD)।</td></tr>
      <tr><td>वर्चुअल मेमोरी (Virtual Memory)</td><td>RAM कम पड़ने पर हार्ड डिस्क के भाग (पेज फ़ाइल/स्वैप) को RAM की तरह प्रयोग करना।</td></tr>
      <tr><td>पेजिंग (Paging)</td><td>मेमोरी को समान आकार के पृष्ठों में बाँटकर RAM व डिस्क के बीच अदला-बदली।</td></tr>
      <tr><td>थ्रैशिंग (Thrashing)</td><td>अत्यधिक पेजिंग से कम्प्यूटर का अधिकांश समय अदला-बदली में व्यर्थ होना।</td></tr>
      <tr><td>क्लॉक स्पीड (Clock Speed)</td><td>CPU द्वारा प्रति सेकंड चक्रों की संख्या — GHz में।</td></tr>
      <tr><td>कोर (Core)</td><td>CPU के भीतर स्वतंत्र प्रसंस्करण इकाई (डुअल-कोर, क्वाड-कोर)।</td></tr>
      <tr><td>थ्रेड (Thread)</td><td>किसी प्रोसेस के भीतर निष्पादन की सबसे छोटी इकाई।</td></tr>
      <tr><td>प्रोसेस (Process)</td><td>निष्पादन में चल रहा प्रोग्राम।</td></tr>
      <tr><td>इंटरप्ट (Interrupt)</td><td>किसी उपकरण/प्रोग्राम द्वारा CPU को तुरंत ध्यान देने हेतु भेजा गया संकेत।</td></tr>
      <tr><td>बस (Bus)</td><td>भागों को जोड़ने वाले तारों का समूह — <b>डेटा बस</b> (द्वि-दिशात्मक), <b>एड्रेस बस</b> (एक-दिशात्मक), <b>कंट्रोल बस</b>।</td></tr>
      <tr><td>वर्ड साइज़ (Word Size)</td><td>CPU एक बार में जितने बिट संसाधित करे (32 बिट, 64 बिट)।</td></tr>
      <tr><td>मदरबोर्ड (Motherboard)</td><td>कम्प्यूटर का मुख्य परिपथ बोर्ड जिस पर CPU, RAM, स्लॉट लगे होते हैं।</td></tr>
      <tr><td>चिपसेट (Chipset)</td><td>मदरबोर्ड पर CPU, मेमोरी व उपकरणों के बीच डेटा-प्रवाह नियंत्रित करने वाली चिपें।</td></tr>
      <tr><td>हीट सिंक (Heat Sink)</td><td>CPU की ऊष्मा बाहर निकालने वाली धातु की संरचना।</td></tr>
      <tr><td>पोर्ट (Port)</td><td>बाह्य उपकरण जोड़ने का संयोजन बिंदु (हार्डवेयर); नेटवर्क में सेवा की संख्या (HTTP = 80)।</td></tr>
      <tr><td>पेरिफ़ेरल (Peripheral)</td><td>CPU से बाहर जुड़े उपकरण — कीबोर्ड, माउस, प्रिंटर।</td></tr>
      <tr><td>प्लग एंड प्ले (Plug and Play)</td><td>उपकरण जोड़ते ही OS द्वारा स्वतः पहचान व स्थापना।</td></tr>
      <tr><td>हॉट स्वैपिंग (Hot Swapping)</td><td>कम्प्यूटर बंद किए बिना उपकरण निकालना/लगाना (USB)।</td></tr>
      <tr><td>पिक्सेल (Pixel)</td><td>Picture Element — डिजिटल चित्र/स्क्रीन का सबसे छोटा बिंदु।</td></tr>
      <tr><td>रेज़ोल्यूशन (Resolution)</td><td>स्क्रीन/चित्र में पिक्सेलों की संख्या (1920×1080); जितनी अधिक, चित्र उतना स्पष्ट।</td></tr>
      <tr><td>रिफ़्रेश रेट (Refresh Rate)</td><td>स्क्रीन प्रति सेकंड कितनी बार चित्र पुनः बनाती है — हर्ट्ज़ (60 Hz, 120 Hz)।</td></tr>
      <tr><td>फ़्रेम रेट (Frame Rate)</td><td>वीडियो में प्रति सेकंड फ़्रेम की संख्या — fps (Frames Per Second)।</td></tr>
      <tr><td>आस्पेक्ट रेशियो (Aspect Ratio)</td><td>स्क्रीन की चौड़ाई व ऊँचाई का अनुपात (16:9, 4:3)।</td></tr>
      <tr><td>ट्रैक, सेक्टर, क्लस्टर</td><td>डिस्क पर संकेंद्री वृत्त = ट्रैक; ट्रैक का भाग = सेक्टर (प्रायः 512 बाइट); सेक्टरों का समूह = क्लस्टर।</td></tr>
      <tr><td>सीक टाइम (Seek Time)</td><td>हार्ड डिस्क के हेड को सही ट्रैक तक पहुँचने में लगा समय।</td></tr>
      <tr><td>रोटेशनल लेटेंसी</td><td>सही सेक्टर के हेड के नीचे घूमकर आने में लगा समय। एक्सेस टाइम = सीक टाइम + रोटेशनल लेटेंसी।</td></tr>
      <tr><td>फ़ॉर्मेटिंग (Formatting)</td><td>डिस्क को फ़ाइल सिस्टम सहित उपयोग हेतु तैयार करना (पुराना डेटा मिट जाता है)।</td></tr>
      <tr><td>पार्टिशन (Partition)</td><td>एक भौतिक डिस्क को कई तार्किक ड्राइव (C:, D:) में बाँटना।</td></tr>
      <tr><td>फ़्रैग्मेंटेशन (Fragmentation)</td><td>फ़ाइल के टुकड़ों का डिस्क पर बिखर जाना जिससे गति घटे।</td></tr>
      <tr><td>डीफ़्रैग्मेंटेशन (Defragmentation)</td><td>बिखरे टुकड़ों को पास-पास जमाना (HDD हेतु; SSD में आवश्यक नहीं)।</td></tr>
      <tr><td>बैकअप / रिस्टोर</td><td>डेटा की अतिरिक्त प्रति बनाना / उस प्रति से डेटा वापस लाना।</td></tr>
      <tr><td>एम्बेडेड सिस्टम (Embedded System)</td><td>किसी उपकरण के भीतर विशेष कार्य हेतु लगा कम्प्यूटर (वॉशिंग मशीन, ATM)।</td></tr>
      <tr><td>सुपरकम्प्यूटर</td><td>सबसे तेज़ कम्प्यूटर — गति FLOPS में; मौसम पूर्वानुमान, अनुसंधान।</td></tr>
      <tr><td>हाइबरनेट (Hibernate)</td><td>खुली सामग्री हार्ड डिस्क पर सहेजकर कम्प्यूटर पूर्णतः बंद करना।</td></tr>
      <tr><td>स्लीप (Sleep)</td><td>कम बिजली की अवस्था, सामग्री RAM में रहती है — तुरंत पुनः आरंभ।</td></tr>
    </table>

    <h4>(ख) सॉफ़्टवेयर, ऑपरेटिंग सिस्टम व प्रोग्रामिंग</h4>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>कर्नेल (Kernel)</td><td>ऑपरेटिंग सिस्टम का केंद्रीय भाग — मेमोरी, प्रोसेस व हार्डवेयर का प्रबंधन।</td></tr>
      <tr><td>शेल (Shell)</td><td>उपयोगकर्ता व कर्नेल के बीच कमांड-अंतरापृष्ठ।</td></tr>
      <tr><td>मल्टीटास्किंग (Multitasking)</td><td>एक उपयोगकर्ता द्वारा एक साथ कई कार्य चलाना।</td></tr>
      <tr><td>मल्टीप्रोग्रामिंग</td><td>कई प्रोग्राम मेमोरी में रखकर CPU को खाली न रहने देना।</td></tr>
      <tr><td>मल्टीप्रोसेसिंग</td><td>एक से अधिक CPU/प्रोसेसर से एक साथ प्रसंस्करण।</td></tr>
      <tr><td>टाइम शेयरिंग (Time Sharing)</td><td>CPU का समय छोटे-छोटे भागों (Time Slice) में कई उपयोगकर्ताओं में बाँटना।</td></tr>
      <tr><td>बैच प्रोसेसिंग (Batch Processing)</td><td>समान कार्यों को समूह बनाकर बिना उपयोगकर्ता हस्तक्षेप के एक साथ संसाधित करना (वेतन-पत्रक)।</td></tr>
      <tr><td>रियल टाइम सिस्टम</td><td>निश्चित समय-सीमा में तुरंत प्रतिक्रिया देने वाली प्रणाली (मिसाइल, विमान नियंत्रण)।</td></tr>
      <tr><td>डेडलॉक (Deadlock)</td><td>दो या अधिक प्रक्रियाएँ एक-दूसरे के संसाधन की प्रतीक्षा में अनिश्चितकाल तक रुकी रहें।</td></tr>
      <tr><td>कम्पाइलर (Compiler)</td><td>पूरे उच्च-स्तरीय प्रोग्राम को एक बार में मशीनी भाषा में बदलने वाला अनुवादक।</td></tr>
      <tr><td>इंटरप्रेटर (Interpreter)</td><td>प्रोग्राम को पंक्ति-दर-पंक्ति अनुवादित कर चलाने वाला (Python)।</td></tr>
      <tr><td>असेंबलर (Assembler)</td><td>असेंबली भाषा को मशीनी भाषा में बदलने वाला।</td></tr>
      <tr><td>लिंकर / लोडर</td><td>लिंकर = कई ऑब्जेक्ट फ़ाइलें जोड़कर एक निष्पाद्य फ़ाइल बनाना; लोडर = प्रोग्राम को मेमोरी में लाना।</td></tr>
      <tr><td>सोर्स कोड / ऑब्जेक्ट कोड</td><td>प्रोग्रामर द्वारा लिखा कोड / अनुवाद के बाद बना मशीनी कोड।</td></tr>
      <tr><td>एल्गोरिथ्म (Algorithm)</td><td>किसी समस्या को हल करने के क्रमबद्ध, सीमित चरण।</td></tr>
      <tr><td>फ़्लोचार्ट (Flowchart)</td><td>एल्गोरिथ्म का चित्रात्मक निरूपण (अंडाकार = प्रारंभ/अंत, समचतुर्भुज = निर्णय)।</td></tr>
      <tr><td>स्यूडोकोड (Pseudocode)</td><td>साधारण भाषा जैसा, प्रोग्राम का अनौपचारिक विवरण।</td></tr>
      <tr><td>बग / डिबगिंग</td><td>प्रोग्राम में त्रुटि / त्रुटि खोजकर दूर करना। "बग" शब्द ग्रेस हॉपर से जुड़ा है।</td></tr>
      <tr><td>सिंटैक्स एरर</td><td>भाषा के व्याकरण-नियम तोड़ने की त्रुटि — कम्पाइलर पकड़ लेता है।</td></tr>
      <tr><td>लॉजिकल एरर</td><td>प्रोग्राम चलता है पर गलत परिणाम देता है — सबसे कठिन से पकड़ में आती है।</td></tr>
      <tr><td>रन-टाइम एरर</td><td>चलते समय होने वाली त्रुटि (जैसे शून्य से भाग)।</td></tr>
      <tr><td>पैच (Patch) / अपडेट</td><td>सॉफ़्टवेयर की त्रुटि या सुरक्षा-छिद्र ठीक करने वाला छोटा सुधार-प्रोग्राम।</td></tr>
      <tr><td>बीटा वर्ज़न (Beta)</td><td>सार्वजनिक परीक्षण हेतु जारी अधूरा संस्करण।</td></tr>
      <tr><td>फ़्रीवेयर (Freeware)</td><td>निःशुल्क सॉफ़्टवेयर पर स्रोत कोड प्रायः उपलब्ध नहीं।</td></tr>
      <tr><td>शेयरवेयर (Shareware)</td><td>सीमित समय/सुविधा के लिए निःशुल्क परीक्षण, बाद में भुगतान।</td></tr>
      <tr><td>ओपन सोर्स (Open Source)</td><td>स्रोत कोड सबके लिए उपलब्ध, संशोधन की अनुमति (Linux)।</td></tr>
      <tr><td>प्रोप्राइटरी (Proprietary)</td><td>कंपनी के स्वामित्व वाला बंद-स्रोत सॉफ़्टवेयर (MS Windows)।</td></tr>
      <tr><td>प्लगइन / एक्सटेंशन</td><td>किसी सॉफ़्टवेयर/ब्राउज़र में नई सुविधा जोड़ने वाला छोटा प्रोग्राम।</td></tr>
      <tr><td>एमुलेटर (Emulator)</td><td>एक प्रणाली पर दूसरी प्रणाली के व्यवहार की नकल करने वाला सॉफ़्टवेयर।</td></tr>
      <tr><td>वर्चुअलाइज़ेशन</td><td>एक भौतिक मशीन पर कई आभासी मशीनें चलाना।</td></tr>
      <tr><td>यूटिलिटी सॉफ़्टवेयर</td><td>रख-रखाव हेतु सिस्टम सॉफ़्टवेयर — एंटीवायरस, डिस्क क्लीनअप, बैकअप।</td></tr>
      <tr><td>फ़ाइल एक्सटेंशन</td><td>फ़ाइल नाम में बिंदु के बाद का भाग जो प्रकार बताता है (.docx, .exe)।</td></tr>
      <tr><td>डायरेक्टरी / फ़ोल्डर</td><td>फ़ाइलों को व्यवस्थित रखने का पात्र; सबसे ऊपरी = रूट डायरेक्टरी।</td></tr>
      <tr><td>पाथ (Path)</td><td>फ़ाइल का पूरा स्थान-पता (C:\Users\Documents\a.txt)।</td></tr>
      <tr><td>क्लिपबोर्ड (Clipboard)</td><td>कॉपी/कट की गई सामग्री का अस्थायी भंडार (RAM में)।</td></tr>
      <tr><td>शॉर्टकट (Shortcut)</td><td>किसी फ़ाइल/प्रोग्राम तक पहुँचने का संकेतक आइकन (तीर-चिह्न सहित)।</td></tr>
      <tr><td>ड्रैग एंड ड्रॉप</td><td>माउस से वस्तु पकड़कर दूसरे स्थान पर छोड़ना।</td></tr>
      <tr><td>डेस्कटॉप / आइकन / टास्कबार</td><td>मुख्य स्क्रीन / छोटा चित्र-प्रतीक / नीचे की पट्टी जिसमें स्टार्ट बटन व खुले प्रोग्राम।</td></tr>
      <tr><td>मैक्रो (Macro)</td><td>बार-बार होने वाले कार्यों की रिकॉर्ड की गई श्रृंखला जो एक कमांड से चले।</td></tr>
      <tr><td>टेम्पलेट (Template)</td><td>पूर्व-निर्मित प्रारूप जिस पर नया दस्तावेज़ बनाया जाए।</td></tr>
      <tr><td>मेल मर्ज (Mail Merge)</td><td>एक पत्र को अनेक प्राप्तकर्ताओं के नाम-पते के साथ स्वतः अनेक प्रतियों में बनाना।</td></tr>
      <tr><td>वॉटरमार्क</td><td>पृष्ठ की पृष्ठभूमि में हल्का पाठ/चित्र ("CONFIDENTIAL")।</td></tr>
      <tr><td>हेडर / फ़ुटर</td><td>प्रत्येक पृष्ठ के ऊपर / नीचे दोहराया जाने वाला भाग।</td></tr>
      <tr><td>फ़ॉन्ट (Font)</td><td>अक्षरों की आकृति-शैली (Arial, Mangal)।</td></tr>
      <tr><td>स्प्रेडशीट / सेल</td><td>पंक्ति-स्तंभ वाली तालिका-प्रोग्राम / पंक्ति व स्तंभ का प्रतिच्छेद (A1)।</td></tr>
      <tr><td>फ़ॉर्मूला / फ़ंक्शन</td><td>"=" से आरंभ गणना / पूर्व-निर्मित सूत्र (SUM, AVERAGE)।</td></tr>
      <tr><td>स्लाइड / ट्रांज़िशन / एनिमेशन</td><td>प्रस्तुति का एक पृष्ठ / स्लाइड बदलने का प्रभाव / स्लाइड के भीतर वस्तु का प्रभाव।</td></tr>
      <tr><td>कम्प्रेशन (Compression)</td><td>फ़ाइल का आकार घटाना — <b>लॉसी</b> (कुछ डेटा नष्ट: JPEG, MP3) व <b>लॉसलेस</b> (कोई हानि नहीं: ZIP, PNG)।</td></tr>
      <tr><td>एन्कोडिंग (Encoding)</td><td>डेटा को किसी निश्चित कोड-प्रारूप में बदलना (UTF-8)।</td></tr>
      <tr><td>पैरिटी बिट (Parity Bit)</td><td>त्रुटि-जाँच हेतु जोड़ा गया अतिरिक्त बिट (सम/विषम पैरिटी)।</td></tr>
      <tr><td>चेकसम (Checksum)</td><td>डेटा की अखंडता जाँचने हेतु गणना किया गया मान।</td></tr>
      <tr><td>ओवरफ़्लो (Overflow)</td><td>परिणाम का संग्रहण-सीमा से बड़ा हो जाना।</td></tr>
    </table>

    <h4>(ग) डेटा व डेटाबेस</h4>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>डेटा (Data)</td><td>कच्चे, असंसाधित तथ्य व आँकड़े।</td></tr>
      <tr><td>सूचना (Information)</td><td>संसाधित, अर्थपूर्ण डेटा।</td></tr>
      <tr><td>डेटाबेस (Database)</td><td>व्यवस्थित रूप से संग्रहित परस्पर संबंधित डेटा का संग्रह।</td></tr>
      <tr><td>रिकॉर्ड / फ़ील्ड</td><td>तालिका की एक पंक्ति (Tuple) / एक स्तंभ (Attribute)।</td></tr>
      <tr><td>प्राइमरी की (Primary Key)</td><td>प्रत्येक रिकॉर्ड को अद्वितीय रूप से पहचानने वाला फ़ील्ड — रिक्त (NULL) या दोहराव नहीं।</td></tr>
      <tr><td>फ़ॉरेन की (Foreign Key)</td><td>एक तालिका का फ़ील्ड जो दूसरी तालिका की प्राइमरी की को संदर्भित करे।</td></tr>
      <tr><td>क्वेरी (Query)</td><td>डेटाबेस से विशेष डेटा माँगने का प्रश्न/आदेश।</td></tr>
      <tr><td>नॉर्मलाइज़ेशन</td><td>डेटा की पुनरावृत्ति (Redundancy) कम करने हेतु तालिकाओं को व्यवस्थित करना।</td></tr>
      <tr><td>डेटा माइनिंग</td><td>विशाल डेटा से छिपे पैटर्न/ज्ञान निकालना।</td></tr>
      <tr><td>डेटा वेयरहाउस</td><td>विश्लेषण हेतु विभिन्न स्रोतों का एकीकृत, ऐतिहासिक डेटा-भंडार।</td></tr>
      <tr><td>बिग डेटा (Big Data)</td><td>अत्यधिक मात्रा, गति व विविधता (3V — Volume, Velocity, Variety) वाला डेटा।</td></tr>
      <tr><td>मेटाडेटा (Metadata)</td><td>डेटा के बारे में डेटा (फ़ाइल का आकार, बनने की तिथि, लेखक)।</td></tr>
      <tr><td>डिजिटाइज़ेशन</td><td>भौतिक दस्तावेज़/सूचना को डिजिटल रूप में बदलना।</td></tr>
    </table>

    <h4>(घ) इंटरनेट व नेटवर्किंग</h4>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>बैंडविड्थ (Bandwidth)</td><td>किसी चैनल की एक सेकंड में अधिकतम डेटा-वहन क्षमता (bps)।</td></tr>
      <tr><td>लेटेंसी (Latency)</td><td>डेटा के स्रोत से गंतव्य तक पहुँचने में लगा विलंब (मिलीसेकंड, ping)।</td></tr>
      <tr><td>थ्रूपुट (Throughput)</td><td>वास्तविक रूप से सफलतापूर्वक स्थानांतरित डेटा की दर।</td></tr>
      <tr><td>प्रोटोकॉल (Protocol)</td><td>नेटवर्क में संचार के नियमों का समूह।</td></tr>
      <tr><td>टोपोलॉजी (Topology)</td><td>नेटवर्क में उपकरणों की भौतिक/तार्किक व्यवस्था — बस, स्टार, रिंग, मेश, ट्री।</td></tr>
      <tr><td>नोड (Node)</td><td>नेटवर्क से जुड़ा प्रत्येक उपकरण।</td></tr>
      <tr><td>पैकेट (Packet)</td><td>नेटवर्क में भेजी जाने वाली डेटा की छोटी इकाई।</td></tr>
      <tr><td>सर्वर / क्लाइंट</td><td>सेवा देने वाला कम्प्यूटर / सेवा माँगने वाला कम्प्यूटर।</td></tr>
      <tr><td>हब (Hub)</td><td>प्राप्त डेटा सभी पोर्टों पर भेजने वाला सरल उपकरण (भौतिक परत)।</td></tr>
      <tr><td>स्विच (Switch)</td><td>MAC पते से डेटा केवल सही पोर्ट पर भेजने वाला (डेटा लिंक परत)।</td></tr>
      <tr><td>राउटर (Router)</td><td>IP पते के आधार पर विभिन्न नेटवर्कों के बीच पैकेट को मार्ग देने वाला (नेटवर्क परत)।</td></tr>
      <tr><td>ब्रिज (Bridge)</td><td>एक ही प्रकार के दो LAN खंडों को जोड़ने वाला।</td></tr>
      <tr><td>गेटवे (Gateway)</td><td>भिन्न प्रोटोकॉल वाले नेटवर्कों को जोड़ने वाला "प्रवेश द्वार"।</td></tr>
      <tr><td>रिपीटर (Repeater)</td><td>कमज़ोर संकेत को पुनः प्रबल कर आगे भेजने वाला।</td></tr>
      <tr><td>IP पता (IP Address)</td><td>नेटवर्क में प्रत्येक उपकरण का तार्किक पता (IPv4 = 32 बिट)।</td></tr>
      <tr><td>डोमेन नेम (Domain Name)</td><td>IP पते का याद रखने योग्य नाम (google.com)।</td></tr>
      <tr><td>हाइपरटेक्स्ट / हाइपरलिंक</td><td>लिंकयुक्त पाठ / क्लिक करने पर दूसरे पेज/स्थान पर ले जाने वाला संपर्क।</td></tr>
      <tr><td>वेब पेज / वेबसाइट / होम पेज</td><td>एक HTML दस्तावेज़ / संबंधित वेब पेजों का समूह / वेबसाइट का प्रथम (मुख्य) पेज।</td></tr>
      <tr><td>वेब ब्राउज़र</td><td>वेब पेज देखने का सॉफ़्टवेयर (Chrome, Firefox, Edge)।</td></tr>
      <tr><td>सर्च इंजन</td><td>इंटरनेट पर सूचना खोजने वाली वेबसाइट (Google, Bing)।</td></tr>
      <tr><td>कुकी (Cookie)</td><td>वेबसाइट द्वारा उपयोगकर्ता के ब्राउज़र में रखी छोटी पाठ-फ़ाइल — लॉगिन, पसंद याद रखने हेतु।</td></tr>
      <tr><td>कैश (ब्राउज़र)</td><td>देखे गए पेजों की अस्थायी प्रतियाँ ताकि अगली बार जल्दी खुलें।</td></tr>
      <tr><td>डाउनलोड / अपलोड</td><td>इंटरनेट से अपने कम्प्यूटर में लाना / अपने कम्प्यूटर से सर्वर पर भेजना।</td></tr>
      <tr><td>स्ट्रीमिंग (Streaming)</td><td>पूरी फ़ाइल डाउनलोड किए बिना साथ-साथ ऑडियो/वीडियो चलाना।</td></tr>
      <tr><td>प्रॉक्सी सर्वर</td><td>उपयोगकर्ता व इंटरनेट के बीच मध्यस्थ सर्वर।</td></tr>
      <tr><td>क्लाउड कम्प्यूटिंग</td><td>इंटरनेट पर माँग के अनुसार सर्वर, भंडारण, सॉफ़्टवेयर सेवा के रूप में लेना (Google Drive)।</td></tr>
      <tr><td>एज कम्प्यूटिंग</td><td>डेटा को स्रोत के पास (दूर क्लाउड के बजाय) संसाधित करना — कम लेटेंसी।</td></tr>
      <tr><td>इंट्रानेट / एक्स्ट्रानेट</td><td>संस्था का निजी आंतरिक नेटवर्क / बाहरी अधिकृत लोगों तक बढ़ाया गया इंट्रानेट।</td></tr>
      <tr><td>डार्क वेब</td><td>विशेष सॉफ़्टवेयर (जैसे Tor) से ही खुलने वाला छिपा इंटरनेट भाग।</td></tr>
      <tr><td>ब्लॉग / वेबिनार</td><td>ऑनलाइन लेख-डायरी / वेब पर आयोजित सेमिनार।</td></tr>
      <tr><td>ई-कॉमर्स</td><td>इंटरनेट पर वस्तुओं/सेवाओं का क्रय-विक्रय।</td></tr>
      <tr><td>चैटबॉट (Chatbot)</td><td>मनुष्य से बातचीत करने वाला AI प्रोग्राम।</td></tr>
      <tr><td>डिजिटल फ़ुटप्रिंट</td><td>इंटरनेट पर व्यक्ति की गतिविधियों के छूटे निशान।</td></tr>
      <tr><td>पॉप-अप (Pop-up)</td><td>वेब पेज पर अचानक खुलने वाली छोटी विंडो।</td></tr>
      <tr><td>ब्लॉकचेन (Blockchain)</td><td>ब्लॉकों की श्रृंखला के रूप में वितरित, अपरिवर्तनीय डिजिटल बही-खाता।</td></tr>
      <tr><td>क्रिप्टोकरेंसी</td><td>ब्लॉकचेन आधारित आभासी मुद्रा (Bitcoin)।</td></tr>
      <tr><td>क्वांटम कम्प्यूटिंग</td><td>क्यूबिट (Qubit) का प्रयोग — 0 और 1 दोनों अवस्थाओं में एक साथ (अध्यारोपण)।</td></tr>
    </table>

    <h4>(ङ) साइबर सुरक्षा</h4>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>फ़ायरवॉल (Firewall)</td><td>नियमों के आधार पर आने-जाने वाले नेटवर्क ट्रैफ़िक को अनुमति/रोक देने वाली सुरक्षा दीवार (हार्डवेयर या सॉफ़्टवेयर)।</td></tr>
      <tr><td>एन्क्रिप्शन (Encryption)</td><td>सादे पाठ (Plaintext) को कुंजी द्वारा अपठनीय कूट-पाठ (Ciphertext) में बदलना।</td></tr>
      <tr><td>डिक्रिप्शन (Decryption)</td><td>कूट-पाठ को वापस सादे पाठ में बदलना।</td></tr>
      <tr><td>सममित / असममित एन्क्रिप्शन</td><td>एक ही कुंजी (AES) / सार्वजनिक व निजी कुंजी का जोड़ा (RSA)।</td></tr>
      <tr><td>हैशिंग (Hashing)</td><td>डेटा से निश्चित लंबाई का एक-तरफ़ा मान बनाना (वापस नहीं बदला जा सकता)।</td></tr>
      <tr><td>डिजिटल सिग्नेचर</td><td>इलेक्ट्रॉनिक दस्तावेज़ की प्रामाणिकता व अखंडता सिद्ध करने वाला कूट-हस्ताक्षर।</td></tr>
      <tr><td>डिजिटल सर्टिफ़िकेट</td><td>CA द्वारा जारी, सार्वजनिक कुंजी को पहचान से जोड़ने वाला प्रमाणपत्र।</td></tr>
      <tr><td>बायोमेट्रिक</td><td>अंगुली-छाप, आइरिस, चेहरे से पहचान।</td></tr>
      <tr><td>मैलवेयर (Malware)</td><td>हानि पहुँचाने वाला कोई भी सॉफ़्टवेयर — वायरस, वर्म, ट्रोजन आदि।</td></tr>
      <tr><td>वायरस (Virus)</td><td>किसी होस्ट फ़ाइल से जुड़कर फैलने वाला, सक्रिय होने हेतु उपयोगकर्ता क्रिया आवश्यक।</td></tr>
      <tr><td>वर्म (Worm)</td><td>बिना होस्ट फ़ाइल के, नेटवर्क से स्वयं प्रतिलिपि बनाकर फैलने वाला।</td></tr>
      <tr><td>ट्रोजन हॉर्स</td><td>उपयोगी प्रोग्राम के रूप में छिपा हानिकारक प्रोग्राम — स्वयं प्रतिलिपि नहीं बनाता।</td></tr>
      <tr><td>रैनसमवेयर</td><td>फ़ाइलें एन्क्रिप्ट कर फिरौती माँगने वाला (WannaCry, 2017)।</td></tr>
      <tr><td>स्पाइवेयर / कीलॉगर</td><td>गुप्त रूप से जानकारी चुराने वाला / कीबोर्ड पर दबाई गई कुंजियाँ रिकॉर्ड करने वाला।</td></tr>
      <tr><td>एडवेयर</td><td>अवांछित विज्ञापन दिखाने वाला सॉफ़्टवेयर।</td></tr>
      <tr><td>रूटकिट</td><td>सिस्टम में गहराई से छिपकर हमलावर को प्रशासनिक नियंत्रण देने वाला।</td></tr>
      <tr><td>बॉटनेट</td><td>हमलावर द्वारा नियंत्रित संक्रमित कम्प्यूटरों ("ज़ॉम्बी") का नेटवर्क।</td></tr>
      <tr><td>फ़िशिंग (Phishing)</td><td>नकली ई-मेल/वेबसाइट से पासवर्ड, बैंक विवरण चुराना।</td></tr>
      <tr><td>विशिंग / स्मिशिंग</td><td>फ़ोन कॉल (Voice) / SMS के माध्यम से फ़िशिंग।</td></tr>
      <tr><td>स्पूफ़िंग (Spoofing)</td><td>किसी और की पहचान (ई-मेल पता, IP, कॉलर ID) का नकली रूप धारण करना।</td></tr>
      <tr><td>स्पैम (Spam)</td><td>अवांछित, थोक में भेजे गए ई-मेल/संदेश।</td></tr>
      <tr><td>हैकिंग / एथिकल हैकिंग</td><td>अनधिकृत प्रवेश / अनुमति लेकर सुरक्षा-कमज़ोरियाँ खोजना (व्हाइट हैट)।</td></tr>
      <tr><td>क्रैकर</td><td>दुर्भावना से सुरक्षा तोड़ने वाला (ब्लैक हैट)।</td></tr>
      <tr><td>सोशल इंजीनियरिंग</td><td>तकनीक के बजाय मनुष्य को बहला-फुसलाकर गोपनीय जानकारी निकलवाना।</td></tr>
      <tr><td>डीपफ़ेक (Deepfake)</td><td>AI से बनाए गए नकली, असली जैसे दिखने वाले वीडियो/ऑडियो।</td></tr>
      <tr><td>ज़ीरो-डे (Zero-day)</td><td>ऐसी सुरक्षा-कमज़ोरी जिसका सुधार (पैच) अभी उपलब्ध नहीं।</td></tr>
    </table>
    <div class="tip">ट्रिक: <b>"कैश = तेज़ी, बफ़र = तालमेल, स्पूल = कतार"</b>। कैश बार-बार प्रयुक्त डेटा को निकट रखकर गति बढ़ाता है; बफ़र दो गतियों में तालमेल बैठाता है; स्पूलिंग प्रिंट जैसे कार्यों की डिस्क पर कतार बनाती है।</div>
  `,
  extra: `
    <h3>भ्रमित करने वाले संक्षिप्त रूप — एक अक्षर-समूह, अनेक अर्थ</h3>
    <table>
      <tr><th>संक्षिप्त रूप</th><th>अर्थ 1</th><th>अर्थ 2</th><th>पहचान कैसे करें</th></tr>
      <tr><td>PC</td><td>Personal Computer</td><td>Program Counter (रजिस्टर)</td><td>CPU रजिस्टर के प्रसंग में = Program Counter</td></tr>
      <tr><td>MBR</td><td>Master Boot Record (डिस्क)</td><td>Memory Buffer Register (CPU)</td><td>बूटिंग/पार्टिशन = Master Boot Record</td></tr>
      <tr><td>IDE</td><td>Integrated Drive Electronics (हार्डवेयर)</td><td>Integrated Development Environment (सॉफ़्टवेयर)</td><td>हार्ड डिस्क केबल बनाम कोड-संपादक</td></tr>
      <tr><td>GPT</td><td>GUID Partition Table</td><td>Generative Pre-trained Transformer</td><td>डिस्क बनाम AI (ChatGPT)</td></tr>
      <tr><td>PAN</td><td>Personal Area Network</td><td>Permanent Account Number</td><td>नेटवर्क बनाम आयकर</td></tr>
      <tr><td>DPI</td><td>Dots Per Inch</td><td>Digital Public Infrastructure</td><td>प्रिंटर बनाम ई-गवर्नेंस (आधार-UPI)</td></tr>
      <tr><td>NIC</td><td>Network Interface Card</td><td>National Informatics Centre</td><td>हार्डवेयर बनाम सरकारी संस्था</td></tr>
      <tr><td>ATM</td><td>Automated Teller Machine</td><td>Asynchronous Transfer Mode (नेटवर्क तकनीक)</td><td>बैंक बनाम नेटवर्किंग</td></tr>
      <tr><td>SoC / SOC</td><td>System on Chip</td><td>Security Operations Centre</td><td>मोबाइल चिप बनाम साइबर सुरक्षा केंद्र</td></tr>
      <tr><td>CA</td><td>Certificate Authority</td><td>Chartered Accountant (सामान्य)</td><td>डिजिटल प्रमाणपत्र के प्रसंग में = Certificate Authority</td></tr>
      <tr><td>MAC</td><td>Media Access Control (पता)</td><td>Macintosh (Apple कम्प्यूटर, "Mac")</td><td>नेटवर्क पता = Media Access Control</td></tr>
      <tr><td>CC</td><td>Carbon Copy (ई-मेल)</td><td>Creative Commons (लाइसेंस)</td><td>ई-मेल फ़ील्ड = Carbon Copy</td></tr>
      <tr><td>WAP</td><td>Wireless Application Protocol</td><td>Wireless Access Point</td><td>पुराने मोबाइल ब्राउज़िंग प्रोटोकॉल बनाम Wi-Fi उपकरण</td></tr>
    </table>

    <h3>जिनके दो प्रचलित विस्तार हैं (परीक्षा में सावधानी)</h3>
    <ul>
      <li><b>OCR / OMR / MICR:</b> अंतिम "R" को Recognition (तकनीक) तथा Reader (उपकरण) — दोनों रूप में लिखा जाता है। प्रायः विकल्पों में इनमें से केवल एक होता है; उसे सही मानें।</li>
      <li><b>RAID:</b> मूल (1987) "Redundant Array of <i>Inexpensive</i> Disks"; वर्तमान उद्योग-प्रचलित "Redundant Array of <i>Independent</i> Disks"।</li>
      <li><b>DVD:</b> प्रारंभ में "Digital Video Disc", अब आधिकारिक रूप से "Digital Versatile Disc"।</li>
      <li><b>PHP:</b> मूल "Personal Home Page"; अब पुनरावर्ती "PHP: Hypertext Preprocessor"।</li>
      <li><b>RSS:</b> "Really Simple Syndication" सर्वाधिक प्रचलित; "Rich Site Summary" भी।</li>
      <li><b>CDN:</b> Content Delivery Network तथा Content Distribution Network — दोनों प्रयुक्त।</li>
      <li><b>Wi-Fi:</b> Wi-Fi Alliance के अनुसार यह एक ब्रांड-नाम है, किसी शब्द का संक्षिप्त रूप नहीं; परीक्षाओं में "Wireless Fidelity" लिखा जाता है।</li>
      <li><b>VIRUS:</b> "Vital Information Resources Under Seize" एक लोकप्रिय परीक्षा-विस्तार है, वास्तविक तकनीकी परिभाषा नहीं।</li>
      <li><b>GSM:</b> मूल फ़्रांसीसी "Groupe Spécial Mobile"; अब "Global System for Mobile Communications"।</li>
    </ul>

    <h3>पुनरावर्ती (Recursive) व "नकली" संक्षिप्त रूप</h3>
    <ul>
      <li><b>GNU</b> = "GNU's Not Unix" — संक्षिप्त रूप का पहला अक्षर स्वयं वही शब्द; ऐसे रूप को पुनरावर्ती संक्षिप्त रूप कहते हैं। PHP का वर्तमान रूप भी पुनरावर्ती है।</li>
      <li><b>QWERTY</b> किसी शब्द का संक्षिप्त रूप नहीं — कीबोर्ड की ऊपरी अक्षर-पंक्ति के पहले छह अक्षर हैं।</li>
      <li><b>Spam</b> संक्षिप्त रूप नहीं; एक डिब्बाबंद मांस के ब्रांड नाम से आया शब्द है।</li>
      <li><b>Bit</b> = <b>Bi</b>nary digi<b>t</b>; <b>Pixel</b> = <b>Pic</b>ture <b>El</b>ement; <b>Modem</b> = <b>Mo</b>dulator-<b>Dem</b>odulator; <b>Codec</b> = <b>Co</b>der-<b>Dec</b>oder — ये शब्द-मिश्रण (Portmanteau) हैं।</li>
    </ul>

    <h3>परीक्षा में बार-बार फँसाने वाले शब्द-जाल</h3>
    <ul>
      <li><b>ALU</b> में "Arithmetic <b>Logic</b> Unit" — "Logical" नहीं (कुछ पुस्तकें "Arithmetic and Logic Unit" लिखती हैं; अर्थ वही)।</li>
      <li><b>URL</b> = Uniform (न कि Universal/Unique) Resource <b>Locator</b> (न कि Link/Location)।</li>
      <li><b>USB</b> = <b>Universal</b> Serial Bus; <b>UPS</b> = <b>Uninterruptible</b> Power Supply (न कि Universal/Unlimited)।</li>
      <li><b>HTML</b> में "<b>Markup</b>" — "Markdown/Marking" नहीं; <b>HTTP</b> में "<b>Transfer</b>" — "Transmission" नहीं। जबकि <b>TCP</b> में "<b>Transmission</b>" है।</li>
      <li><b>SMTP</b> में "Simple <b>Mail</b> Transfer" व <b>SNMP</b> में "Simple <b>Network Management</b>"।</li>
      <li><b>ISO</b> = International Organization for Standardization — अक्षर-क्रम I-O-S होने पर भी नाम "ISO" (यूनानी "isos" = समान) रखा गया।</li>
      <li><b>EEPROM</b> में "Electrically" व <b>EPROM</b> में केवल "Erasable" — EPROM UV प्रकाश से मिटती है।</li>
      <li><b>DRAM</b> = Dynamic (रिफ़्रेश आवश्यक), <b>SRAM</b> = Static (रिफ़्रेश नहीं)। कैश = SRAM; मुख्य मेमोरी = DRAM।</li>
      <li><b>CMOS</b> एक चिप-निर्माण तकनीक है; BIOS सेटिंग "CMOS" में रहती हैं, BIOS प्रोग्राम ROM/फ़्लैश में।</li>
      <li><b>IEEE</b> = Institute of <b>Electrical and Electronics</b> Engineers — दोनों शब्द हैं।</li>
      <li><b>OSI</b> = Open <b>Systems</b> Interconnection (मॉडल); इसे बनाने वाली संस्था <b>ISO</b> है — दोनों के अक्षर उलट हैं।</li>
      <li><b>bps बनाम Bps:</b> छोटा b = बिट, बड़ा B = बाइट। 8 Mbps इंटरनेट से अधिकतम 1 MBps डाउनलोड।</li>
      <li><b>1 KB = 1024 बाइट</b> (बाइनरी); मानकीकृत SI में 1 kB = 1000 बाइट व 1 KiB (किबिबाइट) = 1024 बाइट — परीक्षा में 1024 ही मानें।</li>
    </ul>

    <h3>याद रखने की ट्रिक</h3>
    <ul>
      <li><b>नेटवर्क आकार (छोटे से बड़ा):</b> P-L-C-M-W — "<b>P</b>ehle <b>L</b>ocal <b>C</b>ampus <b>M</b>etro <b>W</b>orld" → PAN &lt; LAN &lt; CAN &lt; MAN &lt; WAN।</li>
      <li><b>ROM परिवार:</b> ROM → P (Programmable, एक बार) → E (Erasable, UV) → EE (Electrically Erasable) → Flash।</li>
      <li><b>ई-मेल प्रोटोकॉल:</b> "<b>S</b>MTP = <b>S</b>end", "<b>P</b>OP = <b>P</b>ull (डाउनलोड कर ले जाओ)", "<b>I</b>MAP = <b>I</b>n-server (सर्वर पर ही रखो)"।</li>
      <li><b>पता-रूपांतरण:</b> DNS = नाम → IP; ARP = IP → MAC; RARP = MAC → IP; DHCP = IP देना; NAT = निजी IP → सार्वजनिक IP।</li>
      <li><b>पहचान तकनीकें:</b> चेक = MICR; उत्तर-पत्रक = OMR; छपा पाठ = OCR; उत्पाद = BCR/बारकोड; FASTag = RFID; टैप-टू-पे = NFC।</li>
      <li><b>भुगतान प्रणालियाँ:</b> RTGS = Real-Time (बड़ी राशि ≥ 2 लाख), NEFT = बैचों में, IMPS = Immediate (तत्काल), UPI = मोबाइल पर VPA/QR से।</li>
    </ul>
  `,
  questions: [
    { q: 'ALU का पूर्ण रूप है—', o: ['Arithmetic Logic Unit', 'Arithmetic Language Unit', 'Array Logic Unit', 'Automatic Logic Unit'], a: 0, e: 'ALU = Arithmetic Logic Unit; यह CPU का वह भाग है जो अंकगणितीय (जोड़-घटाव) व तार्किक (तुलना, AND/OR) संक्रियाएँ करता है।' },
    { q: 'CMOS का पूर्ण रूप है—', o: ['Central Metal Oxide Semiconductor', 'Complementary Metal Oxide Semiconductor', 'Complete Memory Operating System', 'Complementary Memory Oxide Storage'], a: 1, e: 'CMOS = Complementary Metal Oxide Semiconductor; मदरबोर्ड की CMOS चिप बैटरी से चलकर BIOS सेटिंग व दिनांक-समय बचाए रखती है।' },
    { q: 'कम्प्यूटर चालू होने पर हार्डवेयर की स्व-जाँच POST कहलाती है। POST का पूर्ण रूप है—', o: ['Power On Start Test', 'Primary Operating System Test', 'Power On Self Test', 'Program On Self Test'], a: 2, e: 'POST = Power On Self Test; BIOS द्वारा RAM, कीबोर्ड आदि की जाँच। त्रुटि होने पर बीप-कोड सुनाई देते हैं।' },
    { q: 'GUI का पूर्ण रूप है—', o: ['Graphical Universal Interface', 'General User Interface', 'Graphics Utility Interface', 'Graphical User Interface'], a: 3, e: 'GUI = Graphical User Interface; आइकन, विंडो, मेन्यू व माउस से कार्य — जैसे Windows।' },
    { q: 'HTTPS में "S" का अर्थ है—', o: ['Secure', 'Server', 'Standard', 'System'], a: 0, e: 'HTTPS = HyperText Transfer Protocol Secure; SSL/TLS एन्क्रिप्शन का प्रयोग, डिफ़ॉल्ट पोर्ट 443, ब्राउज़र में ताले का चिह्न।' },
    { q: 'PROM का पूर्ण रूप है—', o: ['Permanent Read Only Memory', 'Programmable Read Only Memory', 'Primary Read Only Memory', 'Protected Read Only Memory'], a: 1, e: 'PROM = Programmable ROM; इसे केवल एक बार (PROM प्रोग्रामर से) लिखा जा सकता है।' },
    { q: 'EEPROM का पूर्ण रूप है—', o: ['Extended Erasable Programmable Read Only Memory', 'Electronically Enabled Programmable Read Only Memory', 'Electrically Erasable Programmable Read Only Memory', 'Easily Erasable Permanent Read Only Memory'], a: 2, e: 'EEPROM = Electrically Erasable Programmable ROM; इसे विद्युत संकेत से मिटाया जा सकता है। फ़्लैश मेमोरी इसी का विकसित रूप है।' },
    { q: 'DRAM में "D" का अर्थ है—', o: ['Digital', 'Direct', 'Double', 'Dynamic'], a: 3, e: 'DRAM = Dynamic RAM; संधारित्र में आवेश धीरे-धीरे रिसता है, इसलिए इसे बार-बार रिफ़्रेश करना पड़ता है।' },
    { q: 'SRAM का पूर्ण रूप है—', o: ['Static Random Access Memory', 'Serial Random Access Memory', 'Synchronous Random Access Memory', 'Secondary Random Access Memory'], a: 0, e: 'SRAM = Static RAM; फ़्लिप-फ़्लॉप पर आधारित, रिफ़्रेश की आवश्यकता नहीं, तेज़ — कैश मेमोरी में प्रयुक्त।' },
    { q: 'SMPS का पूर्ण रूप है—', o: ['Simple Mode Power Supply', 'Switched Mode Power Supply', 'Static Memory Power Supply', 'System Mode Power Saver'], a: 1, e: 'SMPS = Switched Mode Power Supply; यह AC बिजली को कम्प्यूटर के लिए आवश्यक कम वोल्टेज DC में बदलता है।' },
    { q: 'UPS का पूर्ण रूप है—', o: ['Universal Power Supply', 'Unlimited Power Source', 'Uninterruptible Power Supply', 'Uniform Power System'], a: 2, e: 'UPS = Uninterruptible Power Supply; बिजली जाने पर बैटरी से कुछ समय तक बिजली देता है ताकि डेटा सहेजा जा सके।' },
    { q: 'DVI पोर्ट का पूर्ण रूप है—', o: ['Digital Video Input', 'Direct Visual Interface', 'Digital Versatile Interface', 'Digital Visual Interface'], a: 3, e: 'DVI = Digital Visual Interface; मॉनिटर को डिजिटल वीडियो संकेत देने वाला पोर्ट (केवल वीडियो, ऑडियो नहीं)।' },
    { q: 'LED का पूर्ण रूप है—', o: ['Light Emitting Diode', 'Liquid Emitting Display', 'Light Energy Device', 'Low Energy Diode'], a: 0, e: 'LED = Light Emitting Diode; LED मॉनिटर वास्तव में LED बैकलाइट वाले LCD होते हैं।' },
    { q: 'बैंक चेक के नीचे छपे विशेष अंकों को पढ़ने वाली तकनीक MICR का पूर्ण रूप है—', o: ['Magnetic Ink Code Reader', 'Magnetic Ink Character Recognition', 'Machine Ink Character Recognition', 'Magnetic Information Character Recognition'], a: 1, e: 'MICR = Magnetic Ink Character Recognition; चेक पर चुंबकीय स्याही से छपे अंकों को पढ़ने में प्रयुक्त — बैंकिंग में तीव्र चेक-निपटान।' },
    { q: 'OMR का पूर्ण रूप है—', o: ['Optical Memory Reader', 'Online Mark Recognition', 'Optical Mark Recognition', 'Optical Magnetic Reader'], a: 2, e: 'OMR = Optical Mark Recognition; बहुविकल्पीय परीक्षा की उत्तर-पुस्तिका में भरे गोलों को पढ़ने हेतु।' },
    { q: 'छपे हुए दस्तावेज़ को स्कैन करके संपादन योग्य टेक्स्ट में बदलने वाली तकनीक OCR का पूर्ण रूप है—', o: ['Optical Code Reader', 'Online Character Recognition', 'Optical Colour Recognition', 'Optical Character Recognition'], a: 3, e: 'OCR = Optical Character Recognition; छपे/हस्तलिखित अक्षरों को पहचानकर संपादन योग्य पाठ बनाना।' },
    { q: 'BCR का पूर्ण रूप है—', o: ['Bar Code Reader', 'Binary Code Reader', 'Bar Character Recognition', 'Basic Code Reader'], a: 0, e: 'BCR = Bar Code Reader; दुकानों, पुस्तकालयों में उत्पाद पर छपे बारकोड को पढ़ता है।' },
    { q: 'EBCDIC का पूर्ण रूप है—', o: ['Extended Binary Coded Data Interchange Code', 'Extended Binary Coded Decimal Interchange Code', 'Extended Basic Coded Decimal Information Code', 'Electronic Binary Coded Decimal Interchange Code'], a: 1, e: 'EBCDIC = Extended Binary Coded Decimal Interchange Code; 8 बिट कोड, IBM मेनफ़्रेम कम्प्यूटरों में प्रयुक्त।' },
    { q: 'HTML का पूर्ण रूप है—', o: ['HyperText Marking Language', 'HighText Markup Language', 'HyperText Markup Language', 'HyperTool Markup Language'], a: 2, e: 'HTML = HyperText Markup Language; वेब पेज बनाने की मार्कअप भाषा (प्रोग्रामिंग भाषा नहीं)। टिम बर्नर्स-ली ने विकसित की।' },
    { q: 'XML का पूर्ण रूप है—', o: ['Extra Markup Language', 'Executable Markup Language', 'Extended Machine Language', 'eXtensible Markup Language'], a: 3, e: 'XML = eXtensible Markup Language; इसमें उपयोगकर्ता अपने टैग बना सकता है — डेटा संग्रहण व आदान-प्रदान हेतु।' },
    { q: 'SQL का पूर्ण रूप है—', o: ['Structured Query Language', 'Standard Query Language', 'Sequential Query Language', 'Simple Question Language'], a: 0, e: 'SQL = Structured Query Language; संबंधपरक डेटाबेस से डेटा निकालने व बदलने की मानक भाषा।' },
    { q: 'DBMS का पूर्ण रूप है—', o: ['Data Backup Management System', 'Database Management System', 'Digital Base Management Software', 'Database Monitoring System'], a: 1, e: 'DBMS = Database Management System; डेटा को व्यवस्थित रूप से संग्रहित, पुनः प्राप्त व प्रबंधित करने का सॉफ़्टवेयर (MS Access)।' },
    { q: 'RDBMS में "R" का अर्थ है—', o: ['Random', 'Remote', 'Relational', 'Reliable'], a: 2, e: 'RDBMS = Relational DBMS; डेटा परस्पर संबंधित तालिकाओं (Tables) में रहता है — Oracle, MySQL। ई. एफ़. कॉड ने संबंधपरक मॉडल दिया।' },
    { q: 'IoT का पूर्ण रूप है—', o: ['Input of Technology', 'Intranet of Things', 'Integration of Technology', 'Internet of Things'], a: 3, e: 'IoT = Internet of Things; सेंसरयुक्त दैनिक वस्तुएँ (स्मार्ट बल्ब, स्मार्ट मीटर) इंटरनेट से जुड़कर डेटा का आदान-प्रदान करती हैं।' },
    { q: 'ML का (कृत्रिम बुद्धिमत्ता के संदर्भ में) पूर्ण रूप है—', o: ['Machine Learning', 'Machine Language', 'Memory Logic', 'Multi Layer'], a: 0, e: 'ML = Machine Learning; कम्प्यूटर स्पष्ट प्रोग्रामिंग के बिना डेटा से स्वयं सीखता है। यह AI की उपशाखा है।' },
    { q: 'FASTag में प्रयुक्त तकनीक RFID का पूर्ण रूप है—', o: ['Radio Frequency Internet Device', 'Radio Frequency Identification', 'Remote Frequency Identification', 'Radio Field Identity'], a: 1, e: 'RFID = Radio Frequency Identification; रेडियो तरंगों से टैग पढ़ना — FASTag, पुस्तकालय, गोदाम में प्रयोग।' },
    { q: 'GPS का पूर्ण रूप है—', o: ['Global Positioning Service', 'General Positioning System', 'Global Positioning System', 'Geographic Position Satellite'], a: 2, e: 'GPS = Global Positioning System; अमेरिका की उपग्रह आधारित नौवहन प्रणाली। भारत की अपनी प्रणाली NavIC है।' },
    { q: 'GPRS का पूर्ण रूप है—', o: ['Global Packet Radio Service', 'General Purpose Radio System', 'General Packet Routing Service', 'General Packet Radio Service'], a: 3, e: 'GPRS = General Packet Radio Service; GSM नेटवर्क पर पैकेट आधारित मोबाइल डेटा सेवा (2.5G)।' },
    { q: 'CDMA का पूर्ण रूप है—', o: ['Code Division Multiple Access', 'Code Data Mobile Access', 'Central Division Multiple Access', 'Channel Division Mobile Access'], a: 0, e: 'CDMA = Code Division Multiple Access; प्रत्येक उपयोगकर्ता को अलग कोड देकर एक ही आवृत्ति-बैंड साझा करने की तकनीक।' },
    { q: 'नेटवर्किंग व Wi-Fi (802.11) के मानक बनाने वाली संस्था IEEE का पूर्ण रूप है—', o: ['International Electrical and Electronics Engineers', 'Institute of Electrical and Electronics Engineers', 'Institute of Electronic and Electrical Equipment', 'Indian Electrical and Electronics Engineers'], a: 1, e: 'IEEE = Institute of Electrical and Electronics Engineers ("आई-ट्रिपल-ई"); 802.3 = ईथरनेट, 802.11 = Wi-Fi, 802.15 = ब्लूटूथ/PAN।' },
    { q: 'ISO का पूर्ण रूप है—', o: ['International Standards Office', 'Indian Standards Organization', 'International Organization for Standardization', 'International System Organization'], a: 2, e: 'ISO = International Organization for Standardization (मुख्यालय जिनेवा); इसी ने OSI मॉडल विकसित किया।' },
    { q: '7 परतों वाले नेटवर्क संदर्भ मॉडल OSI का पूर्ण रूप है—', o: ['Open System Internet', 'Operating Systems Interconnection', 'Online Systems Integration', 'Open Systems Interconnection'], a: 3, e: 'OSI = Open Systems Interconnection; 7 परतें — भौतिक, डेटा लिंक, नेटवर्क, परिवहन, सत्र, प्रस्तुति, अनुप्रयोग।' },
    { q: 'नेटवर्क कार्ड के 48 बिट भौतिक पते MAC address में MAC का पूर्ण रूप है—', o: ['Media Access Control', 'Machine Address Code', 'Memory Access Control', 'Media Address Code'], a: 0, e: 'MAC = Media Access Control; यह NIC में निर्माता द्वारा स्थायी रूप से दिया गया हार्डवेयर पता है (जैसे 00:1A:2B:3C:4D:5E)।' },
    { q: 'LAN का पूर्ण रूप है—', o: ['Large Area Network', 'Local Area Network', 'Linked Access Network', 'Local Access Node'], a: 1, e: 'LAN = Local Area Network; एक भवन/कार्यालय/विद्यालय के भीतर कम्प्यूटरों का नेटवर्क।' },
    { q: 'एक शहर में फैले नेटवर्क MAN का पूर्ण रूप है—', o: ['Main Area Network', 'Multiple Access Network', 'Metropolitan Area Network', 'Municipal Area Network'], a: 2, e: 'MAN = Metropolitan Area Network; एक शहर/महानगर में फैला नेटवर्क, जैसे केबल टीवी नेटवर्क।' },
    { q: 'WAN का पूर्ण रूप है—', o: ['Wireless Area Network', 'World Access Network', 'Web Area Network', 'Wide Area Network'], a: 3, e: 'WAN = Wide Area Network; देश/महाद्वीप तक फैला नेटवर्क। इंटरनेट विश्व का सबसे बड़ा WAN है।' },
    { q: 'ब्लूटूथ से जुड़े उपकरणों द्वारा बनने वाले छोटे नेटवर्क PAN का पूर्ण रूप है—', o: ['Personal Area Network', 'Private Area Network', 'Public Access Network', 'Permanent Area Network'], a: 0, e: 'PAN = Personal Area Network; लगभग 10 मीटर तक, एक व्यक्ति के उपकरणों (मोबाइल, ईयरफ़ोन) का नेटवर्क।' },
    { q: 'VPN का पूर्ण रूप है—', o: ['Virtual Public Network', 'Virtual Private Network', 'Very Private Network', 'Verified Private Node'], a: 1, e: 'VPN = Virtual Private Network; सार्वजनिक इंटरनेट पर एन्क्रिप्टेड "सुरंग" बनाकर निजी नेटवर्क जैसा सुरक्षित संपर्क।' },
    { q: 'IP address में IP का पूर्ण रूप है—', o: ['Internal Protocol', 'Internet Provider', 'Internet Protocol', 'Information Protocol'], a: 2, e: 'IP = Internet Protocol; यह नेटवर्क में प्रत्येक उपकरण को तार्किक पता देता है व पैकेट को सही गंतव्य तक मार्ग देता है।' },
    { q: 'IP पते से संबंधित उपकरण का MAC पता ज्ञात करने वाला प्रोटोकॉल ARP कहलाता है। ARP का पूर्ण रूप है—', o: ['Automatic Routing Protocol', 'Address Routing Protocol', 'Access Resolution Protocol', 'Address Resolution Protocol'], a: 3, e: 'ARP = Address Resolution Protocol; IP → MAC। इसका उल्टा RARP (Reverse ARP) = MAC → IP।' },
    { q: 'ping कमांड जिस प्रोटोकॉल पर कार्य करती है, उस ICMP का पूर्ण रूप है—', o: ['Internet Control Message Protocol', 'Internet Connection Management Protocol', 'Internal Control Message Protocol', 'Internet Communication Message Process'], a: 0, e: 'ICMP = Internet Control Message Protocol; नेटवर्क त्रुटि-संदेश व ping/tracert में प्रयुक्त।' },
    { q: 'घर/कार्यालय के अनेक निजी IP पतों को एक सार्वजनिक IP से इंटरनेट पर भेजने की तकनीक NAT का पूर्ण रूप है—', o: ['Network Access Transfer', 'Network Address Translation', 'Node Address Table', 'Network Allocation Technique'], a: 1, e: 'NAT = Network Address Translation; राउटर निजी पते (192.168.x.x) को सार्वजनिक पते में बदलता है — IPv4 पतों की बचत।' },
    { q: 'नेटवर्क उपकरणों (राउटर, स्विच) की निगरानी व प्रबंधन हेतु प्रोटोकॉल SNMP का पूर्ण रूप है—', o: ['Simple Network Mail Protocol', 'Standard Network Management Protocol', 'Simple Network Management Protocol', 'Secure Network Monitoring Protocol'], a: 2, e: 'SNMP = Simple Network Management Protocol; ध्यान दें — SMTP (Simple Mail Transfer Protocol) से भ्रमित न हों।' },
    { q: 'दूरस्थ कम्प्यूटर में सुरक्षित (एन्क्रिप्टेड) लॉगिन हेतु प्रयुक्त SSH का पूर्ण रूप है—', o: ['Secure Socket Host', 'System Shell Handler', 'Server Secure Host', 'Secure Shell'], a: 3, e: 'SSH = Secure Shell (पोर्ट 22); यह असुरक्षित Telnet का सुरक्षित विकल्प है।' },
    { q: 'HTTPS में एन्क्रिप्शन हेतु प्रयुक्त, SSL के उत्तराधिकारी TLS का पूर्ण रूप है—', o: ['Transport Layer Security', 'Transfer Layer Security', 'Transmission Line Security', 'Trusted Layer Service'], a: 0, e: 'TLS = Transport Layer Security; SSL (Secure Sockets Layer) का आधुनिक व अधिक सुरक्षित रूप।' },
    { q: 'SSL का पूर्ण रूप है—', o: ['Secure System Layer', 'Secure Sockets Layer', 'Server Socket Link', 'Safe Sockets Layer'], a: 1, e: 'SSL = Secure Sockets Layer; नेटस्केप द्वारा विकसित वेब एन्क्रिप्शन प्रोटोकॉल, अब TLS ने इसका स्थान ले लिया है।' },
    { q: 'वेब के मानक (HTML, CSS) निर्धारित करने वाली संस्था W3C का पूर्ण रूप है—', o: ['World Wide Web Council', 'Web Wide World Consortium', 'World Wide Web Consortium', 'World Web Computer Committee'], a: 2, e: 'W3C = World Wide Web Consortium; 1994 में टिम बर्नर्स-ली द्वारा स्थापित।' },
    { q: 'इंटरनेट के पूर्वज माने जाने वाले नेटवर्क ARPANET का पूर्ण रूप है—', o: ['Advanced Research Program Agency Network', 'American Research Projects Agency Network', 'Automated Research Projects Area Network', 'Advanced Research Projects Agency Network'], a: 3, e: 'ARPANET = Advanced Research Projects Agency Network; 1969 में अमेरिकी रक्षा विभाग द्वारा प्रारंभ।' },
    { q: 'भारत में 1986 में प्रारंभ शैक्षिक नेटवर्क ERNET का पूर्ण रूप है—', o: ['Education and Research Network', 'Electronic Research Network', 'Engineering Research Network', 'Education and Resource Network'], a: 0, e: 'ERNET = Education and Research Network; भारत में इंटरनेट की शुरुआत इसी शैक्षिक नेटवर्क से मानी जाती है।' },
    { q: 'भारत में 15 अगस्त 1995 को आम जनता के लिए इंटरनेट सेवा शुरू करने वाली कंपनी VSNL का पूर्ण रूप है—', o: ['Videsh Sanchar Network Limited', 'Videsh Sanchar Nigam Limited', 'Vikas Sanchar Nigam Limited', 'Virtual Sanchar Network Limited'], a: 1, e: 'VSNL = Videsh Sanchar Nigam Limited; बाद में टाटा समूह ने इसे ख़रीदा (टाटा कम्युनिकेशंस)।' },
    { q: 'भारत में दूरसंचार व इंटरनेट सेवाओं का नियमन करने वाली संस्था TRAI का पूर्ण रूप है—', o: ['Telecom Regulation Agency of India', 'Telecommunication Research Authority of India', 'Telecom Regulatory Authority of India', 'Technical Regulatory Authority of India'], a: 2, e: 'TRAI = Telecom Regulatory Authority of India; स्थापना 1997।' },
    { q: '.in डोमेन का प्रबंधन करने वाली संस्था NIXI का पूर्ण रूप है—', o: ['National Information Exchange of India', 'National Internet Extension of India', 'Network Internet Exchange of India', 'National Internet Exchange of India'], a: 3, e: 'NIXI = National Internet Exchange of India; .in रजिस्ट्री व भारतीय इंटरनेट एक्सचेंज का संचालन।' },
    { q: '.com, .org, .in जैसे डोमेन TLD कहलाते हैं। TLD का पूर्ण रूप है—', o: ['Top Level Domain', 'Total Link Domain', 'Top Link Directory', 'Technical Level Domain'], a: 0, e: 'TLD = Top Level Domain; डोमेन नाम में अंतिम बिंदु के बाद का भाग। .in देश-कोड (ccTLD) है, .com सामान्य (gTLD)।' },
    { q: 'वेबसाइट को सर्च इंजन परिणामों में ऊपर लाने की प्रक्रिया SEO का पूर्ण रूप है—', o: ['Search Engine Operation', 'Search Engine Optimization', 'Site Engine Optimization', 'Search Entry Organization'], a: 1, e: 'SEO = Search Engine Optimization; कीवर्ड, गुणवत्तापूर्ण सामग्री, बैकलिंक आदि से वेबसाइट की रैंकिंग सुधारना।' },
    { q: 'WordPress जैसे सॉफ़्टवेयर, जिनसे बिना कोड लिखे वेबसाइट की सामग्री बनाई-बदली जाती है, CMS कहलाते हैं। CMS का पूर्ण रूप है—', o: ['Computer Management Software', 'Content Monitoring System', 'Content Management System', 'Central Media Server'], a: 2, e: 'CMS = Content Management System; उदाहरण — WordPress, Joomla, Drupal।' },
    { q: 'पूरा वेब पेज रीलोड किए बिना पृष्ठभूमि में डेटा अद्यतन करने की तकनीक AJAX का पूर्ण रूप है—', o: ['Advanced JavaScript and XML', 'Asynchronous Java and XHTML', 'Automatic JavaScript and XML', 'Asynchronous JavaScript and XML'], a: 3, e: 'AJAX = Asynchronous JavaScript and XML; जैसे Google Maps में खिसकाने पर बिना पेज रीलोड नया नक्शा आना।' },
    { q: 'वेब API में डेटा आदान-प्रदान हेतु प्रचलित हल्का प्रारूप JSON का पूर्ण रूप है—', o: ['JavaScript Object Notation', 'Java Standard Object Network', 'JavaScript Online Notation', 'Java Serialized Object Name'], a: 0, e: 'JSON = JavaScript Object Notation; कुंजी-मान युग्मों {"name": "राम"} के रूप में डेटा।' },
    { q: 'LED बल्ब के प्रकाश से डेटा संचार की तकनीक Li-Fi का पूर्ण रूप है—', o: ['Line Fidelity', 'Light Fidelity', 'Linked Fidelity', 'Light Field'], a: 1, e: 'Li-Fi = Light Fidelity; हेराल्ड हास (2011) द्वारा प्रस्तुत — दृश्य प्रकाश से डेटा, रेडियो तरंगों से नहीं।' },
    { q: 'लंबी दूरी के बेतार ब्रॉडबैंड हेतु IEEE 802.16 मानक WiMAX का पूर्ण रूप है—', o: ['Wireless Internet Maximum Access', 'Wide Interoperability for Microwave Access', 'Worldwide Interoperability for Microwave Access', 'Wireless Interconnection for Mobile Access'], a: 2, e: 'WiMAX = Worldwide Interoperability for Microwave Access; Wi-Fi की तुलना में बहुत अधिक दूरी तक।' },
    { q: 'Wi-Fi नेटवर्क का नाम (जैसे "Home_WiFi") तकनीकी रूप से SSID कहलाता है। SSID का पूर्ण रूप है—', o: ['Secure Service Identity', 'System Set Identifier', 'Server Side Identification', 'Service Set Identifier'], a: 3, e: 'SSID = Service Set Identifier; अधिकतम 32 अक्षरों का बेतार नेटवर्क नाम।' },
    { q: 'Wi-Fi सुरक्षा मानक WPA2/WPA3 में WPA का पूर्ण रूप है—', o: ['Wi-Fi Protected Access', 'Wireless Protocol Access', 'Wi-Fi Private Authentication', 'Wireless Protected Area'], a: 0, e: 'WPA = Wi-Fi Protected Access; इसने कमज़ोर WEP (Wired Equivalent Privacy) का स्थान लिया। WPA3 नवीनतम है।' },
    { q: 'मोबाइल हैंडसेट की 15 अंकीय विशिष्ट पहचान संख्या IMEI (*#06# डायल करने पर दिखती है) का पूर्ण रूप है—', o: ['Indian Mobile Equipment Identity', 'International Mobile Equipment Identity', 'International Mobile Electronic Identification', 'Internal Mobile Equipment Index'], a: 1, e: 'IMEI = International Mobile Equipment Identity; चोरी हुए फ़ोन को ब्लॉक/ट्रैक करने में उपयोगी (CEIR पोर्टल)।' },
    { q: 'SIM कार्ड में SIM का पूर्ण रूप है—', o: ['Subscriber Information Module', 'System Identity Module', 'Subscriber Identity Module', 'Secure Identity Mobile'], a: 2, e: 'SIM = Subscriber Identity Module; ग्राहक की पहचान (IMSI) व प्रमाणीकरण कुंजी संग्रहित रखता है।' },
    { q: 'बिना इंटरनेट *99# डायल कर बैंकिंग करने की सेवा USSD का पूर्ण रूप है—', o: ['Universal Supplementary Service Data', 'Unified Structured Service Data', 'Unstructured Simple Service Dial', 'Unstructured Supplementary Service Data'], a: 3, e: 'USSD = Unstructured Supplementary Service Data; साधारण (फ़ीचर) फ़ोन पर भी काम करता है।' },
    { q: '4G नेटवर्क पर HD गुणवत्ता की वॉयस कॉल की सुविधा VoLTE का पूर्ण रूप है—', o: ['Voice over Long Term Evolution', 'Video over LTE', 'Voice over Local Telephone Exchange', 'Voice of Long Term Evolution'], a: 0, e: 'VoLTE = Voice over LTE; वॉयस कॉल भी डेटा पैकेट के रूप में 4G नेटवर्क पर जाती है।' },
    { q: '2.75G मोबाइल डेटा तकनीक EDGE का पूर्ण रूप है—', o: ['Enhanced Data for Global Evolution', 'Enhanced Data rates for GSM Evolution', 'Extended Data GSM Environment', 'Electronic Data rates for GSM Exchange'], a: 1, e: 'EDGE = Enhanced Data rates for GSM Evolution; GPRS (2.5G) से तेज़, 3G से पहले।' },
    { q: '3G मोबाइल मानक UMTS का पूर्ण रूप है—', o: ['Unified Mobile Telephone Service', 'Universal Mobile Transfer System', 'Universal Mobile Telecommunications System', 'United Mobile Telecom Standard'], a: 2, e: 'UMTS = Universal Mobile Telecommunications System; GSM पर आधारित 3G मानक।' },
    { q: 'समय को छोटे-छोटे खंडों में बाँटकर अनेक उपयोगकर्ताओं को एक ही आवृत्ति देने की तकनीक TDMA का पूर्ण रूप है—', o: ['Total Data Multiple Access', 'Time Data Mobile Access', 'Transfer Division Multiple Access', 'Time Division Multiple Access'], a: 3, e: 'TDMA = Time Division Multiple Access; GSM में प्रयुक्त। FDMA = आवृत्ति, CDMA = कोड के आधार पर विभाजन।' },
    { q: 'ISRO द्वारा विकसित भारत की क्षेत्रीय उपग्रह नौवहन प्रणाली NavIC का पूर्ण रूप है—', o: ['Navigation with Indian Constellation', 'National Visual Indian Constellation', 'Navigation via Indian Communication', 'National Vehicle Information Centre'], a: 0, e: 'NavIC = Navigation with Indian Constellation; तकनीकी नाम IRNSS (Indian Regional Navigation Satellite System)।' },
    { q: 'मानचित्र आधारित भौगोलिक डेटा के संग्रह व विश्लेषण की प्रणाली GIS का पूर्ण रूप है—', o: ['Global Information System', 'Geographic Information System', 'Geological Interface System', 'General Information Service'], a: 1, e: 'GIS = Geographic Information System; भूमि अभिलेख, शहरी नियोजन, आपदा प्रबंधन में प्रयुक्त।' },
    { q: 'इंटरनेट प्रोटोकॉल पर टीवी प्रसारण की सेवा IPTV का पूर्ण रूप है—', o: ['Interactive Protocol Television', 'Internet Provider Television', 'Internet Protocol Television', 'Integrated Picture Television'], a: 2, e: 'IPTV = Internet Protocol Television; केबल/उपग्रह के बजाय IP नेटवर्क पर टीवी चैनल।' },
    { q: 'घर तक सीधे ऑप्टिकल फ़ाइबर से ब्रॉडबैंड पहुँचाने की सेवा FTTH का पूर्ण रूप है—', o: ['Fast Transfer To Home', 'Fibre Transmission Through House', 'Free Telecom To Home', 'Fibre To The Home'], a: 3, e: 'FTTH = Fibre To The Home; जैसे BSNL भारत फ़ाइबर, JioFiber।' },
    { q: 'उपग्रह से सीधे घर की छतरी (डिश) तक टीवी प्रसारण की सेवा DTH का पूर्ण रूप है—', o: ['Direct To Home', 'Digital To Home', 'Data Transfer Hub', 'Direct Television Hub'], a: 0, e: 'DTH = Direct To Home; जैसे DD Free Dish, Tata Play।' },
    { q: 'पारंपरिक लैंडलाइन टेलीफ़ोन नेटवर्क PSTN का पूर्ण रूप है—', o: ['Private Switched Telephone Network', 'Public Switched Telephone Network', 'Public Standard Telecom Network', 'Public Service Telephone Node'], a: 1, e: 'PSTN = Public Switched Telephone Network; डायल-अप इंटरनेट इसी पर मॉडेम से चलता था।' },
    { q: 'OFC का पूर्ण रूप है—', o: ['Optical Frequency Cable', 'Online Fibre Connection', 'Optical Fibre Cable', 'Open Fibre Channel'], a: 2, e: 'OFC = Optical Fibre Cable; प्रकाश के पूर्ण आंतरिक परावर्तन पर कार्य करती है — सबसे अधिक बैंडविड्थ, विद्युत-चुंबकीय व्यवधान से मुक्त।' },
    { q: 'LAN में सर्वाधिक प्रयुक्त केबल UTP का पूर्ण रूप है—', o: ['Universal Twisted Pair', 'Unified Transmission Pair', 'Unshielded Transfer Protocol', 'Unshielded Twisted Pair'], a: 3, e: 'UTP = Unshielded Twisted Pair (जैसे Cat5e, Cat6); परिरक्षण (शील्ड) वाली केबल STP = Shielded Twisted Pair।' },
    { q: 'ऑप्टिकल फ़ाइबर पर आधारित दोहरे रिंग वाले नेटवर्क मानक FDDI का पूर्ण रूप है—', o: ['Fiber Distributed Data Interface', 'Fast Digital Data Interface', 'Fiber Direct Data Interconnect', 'Frequency Division Data Interface'], a: 0, e: 'FDDI = Fiber Distributed Data Interface; LAN/MAN हेतु 100 Mbps का पुराना फ़ाइबर रिंग मानक।' },
    { q: 'अनेक संक्रमित कम्प्यूटरों से एक साथ अनुरोध भेजकर सर्वर ठप करने वाले आक्रमण DDoS में पहले "D" का अर्थ है—', o: ['Direct', 'Distributed', 'Digital', 'Dynamic'], a: 1, e: 'DDoS = Distributed Denial of Service; एक स्रोत से आक्रमण = DoS, अनेक स्रोतों (बॉटनेट) से = DDoS।' },
    { q: 'संदिग्ध नेटवर्क ट्रैफ़िक को पहचानकर स्वतः रोक देने वाली प्रणाली IPS का पूर्ण रूप है—', o: ['Internet Protection Service', 'Internal Privacy System', 'Intrusion Prevention System', 'Intrusion Protocol Security'], a: 2, e: 'IPS = Intrusion Prevention System; IDS केवल पहचानकर चेतावनी देता है, IPS आक्रमण को रोकता भी है।' },
    { q: 'पासवर्ड के साथ OTP जैसी दूसरी जाँच जोड़ने वाली सुरक्षा व्यवस्था 2FA का पूर्ण रूप है—', o: ['Two-File Access', 'Two-Firewall Authorization', 'Second Factor Access', 'Two-Factor Authentication'], a: 3, e: '2FA = Two-Factor Authentication; "आप क्या जानते हैं" (पासवर्ड) + "आपके पास क्या है" (मोबाइल/OTP)।' },
    { q: 'डिजिटल प्रमाणपत्रों व सार्वजनिक-निजी कुंजियों के प्रबंधन की व्यवस्था PKI का पूर्ण रूप है—', o: ['Public Key Infrastructure', 'Private Key Interface', 'Protected Key Internet', 'Public Key Identification'], a: 0, e: 'PKI = Public Key Infrastructure; इसमें प्रमाणन प्राधिकरण (CA) डिजिटल प्रमाणपत्र जारी करते हैं।' },
    { q: 'वर्तमान में सर्वाधिक प्रचलित सममित एन्क्रिप्शन मानक AES का पूर्ण रूप है—', o: ['Automatic Encryption System', 'Advanced Encryption Standard', 'Applied Encryption Security', 'Advanced Electronic Signature'], a: 1, e: 'AES = Advanced Encryption Standard (128/192/256 बिट कुंजी); इसने पुराने DES (Data Encryption Standard) का स्थान लिया।' },
    { q: 'सार्वजनिक कुंजी एन्क्रिप्शन एल्गोरिथ्म RSA का नाम किस पर आधारित है?', o: ['Random Secure Algorithm', 'Reliable Security Access', 'इसके तीन आविष्कारकों — Rivest, Shamir, Adleman — के उपनामों पर', 'Remote Server Authentication'], a: 2, e: 'RSA = Rivest–Shamir–Adleman (1977); यह असममित (Asymmetric) एन्क्रिप्शन है — सार्वजनिक व निजी कुंजी का जोड़ा।' },
    { q: 'SHA-256 जैसे हैश फ़ंक्शन में SHA का पूर्ण रूप है—', o: ['Secure Hypertext Algorithm', 'Standard Hash Access', 'Simple Hash Algorithm', 'Secure Hash Algorithm'], a: 3, e: 'SHA = Secure Hash Algorithm; SHA-256 बिटकॉइन ब्लॉकचेन व डिजिटल हस्ताक्षर में प्रयुक्त।' },
    { q: 'ई-मेल एन्क्रिप्शन हेतु फ़िल ज़िमरमैन द्वारा विकसित सॉफ़्टवेयर PGP का पूर्ण रूप है—', o: ['Pretty Good Privacy', 'Private Gateway Protocol', 'Public Guard Protection', 'Personal Gmail Privacy'], a: 0, e: 'PGP = Pretty Good Privacy (1991); ई-मेल व फ़ाइलों का एन्क्रिप्शन व डिजिटल हस्ताक्षर।' },
    { q: 'दो पक्षों के बीच संचार को गुप्त रूप से बीच में पकड़ने वाले आक्रमण MITM का पूर्ण रूप है—', o: ['Malware In The Machine', 'Man-in-the-Middle', 'Mail Interception Through Modem', 'Multiple Intrusion Threat Mode'], a: 1, e: 'MITM = Man-in-the-Middle; प्रायः असुरक्षित सार्वजनिक Wi-Fi पर। HTTPS/VPN से बचाव।' },
    { q: 'वेबसाइट में दुर्भावनापूर्ण स्क्रिप्ट डालकर दूसरे उपयोगकर्ताओं के ब्राउज़र में चलाने वाले आक्रमण XSS का पूर्ण रूप है—', o: ['Extended Site Security', 'Extra Secure Script', 'Cross-Site Scripting', 'Cross-Server Spoofing'], a: 2, e: 'XSS = Cross-Site Scripting; "Cross" के लिए X लिखा जाता है ताकि CSS (Cascading Style Sheets) से भ्रम न हो।' },
    { q: 'कर्मचारियों द्वारा कार्यालय में अपने निजी लैपटॉप/मोबाइल के प्रयोग की नीति BYOD का पूर्ण रूप है—', o: ['Buy Your Own Data', 'Backup Your Office Data', 'Block Your Old Device', 'Bring Your Own Device'], a: 3, e: 'BYOD = Bring Your Own Device; इसमें डेटा सुरक्षा का जोखिम बढ़ता है।' },
    { q: 'लंबे समय तक नेटवर्क में छिपा रहकर डेटा चुराने वाले लक्षित, संगठित साइबर हमले APT का पूर्ण रूप है—', o: ['Advanced Persistent Threat', 'Automated Phishing Tool', 'Advanced Protection Technique', 'Applied Program Trojan'], a: 0, e: 'APT = Advanced Persistent Threat; प्रायः राज्य-प्रायोजित समूहों द्वारा सरकारी/रक्षा संस्थानों पर।' },
    { q: 'किसी संगठन में सूचना सुरक्षा के सर्वोच्च अधिकारी CISO का पूर्ण रूप है—', o: ['Chief Internet Service Officer', 'Chief Information Security Officer', 'Central Information Security Organization', 'Cyber Intelligence Security Officer'], a: 1, e: 'CISO = Chief Information Security Officer; सरकारी विभागों में भी CERT-In दिशानिर्देशों के अनुसार CISO नामित किए जाते हैं।' },
    { q: 'ग्राफ़िक्स कार्ड का मुख्य प्रोसेसर GPU कहलाता है। GPU का पूर्ण रूप है—', o: ['General Processing Unit', 'Graphical Program Unit', 'Graphics Processing Unit', 'Gaming Performance Unit'], a: 2, e: 'GPU = Graphics Processing Unit; हज़ारों छोटे कोर से समानांतर गणना — चित्र, वीडियो, गेम व AI प्रशिक्षण में।' },
    { q: 'मोबाइल के ARM प्रोसेसर जिस डिज़ाइन पर आधारित हैं, उस RISC में "R" का अर्थ है—', o: ['Rapid', 'Random', 'Register', 'Reduced'], a: 3, e: 'RISC = Reduced Instruction Set Computer; कम व सरल निर्देश, कम बिजली खपत।' },
    { q: 'Intel/AMD के x86 डेस्कटॉप प्रोसेसर पारंपरिक रूप से CISC डिज़ाइन के माने जाते हैं। CISC का पूर्ण रूप है—', o: ['Complex Instruction Set Computer', 'Complete Instruction System Computer', 'Central Instruction Set Chip', 'Compound Integrated System Computer'], a: 0, e: 'CISC = Complex Instruction Set Computer; अधिक संख्या में जटिल निर्देश, एक निर्देश अनेक चक्र ले सकता है।' },
    { q: 'CPU की गति मापने की इकाई MIPS का पूर्ण रूप है—', o: ['Memory Instructions Per Second', 'Million Instructions Per Second', 'Machine Information Processing Speed', 'Million Inputs Per Second'], a: 1, e: 'MIPS = Million Instructions Per Second; प्रति सेकंड दस लाख निर्देशों के निष्पादन की क्षमता।' },
    { q: 'सुपरकम्प्यूटर की गति मापने की इकाई FLOPS में "FLOP" किसका संक्षिप्त रूप है?', o: ['Fast Logical Operation', 'Floating Logic Output', 'Floating Point Operation', 'File Load Operation'], a: 2, e: 'FLOPS = Floating Point Operations Per Second; जैसे पेटाफ़्लॉप (10¹⁵), एक्साफ़्लॉप (10¹⁸)।' },
    { q: 'स्मार्टफ़ोन में CPU, GPU, मॉडेम आदि को एक ही चिप पर समाहित करने वाली संरचना SoC का पूर्ण रूप है—', o: ['Silicon on Circuit', 'Software on Chip', 'System of Circuits', 'System on Chip'], a: 3, e: 'SoC = System on Chip; उदाहरण — Qualcomm Snapdragon, Apple A-सीरीज़। (SOC = Security Operations Centre से भिन्न।)' },
    { q: 'मदरबोर्ड जैसे परिपथ-बोर्ड PCB कहलाते हैं। PCB का पूर्ण रूप है—', o: ['Printed Circuit Board', 'Primary Circuit Board', 'Personal Computer Board', 'Power Control Board'], a: 0, e: 'PCB = Printed Circuit Board; इन्सुलेटिंग बोर्ड पर ताँबे की पतली पटरियाँ घटकों को जोड़ती हैं।' },
    { q: 'CPU का वह रजिस्टर जो पढ़े/लिखे जाने वाले मेमोरी स्थान का पता रखता है, MAR कहलाता है। MAR का पूर्ण रूप है—', o: ['Main Address Register', 'Memory Address Register', 'Memory Access Record', 'Machine Address Register'], a: 1, e: 'MAR = Memory Address Register; जबकि वहाँ से आया/जाने वाला डेटा MDR (Memory Data Register) में रहता है।' },
    { q: 'CPU के जिस रजिस्टर में निष्पादित होने वाले अगले निर्देश का पता रहता है, उसे PC कहते हैं। यहाँ PC का पूर्ण रूप है—', o: ['Personal Computer', 'Process Controller', 'Program Counter', 'Primary Cache'], a: 2, e: 'रजिस्टर के प्रसंग में PC = Program Counter (Instruction Pointer)। सामान्य प्रसंग में PC = Personal Computer।' },
    { q: 'आधुनिक ग्राफ़िक्स कार्ड व NVMe SSD जिस स्लॉट में लगते हैं, उस PCIe का पूर्ण रूप है—', o: ['Personal Computer Interface Express', 'Parallel Component Interconnect Express', 'Peripheral Card Interface Extended', 'Peripheral Component Interconnect Express'], a: 3, e: 'PCIe = Peripheral Component Interconnect Express; पुराने PCI व AGP स्लॉट का तीव्र उत्तराधिकारी।' },
    { q: 'सर्वरों में डिस्क व टेप ड्राइव जोड़ने हेतु प्रयुक्त "स्कज़ी" इंटरफ़ेस SCSI का पूर्ण रूप है—', o: ['Small Computer System Interface', 'Standard Computer Serial Interface', 'Serial Computer System Interconnect', 'Small Computer Storage Integration'], a: 0, e: 'SCSI = Small Computer System Interface; एक ही बस पर अनेक उपकरण जोड़े जा सकते हैं।' },
    { q: 'CPU को बीच में लाए बिना उपकरण द्वारा सीधे मेमोरी से डेटा-आदान-प्रदान की विधि DMA का पूर्ण रूप है—', o: ['Dynamic Memory Allocation', 'Direct Memory Access', 'Digital Memory Address', 'Data Management Access'], a: 1, e: 'DMA = Direct Memory Access; DMA नियंत्रक डेटा स्थानांतरित करता है जिससे CPU दूसरे कार्य कर पाता है।' },
    { q: 'किसी उपकरण द्वारा CPU का ध्यान आकर्षित करने हेतु भेजे जाने वाले संकेत IRQ का पूर्ण रूप है—', o: ['Input Response Queue', 'Internal Request Queue', 'Interrupt Request', 'Instruction Register Query'], a: 2, e: 'IRQ = Interrupt Request; जैसे कीबोर्ड पर कुंजी दबाने से इंटरप्ट उत्पन्न होता है।' },
    { q: 'एक ही कीबोर्ड, मॉनिटर व माउस से अनेक कम्प्यूटर चलाने वाले उपकरण KVM स्विच में KVM का पूर्ण रूप है—', o: ['Kernel Virtual Machine', 'Key Value Memory', 'Keyboard Visual Monitor', 'Keyboard, Video, Mouse'], a: 3, e: 'KVM = Keyboard, Video, Mouse; सर्वर कक्षों में उपयोगी। (Linux में KVM = Kernel-based Virtual Machine भी होता है।)' },
    { q: 'हार्ड डिस्क व SSD में ख़राबी की पूर्व-चेतावनी देने वाली स्व-निगरानी तकनीक S.M.A.R.T. का पूर्ण रूप है—', o: ['Self-Monitoring, Analysis and Reporting Technology', 'Storage Memory Analysis and Repair Tool', 'System Monitoring And Recovery Technique', 'Smart Memory Allocation and Recovery Technology'], a: 0, e: 'SMART = Self-Monitoring, Analysis and Reporting Technology; तापमान, ख़राब सेक्टर आदि पर नज़र रखती है।' },
    { q: 'DDR4, DDR5 RAM में DDR का पूर्ण रूप है—', o: ['Dual Data RAM', 'Double Data Rate', 'Dynamic Data Rate', 'Direct Data Register'], a: 1, e: 'DDR = Double Data Rate; एक क्लॉक-चक्र में दो बार (चढ़ते व उतरते किनारे पर) डेटा स्थानांतरण।' },
    { q: 'ग्राफ़िक्स कार्ड पर लगी समर्पित मेमोरी VRAM का पूर्ण रूप है—', o: ['Virtual Random Access Memory', 'Volatile RAM', 'Video Random Access Memory', 'Vector RAM'], a: 2, e: 'VRAM = Video RAM; स्क्रीन पर दिखने वाले चित्रों/टेक्सचर का डेटा रखती है।' },
    { q: 'डेस्कटॉप में लगने वाली RAM स्टिक DIMM का पूर्ण रूप है—', o: ['Digital In-line Memory Module', 'Dynamic Integrated Memory Module', 'Direct In-line Memory Module', 'Dual In-line Memory Module'], a: 3, e: 'DIMM = Dual In-line Memory Module; दोनों ओर अलग-अलग संपर्क-पिन। लैपटॉप हेतु छोटा रूप SO-DIMM।' },
    { q: 'Windows का मुख्य फ़ाइल सिस्टम NTFS का पूर्ण रूप है—', o: ['New Technology File System', 'Network Transfer File System', 'New Table File Structure', 'Next Technology File Storage'], a: 0, e: 'NTFS = New Technology File System; Windows NT (1993) से आरंभ — अनुमति, एन्क्रिप्शन, बड़ी फ़ाइलों का समर्थन।' },
    { q: 'डेटा केंद्रों में सर्वरों को उच्च-गति भंडारण देने वाले समर्पित नेटवर्क SAN का पूर्ण रूप है—', o: ['Server Access Network', 'Storage Area Network', 'System Area Node', 'Secure Archive Network'], a: 1, e: 'SAN = Storage Area Network; ब्लॉक-स्तरीय भंडारण। NAS (Network Attached Storage) फ़ाइल-स्तरीय साझा भंडारण देता है।' },
    { q: 'UEFI आधारित कम्प्यूटरों में प्रयुक्त आधुनिक डिस्क पार्टिशन योजना GPT का पूर्ण रूप है—', o: ['General Partition Table', 'Global Partition Type', 'GUID Partition Table', 'Graphical Partition Tool'], a: 2, e: 'डिस्क के प्रसंग में GPT = GUID Partition Table; यह पुरानी MBR योजना का स्थान लेती है और 2 TB से बड़ी डिस्क समर्थित करती है।' },
    { q: 'हार्ड डिस्क का प्रथम सेक्टर, जिसमें बूट-लोडर व पार्टिशन तालिका रहती है, MBR कहलाता है। यहाँ MBR का पूर्ण रूप है—', o: ['Main Boot Register', 'Memory Boot Record', 'Master Backup Record', 'Master Boot Record'], a: 3, e: 'डिस्क के प्रसंग में MBR = Master Boot Record (512 बाइट); यह अधिकतम 4 प्राथमिक पार्टिशन व 2 TB तक की डिस्क समर्थित करता है।' },
    { q: 'हार्ड डिस्क की घूर्णन गति (जैसे 7200) जिस इकाई में व्यक्त होती है, उस RPM का पूर्ण रूप है—', o: ['Revolutions Per Minute', 'Rotations Per Millisecond', 'Read Per Minute', 'Records Per Minute'], a: 0, e: 'RPM = Revolutions Per Minute; अधिक RPM = कम रोटेशनल लेटेंसी = तेज़ डिस्क।' },
    { q: 'कतार (Queue) डेटा-संरचना जिस सिद्धांत पर कार्य करती है, उस FIFO का पूर्ण रूप है—', o: ['Fast In Fast Out', 'First In First Out', 'File Input File Output', 'First Input Final Output'], a: 1, e: 'FIFO = First In First Out — जो पहले आया वह पहले निकलेगा (जैसे टिकट की कतार)।' },
    { q: 'स्टैक (Stack) डेटा-संरचना का कार्य-सिद्धांत LIFO है। LIFO का पूर्ण रूप है—', o: ['Linear In Fast Out', 'Least In First Out', 'Last In First Out', 'Last Input Final Output'], a: 2, e: 'LIFO = Last In First Out — जो अंत में रखा गया वह पहले निकलेगा (जैसे प्लेटों का ढेर)।' },
    { q: 'स्मार्टफ़ोन स्क्रीन में प्रयुक्त AMOLED में "AM" का अर्थ है—', o: ['Advanced Monitor', 'Automatic Mode', 'Analog Matrix', 'Active Matrix'], a: 3, e: 'AMOLED = Active Matrix Organic Light Emitting Diode; प्रत्येक पिक्सेल स्वयं प्रकाश देता है — गहरा काला रंग, कम बिजली।' },
    { q: 'सक्रिय-मैट्रिक्स LCD स्क्रीन में प्रत्येक पिक्सेल को नियंत्रित करने वाली तकनीक TFT का पूर्ण रूप है—', o: ['Thin Film Transistor', 'Total Flat Technology', 'Thin Flat Terminal', 'True Film Transistor'], a: 0, e: 'TFT = Thin Film Transistor; प्रत्येक पिक्सेल के लिए एक छोटा ट्रांजिस्टर — तेज़ व स्पष्ट डिस्प्ले।' },
    { q: 'मोबाइल/मॉनिटर स्क्रीन की पिक्सेल-सघनता की इकाई PPI का पूर्ण रूप है—', o: ['Points Per Inch', 'Pixels Per Inch', 'Prints Per Inch', 'Pixels Per Image'], a: 1, e: 'PPI = Pixels Per Inch; स्क्रीन हेतु PPI, जबकि प्रिंटर की छपाई गुणवत्ता हेतु DPI (Dots Per Inch)।' },
    { q: 'मॉनिटर को पहले VDU भी कहा जाता था। VDU का पूर्ण रूप है—', o: ['Video Display Utility', 'Virtual Display Unit', 'Visual Display Unit', 'Visual Data Unit'], a: 2, e: 'VDU = Visual Display Unit; यह सॉफ़्ट कॉपी आउटपुट देने वाला उपकरण है।' },
    { q: 'स्कैनर व डिजिटल कैमरे के प्रकाश-संवेदी सेंसर CCD का पूर्ण रूप है—', o: ['Colour Capture Device', 'Central Camera Device', 'Charge Control Diode', 'Charge-Coupled Device'], a: 3, e: 'CCD = Charge-Coupled Device; प्रकाश को विद्युत आवेश में बदलकर डिजिटल चित्र बनाता है। आधुनिक मोबाइल कैमरों में प्रायः CMOS सेंसर।' },
    { q: 'वास्तविक दृश्य पर डिजिटल वस्तुएँ जोड़कर दिखाने वाली तकनीक (जैसे Pokémon GO) AR का पूर्ण रूप है—', o: ['Augmented Reality', 'Artificial Reality', 'Advanced Rendering', 'Automated Recognition'], a: 0, e: 'AR = Augmented Reality (संवर्धित वास्तविकता); VR पूर्णतः कृत्रिम जगत दिखाता है, AR वास्तविक जगत पर परत जोड़ता है।' },
    { q: '3840×2160 (4K) रेज़ोल्यूशन को UHD कहते हैं। UHD का पूर्ण रूप है—', o: ['Universal High Definition', 'Ultra High Definition', 'Ultra HD Display', 'Unified High Density'], a: 1, e: 'UHD = Ultra High Definition; FHD (Full HD) = 1920×1080 से चार गुना पिक्सेल।' },
    { q: 'दो सॉफ़्टवेयर के बीच संवाद हेतु परिभाषित नियम-समूह API का पूर्ण रूप है—', o: ['Advanced Program Interface', 'Application Process Integration', 'Application Programming Interface', 'Automated Programming Instruction'], a: 2, e: 'API = Application Programming Interface; जैसे कोई ऐप Google Maps API से नक्शा दिखाता है।' },
    { q: 'Android ऐप बनाने हेतु उपकरणों, लाइब्रेरी व दस्तावेज़ों का संग्रह SDK कहलाता है। SDK का पूर्ण रूप है—', o: ['System Development Key', 'Software Design Kernel', 'Standard Developer Kit', 'Software Development Kit'], a: 3, e: 'SDK = Software Development Kit; जैसे Android SDK, Java Development Kit (JDK)।' },
    { q: 'कोड लिखने, कम्पाइल करने व डिबग करने की सुविधा एक ही स्थान पर देने वाले सॉफ़्टवेयर (जैसे VS Code, Eclipse) को IDE कहते हैं। यहाँ IDE का पूर्ण रूप है—', o: ['Integrated Development Environment', 'Interactive Design Editor', 'Internal Debugging Engine', 'Intelligent Development Editor'], a: 0, e: 'सॉफ़्टवेयर के प्रसंग में IDE = Integrated Development Environment; हार्डवेयर में IDE = Integrated Drive Electronics (पुराना डिस्क इंटरफ़ेस)।' },
    { q: 'जावा प्रोग्राम लिखने व कम्पाइल करने हेतु आवश्यक JDK का पूर्ण रूप है—', o: ['Java Debugging Kit', 'Java Development Kit', 'Java Deployment Kernel', 'Java Design Kit'], a: 1, e: 'JDK = Java Development Kit; इसमें JRE (Java Runtime Environment) व कम्पाइलर (javac) शामिल हैं।' },
    { q: 'कृत्रिम बुद्धिमत्ता हेतु जॉन मैकार्थी द्वारा विकसित प्रारंभिक भाषा LISP का पूर्ण रूप है—', o: ['Logical Instruction Set Processing', 'Linear Integrated System Program', 'List Processing', 'Language for Intelligent Systems Programming'], a: 2, e: 'LISP = List Processing (1958); जॉन मैकार्थी को AI का जनक भी कहा जाता है।' },
    { q: 'एल्गोरिथ्म लिखने हेतु विकसित प्रारंभिक उच्च-स्तरीय भाषा ALGOL का पूर्ण रूप है—', o: ['Algebraic Logic', 'Applied Logical Language', 'Advanced Logic Operations Language', 'Algorithmic Language'], a: 3, e: 'ALGOL = Algorithmic Language (1958); Pascal व C जैसी भाषाएँ इससे प्रभावित हैं।' },
    { q: 'C++, Java जैसी भाषाओं की प्रोग्रामिंग पद्धति OOP का पूर्ण रूप है—', o: ['Object Oriented Programming', 'Open Operating Procedure', 'Online Object Processing', 'Ordered Output Programming'], a: 0, e: 'OOP = Object Oriented Programming; मुख्य अवधारणाएँ — क्लास, ऑब्जेक्ट, इनहेरिटेंस, पॉलीमॉर्फ़िज़्म, एनकैप्सुलेशन।' },
    { q: 'SQL के CREATE, ALTER, DROP कमांड जिस भाग में आते हैं, उस DDL का पूर्ण रूप है—', o: ['Data Description Logic', 'Data Definition Language', 'Database Design Language', 'Data Delete Language'], a: 1, e: 'DDL = Data Definition Language; तालिका की संरचना परिभाषित/परिवर्तित करना।' },
    { q: 'SQL के INSERT, UPDATE, DELETE कमांड जिस भाग में आते हैं, उस DML का पूर्ण रूप है—', o: ['Data Modelling Language', 'Database Management Logic', 'Data Manipulation Language', 'Data Mining Language'], a: 2, e: 'DML = Data Manipulation Language; तालिका के भीतर के डेटा को जोड़ना/बदलना/हटाना। GRANT, REVOKE = DCL।' },
    { q: 'डेटाबेस लेन-देन (Transaction) के चार गुण ACID कहलाते हैं। इनमें "I" का अर्थ है—', o: ['Integrity', 'Indexing', 'Information', 'Isolation'], a: 3, e: 'ACID = Atomicity, Consistency, Isolation, Durability; Isolation = एक साथ चल रहे लेन-देन एक-दूसरे को प्रभावित न करें।' },
    { q: 'डेटाबेस डिज़ाइन में सत्ताओं (Entities) व उनके संबंधों को दर्शाने वाला आरेख ERD कहलाता है। ERD का पूर्ण रूप है—', o: ['Entity Relationship Diagram', 'Entry Record Diagram', 'Entity Record Data', 'External Relation Design'], a: 0, e: 'ERD = Entity Relationship Diagram; पीटर चेन (1976) द्वारा प्रस्तुत — आयत = सत्ता, समचतुर्भुज = संबंध, अंडाकार = गुण।' },
    { q: 'आवश्यकता-विश्लेषण से लेकर रख-रखाव तक सॉफ़्टवेयर निर्माण के चरणों को SDLC कहते हैं। SDLC का पूर्ण रूप है—', o: ['System Design Logic Cycle', 'Software Development Life Cycle', 'Software Design and Logic Control', 'Standard Development Life Chart'], a: 1, e: 'SDLC = Software Development Life Cycle; चरण — योजना, विश्लेषण, डिज़ाइन, कोडिंग, परीक्षण, कार्यान्वयन, रख-रखाव।' },
    { q: 'सॉफ़्टवेयर डिज़ाइन को मानक आरेखों (Use Case, Class Diagram) से दर्शाने की भाषा UML का पूर्ण रूप है—', o: ['Universal Machine Language', 'Unified Markup Language', 'Unified Modeling Language', 'User Modelling Logic'], a: 2, e: 'UML = Unified Modeling Language; इसका मानक OMG (Object Management Group) बनाता है।' },
    { q: 'Windows में कई प्रोग्रामों द्वारा साझा किए जाने वाले कोड की फ़ाइल (.dll) DLL का पूर्ण रूप है—', o: ['Data Link Layer', 'Direct Load Library', 'Digital Logic Library', 'Dynamic Link Library'], a: 3, e: 'DLL = Dynamic Link Library; प्रोग्राम चलते समय (रन-टाइम) इन्हें जोड़ा जाता है जिससे मेमोरी बचती है।' },
    { q: 'अल्पविराम से अलग मानों वाली सारणीबद्ध पाठ फ़ाइल (.csv) CSV का पूर्ण रूप है—', o: ['Comma Separated Values', 'Column Separated Variables', 'Computer Stored Values', 'Character Separated Version'], a: 0, e: 'CSV = Comma Separated Values; Excel में खोली जा सकती है, पर इसमें फ़ॉर्मेटिंग/सूत्र संग्रहित नहीं होते।' },
    { q: '"जो स्क्रीन पर दिखे, वही छपे" — इस सिद्धांत का संक्षिप्त रूप है—', o: ['WYSIWIG', 'WYSIWYG', 'WYSWYG', 'WISYWIG'], a: 1, e: 'WYSIWYG = What You See Is What You Get; MS Word जैसे वर्ड प्रोसेसर इसी सिद्धांत पर कार्य करते हैं।' },
    { q: 'Linux, LibreOffice जैसे सॉफ़्टवेयर FOSS श्रेणी में आते हैं। FOSS का पूर्ण रूप है—', o: ['Freely Owned System Software', 'Fully Open System Source', 'Free and Open Source Software', 'Free Operating System Software'], a: 2, e: 'FOSS = Free and Open Source Software; यहाँ "Free" का अर्थ स्वतंत्रता (उपयोग, अध्ययन, संशोधन, वितरण) से है।' },
    { q: 'GNU को "पुनरावर्ती (Recursive) संक्षिप्त रूप" कहा जाता है क्योंकि इसका पूर्ण रूप है—', o: ['General Network Utility', 'Global Network Unix', 'General Next Unix', "GNU's Not Unix"], a: 3, e: "GNU = GNU's Not Unix; पूर्ण रूप में स्वयं संक्षिप्त रूप आता है। रिचर्ड स्टॉलमैन ने 1983 में GNU परियोजना शुरू की।" },
    { q: '2006 में प्रारंभ राष्ट्रीय ई-शासन योजना NeGP का पूर्ण रूप है—', o: ['National e-Governance Plan', 'New e-Government Policy', 'National e-Gram Panchayat', 'Network for e-Governance Programme'], a: 0, e: 'NeGP = National e-Governance Plan (2006); इसमें मिशन मोड परियोजनाएँ (MMP) व CSC शामिल थे। 2015 से डिजिटल इंडिया के अंतर्गत।' },
    { q: 'भारत सरकार में IT नीति के लिए उत्तरदायी मंत्रालय MeitY का पूर्ण रूप है—', o: ['Ministry of Electronic and Internet Technology', 'Ministry of Electronics and Information Technology', 'Ministry of Education and Information Technology', 'Ministry of Electronics and IT Youth'], a: 1, e: 'MeitY = Ministry of Electronics and Information Technology; 2016 में पृथक मंत्रालय बना। NIC, CERT-In, UIDAI इसके अधीन हैं।' },
    { q: 'PARAM सुपरकम्प्यूटर विकसित करने वाली पुणे स्थित संस्था C-DAC का पूर्ण रूप है—', o: ['Centre for Digital Advanced Computing', 'Central Development of Automatic Computers', 'Centre for Development of Advanced Computing', 'Centre for Design of Advanced Chips'], a: 2, e: 'C-DAC = Centre for Development of Advanced Computing (1988); 1991 में PARAM 8000 बनाया। विजय भटकर इसके संस्थापक निदेशक थे।' },
    { q: 'भारतीय सुपरकम्प्यूटर श्रृंखला PARAM का नाम किसके संक्षिप्त रूप से लिया गया है?', o: ['Parallel Advanced Research Machine', 'Programmable Array Machine', 'Parallel Automatic Memory', 'PARAllel Machine'], a: 3, e: 'PARAM = PARAllel Machine; संस्कृत में "परम" का अर्थ "सर्वोच्च" भी है। प्रथम — PARAM 8000 (1991)।' },
    { q: 'CCC व O-Level जैसे कम्प्यूटर पाठ्यक्रम संचालित करने वाली संस्था NIELIT का पूर्ण रूप है—', o: ['National Institute of Electronics and Information Technology', 'National Institute of Engineering and Learning in IT', 'National Information and E-Learning Institute of Technology', 'New India Electronics and IT Training'], a: 0, e: 'NIELIT = National Institute of Electronics and Information Technology; पहले DOEACC सोसाइटी कहलाती थी, MeitY के अधीन।' },
    { q: 'NIELIT के मूल कम्प्यूटर साक्षरता पाठ्यक्रम CCC का पूर्ण रूप है—', o: ['Certificate in Computer Concepts', 'Course on Computer Concepts', 'Course on Computer Communication', 'Certificate Course in Computing'], a: 1, e: 'CCC = Course on Computer Concepts; अनेक राज्य भर्तियों में मूल कम्प्यूटर ज्ञान के प्रमाण के रूप में मान्य।' },
    { q: 'आधार संख्या जारी करने वाली संस्था UIDAI का पूर्ण रूप है—', o: ['Unique Identity Database Authority of India', 'Universal Identification Authority of India', 'Unique Identification Authority of India', 'Unified ID Agency of India'], a: 2, e: 'UIDAI = Unique Identification Authority of India (2009); आधार 12 अंकीय विशिष्ट पहचान संख्या है।' },
    { q: 'सरकारी योजनाओं की राशि सीधे लाभार्थी के बैंक खाते में भेजने की व्यवस्था DBT का पूर्ण रूप है—', o: ['Digital Bank Transfer', 'Direct Bank Transaction', 'Digital Benefit Transfer', 'Direct Benefit Transfer'], a: 3, e: 'DBT = Direct Benefit Transfer (2013); JAM त्रयी — जन धन, आधार, मोबाइल — इसका आधार है।' },
    { q: 'UPI, RuPay, IMPS का संचालन करने वाली संस्था NPCI का पूर्ण रूप है—', o: ['National Payments Corporation of India', 'National Payment Council of India', 'Network Payments Corporation of India', 'National Public Commerce Institute'], a: 0, e: 'NPCI = National Payments Corporation of India (2008); RBI व भारतीय बैंक संघ की पहल।' },
    { q: 'NPCI द्वारा 2016 में जारी UPI ऐप BHIM का पूर्ण रूप है—', o: ['Bharat Internet Money', 'Bharat Interface for Money', 'Bank Hub for Indian Money', 'Bharat Integrated Mobile'], a: 1, e: 'BHIM = Bharat Interface for Money; डॉ. भीमराव आंबेडकर के सम्मान में नामकरण।' },
    { q: '24×7 तत्काल अंतर-बैंक धन-अंतरण सेवा IMPS का पूर्ण रूप है—', o: ['Indian Mobile Payment System', 'Instant Money Payment Service', 'Immediate Payment Service', 'Interbank Mobile Payment Service'], a: 2, e: 'IMPS = Immediate Payment Service (2010, NPCI); मोबाइल, नेट बैंकिंग, ATM से तुरंत धन-अंतरण।' },
    { q: 'बड़ी राशि (न्यूनतम 2 लाख रुपये) के तत्क्षण अंतरण की प्रणाली RTGS का पूर्ण रूप है—', o: ['Rapid Transfer Gross System', 'Real Time Gross Service', 'Real Transaction Gross Settlement', 'Real Time Gross Settlement'], a: 3, e: 'RTGS = Real Time Gross Settlement; प्रत्येक लेन-देन का अलग-अलग तत्काल निपटान (Gross = एक-एक करके)।' },
    { q: 'आधार संख्या व अंगुली-छाप से माइक्रो-ATM पर बैंक लेन-देन की सुविधा AePS का पूर्ण रूप है—', o: ['Aadhaar enabled Payment System', 'Automated e-Payment Service', 'Aadhaar Electronic Pay Scheme', 'Advanced e-Payment System'], a: 0, e: 'AePS = Aadhaar enabled Payment System; बैंक मित्र/CSC के माध्यम से ग्रामीण क्षेत्रों में नकद निकासी।' },
    { q: 'बैंक शाखा की पहचान हेतु 11 अक्षरों का कोड IFSC कहलाता है। IFSC का पूर्ण रूप है—', o: ['International Financial Service Code', 'Indian Financial System Code', 'Indian Fund Settlement Code', 'Inter-bank Funds Security Code'], a: 1, e: 'IFSC = Indian Financial System Code; पहले 4 अक्षर बैंक, पाँचवाँ 0, अंतिम 6 शाखा दर्शाते हैं। NEFT/RTGS/IMPS में आवश्यक।' },
    { q: 'बैंक खाता खोलते समय ग्राहक की पहचान व पते के सत्यापन की प्रक्रिया KYC का पूर्ण रूप है—', o: ['Keep Your Card', 'Know Your Card', 'Know Your Customer', 'Key Your Credentials'], a: 2, e: 'KYC = Know Your Customer; आधार OTP/बायोमेट्रिक से होने पर e-KYC।' },
    { q: 'सरकारी विभागों द्वारा वस्तुओं/सेवाओं की ऑनलाइन ख़रीद के पोर्टल GeM का पूर्ण रूप है—', o: ['Government e-Management', 'General e-Market', 'Government Electronic Mail', 'Government e-Marketplace'], a: 3, e: 'GeM = Government e-Marketplace (2016); सरकारी ख़रीद में पारदर्शिता हेतु।' },
    { q: 'वस्तु एवं सेवा कर (GST) की सम्पूर्ण IT अवसंरचना संचालित करने वाली संस्था GSTN का पूर्ण रूप है—', o: ['Goods and Services Tax Network', 'Government Sales Tax Network', 'GST National Portal', 'Goods and Services Tax Node'], a: 0, e: 'GSTN = Goods and Services Tax Network; GST पंजीकरण, रिटर्न व भुगतान का पोर्टल।' },
    { q: 'केंद्र सरकार के विभागों से संबंधित ऑनलाइन शिकायत पोर्टल CPGRAMS का पूर्ण रूप है—', o: ['Central Public Grievance Registration and Management System', 'Centralised Public Grievance Redress and Monitoring System', 'Citizen Public Grievance Redress and Monitoring Scheme', 'Central Portal for Grievance Redress and Management Services'], a: 1, e: 'CPGRAMS = Centralised Public Grievance Redress and Monitoring System; DARPG द्वारा संचालित।' },
    { q: 'देशभर के पुलिस थानों को जोड़ने वाली परियोजना CCTNS का पूर्ण रूप है—', o: ['Central Crime Tracking National System', 'Criminal Case Tracking Network Service', 'Crime and Criminal Tracking Network and Systems', 'Cyber Crime Tracking Network System'], a: 2, e: 'CCTNS = Crime and Criminal Tracking Network and Systems; FIR व अपराध अभिलेखों का डिजिटलीकरण (गृह मंत्रालय/NCRB)।' },
    { q: 'छोटे विक्रेताओं को डिजिटल वाणिज्य से जोड़ने हेतु सरकार समर्थित खुला नेटवर्क ONDC का पूर्ण रूप है—', o: ['Online Network for Digital Customers', 'Open National Digital Commerce', 'Online National Delivery Chain', 'Open Network for Digital Commerce'], a: 3, e: 'ONDC = Open Network for Digital Commerce (2022); किसी एक प्लेटफ़ॉर्म के एकाधिकार को कम करने की पहल।' },
    { q: 'देश के विश्वविद्यालयों व शोध संस्थानों को जोड़ने वाले उच्च-गति नेटवर्क NKN का पूर्ण रूप है—', o: ['National Knowledge Network', 'National Kisan Network', 'Network of Knowledge Nodes', 'New Knowledge Network'], a: 0, e: 'NKN = National Knowledge Network (2010); NIC द्वारा कार्यान्वित।' },
    { q: 'भारत सरकार के MOOC मंच SWAYAM का पूर्ण रूप है—', o: ['Study Web for Advanced Youth and Aspiring Minds', 'Study Webs of Active-Learning for Young Aspiring Minds', 'Smart Web of Active Youth Aspiring Minds', 'School Web for Active Young Minds'], a: 1, e: 'SWAYAM = Study Webs of Active-Learning for Young Aspiring Minds (2017); कक्षा 9 से स्नातकोत्तर तक निःशुल्क ऑनलाइन पाठ्यक्रम।' },
    { q: 'स्कूली शिक्षकों व छात्रों हेतु डिजिटल मंच DIKSHA का पूर्ण रूप है—', o: ['Digital India Knowledge Sharing Application', 'Digital Information for Knowledge and Skill Awareness', 'Digital Infrastructure for Knowledge Sharing', 'Distance Initiative for Knowledge Sharing'], a: 2, e: 'DIKSHA = Digital Infrastructure for Knowledge Sharing (2017); पाठ्यपुस्तकों के QR कोड इससे जुड़े होते हैं।' },
    { q: 'ग्रामीण परिवारों को डिजिटल साक्षर बनाने हेतु अभियान PMGDISHA का पूर्ण रूप है—', o: ['Pradhan Mantri Gramin Digital Shiksha Abhiyan', 'Pradhan Mantri Gram Digital Sewa Abhiyan', 'Pradhan Mantri Gramin Data Integration Scheme', 'Pradhan Mantri Gramin Digital Saksharta Abhiyan'], a: 3, e: 'PMGDISHA = Pradhan Mantri Gramin Digital Saksharta Abhiyan (2017); प्रति ग्रामीण परिवार एक व्यक्ति को डिजिटल साक्षर बनाना।' },
    { q: 'इंटरनेट पर असीमित संख्या में विद्यार्थियों हेतु खुले ऑनलाइन पाठ्यक्रम MOOC का पूर्ण रूप है—', o: ['Massive Open Online Course', 'Mobile Open Online Class', 'Multiple Online Open Courses', 'Modern Online Open Curriculum'], a: 0, e: 'MOOC = Massive Open Online Course; जैसे SWAYAM, Coursera, NPTEL।' },
    { q: 'IIT खड़गपुर द्वारा विकसित डिजिटल पुस्तकालय NDLI का पूर्ण रूप है—', o: ['National Digital Learning Initiative', 'National Digital Library of India', 'New Digital Library of India', 'National Data Library Index'], a: 1, e: 'NDLI = National Digital Library of India; शिक्षा मंत्रालय की पहल, अनेक भाषाओं में करोड़ों संसाधन।' },
    { q: 'IT/सॉफ़्टवेयर निर्यात को प्रोत्साहन देने वाली संस्था STPI का पूर्ण रूप है—', o: ['Software Training Parks of India', 'Science and Technology Parks of India', 'Software Technology Parks of India', 'Standard Technology Promotion Institute'], a: 2, e: 'STPI = Software Technology Parks of India (1991); MeitY के अधीन स्वायत्त संस्था।' },
    { q: 'भारतीय IT उद्योग के प्रमुख संगठन NASSCOM का पूर्ण रूप है—', o: ['National Association of Software and Computer Manufacturers', 'National Alliance of Software and Communication', 'National Association of Systems and Computing', 'National Association of Software and Service Companies'], a: 3, e: 'NASSCOM = National Association of Software and Service Companies (1988)।' },
    { q: 'वॉन न्यूमैन की संग्रहित-प्रोग्राम अवधारणा पर आधारित कम्प्यूटर EDVAC का पूर्ण रूप है—', o: ['Electronic Discrete Variable Automatic Computer', 'Electronic Digital Variable Analog Computer', 'Electronic Data Value Automatic Calculator', 'Electrical Discrete Vacuum Automatic Computer'], a: 0, e: 'EDVAC = Electronic Discrete Variable Automatic Computer; इसके लिए वॉन न्यूमैन ने 1945 में प्रसिद्ध रिपोर्ट लिखी।' },
    { q: 'अमेरिका का प्रथम व्यावसायिक कम्प्यूटर UNIVAC (1951) का पूर्ण रूप है—', o: ['Universal Network Integrated Computer', 'Universal Automatic Computer', 'United Variable Computer', 'Universal Vacuum Calculator'], a: 1, e: 'UNIVAC = UNIVersal Automatic Computer; एकर्ट व मॉकली द्वारा निर्मित, अमेरिकी जनगणना ब्यूरो को दिया गया।' },
    { q: '"बिग ब्लू" उपनाम वाली कंपनी IBM का पूर्ण रूप है—', o: ['Indian Business Machines', 'International Basic Machines', 'International Business Machines', 'Integrated Business Machines'], a: 2, e: 'IBM = International Business Machines; 1981 में IBM PC बाज़ार में उतारा।' },
    { q: 'प्रोसेसर निर्माता कंपनी Intel का नाम किन शब्दों से बना है?', o: ['Intelligent Electronics', 'International Telecommunication', 'Intel Logic', 'Integrated Electronics'], a: 3, e: 'Intel = Integrated Electronics (1968); प्रथम व्यावसायिक माइक्रोप्रोसेसर Intel 4004 (1971)।' },
    { q: 'Ryzen प्रोसेसर बनाने वाली कंपनी AMD का पूर्ण रूप है—', o: ['Advanced Micro Devices', 'American Micro Designs', 'Advanced Memory Devices', 'Automated Micro Data'], a: 0, e: 'AMD = Advanced Micro Devices; Intel की प्रमुख प्रतिस्पर्धी।' },
    { q: 'Netflix, Hotstar जैसी इंटरनेट पर सीधे वीडियो देने वाली सेवाओं के लिए प्रयुक्त OTT का पूर्ण रूप है—', o: ['Online Television Transfer', 'Over The Top', 'Over The Transmission', 'Online Transfer Technology'], a: 1, e: 'OTT = Over The Top; केबल/DTH ऑपरेटर को दरकिनार कर सीधे इंटरनेट से सामग्री।' },
    { q: 'मोबाइल में बिना केबल जोड़े, वायरलेस रूप से सिस्टम अपडेट मिलने को OTA अपडेट कहते हैं। OTA का पूर्ण रूप है—', o: ['Online Transfer Application', 'Over The Antenna', 'Over The Air', 'Operating Time Update'], a: 2, e: 'OTA = Over The Air; मोबाइल नेटवर्क या Wi-Fi से सॉफ़्टवेयर अद्यतन।' },
    { q: 'हेल्पलाइन पर "हिन्दी के लिए 1 दबाएँ" जैसी स्वचालित ध्वनि-प्रणाली IVR का पूर्ण रूप है—', o: ['Internet Voice Recording', 'Integrated Voice Router', 'Interactive Video Response', 'Interactive Voice Response'], a: 3, e: 'IVR = Interactive Voice Response; कॉलर कीपैड/आवाज़ से विकल्प चुनता है।' },
    { q: 'निगरानी कैमरा प्रणाली CCTV का पूर्ण रूप है—', o: ['Closed Circuit Television', 'Central Camera Television', 'Closed Camera Transmission Video', 'Computer Controlled Television'], a: 0, e: 'CCTV = Closed Circuit Television; संकेत केवल निश्चित मॉनिटरों तक जाते हैं, सार्वजनिक प्रसारण नहीं।' },
    { q: 'स्मार्टफ़ोन के पूर्वज माने जाने वाले हाथ में रखे जाने वाले उपकरण PDA का पूर्ण रूप है—', o: ['Portable Data Assistant', 'Personal Digital Assistant', 'Personal Device Application', 'Pocket Digital Accessory'], a: 1, e: 'PDA = Personal Digital Assistant; जैसे Palm Pilot — डायरी, संपर्क, कैलेंडर।' },
    { q: 'ई-बुक, संगीत, फ़िल्मों की अवैध नकल रोकने वाली तकनीक DRM का पूर्ण रूप है—', o: ['Data Recovery Management', 'Digital Record Monitoring', 'Digital Rights Management', 'Direct Rights Mechanism'], a: 2, e: 'DRM = Digital Rights Management; कॉपीराइट वाली डिजिटल सामग्री के उपयोग को नियंत्रित करना।' },
    { q: 'नए कम्प्यूटर के साथ पहले से स्थापित Windows को "OEM संस्करण" कहते हैं। OEM का पूर्ण रूप है—', o: ['Official Equipment Model', 'Operating Equipment Manufacturer', 'Online Electronic Market', 'Original Equipment Manufacturer'], a: 3, e: 'OEM = Original Equipment Manufacturer; ऐसा लाइसेंस प्रायः उसी मशीन से बँधा होता है।' },
    { q: 'सॉफ़्टवेयर स्थापित करते समय स्वीकार किया जाने वाला लाइसेंस समझौता EULA का पूर्ण रूप है—', o: ['End User License Agreement', 'Electronic User Legal Agreement', 'End User Legal Authorization', 'Enterprise User License Act'], a: 0, e: 'EULA = End User License Agreement; इसमें सॉफ़्टवेयर के उपयोग की शर्तें होती हैं।' },
    { q: 'वेबसाइटों पर "अक्सर पूछे जाने वाले प्रश्न" अनुभाग को क्या कहा जाता है?', o: ['FYI', 'FAQ', 'FWD', 'ASAP'], a: 1, e: 'FAQ = Frequently Asked Questions; FYI = For Your Information, FWD = Forward, ASAP = As Soon As Possible।' },
    { q: 'किसी कंपनी के वित्त, मानव संसाधन, उत्पादन, बिक्री आदि सभी विभागों को एक सॉफ़्टवेयर में जोड़ने वाली प्रणाली (जैसे SAP) ERP का पूर्ण रूप है—', o: ['Enterprise Revenue Planning', 'Electronic Resource Processing', 'Enterprise Resource Planning', 'Enterprise Record Program'], a: 2, e: 'ERP = Enterprise Resource Planning; उदाहरण — SAP, Oracle, Tally Prime (छोटे स्तर पर)।' },
    { q: 'ग्राहकों से संबंधित जानकारी, संपर्क व सेवा का प्रबंधन करने वाले सॉफ़्टवेयर CRM का पूर्ण रूप है—', o: ['Customer Record Management', 'Client Resource Manager', 'Central Relationship Model', 'Customer Relationship Management'], a: 3, e: 'CRM = Customer Relationship Management; जैसे Salesforce, Zoho CRM।' },
    { q: 'प्रबंधकों को निर्णय हेतु नियमित रिपोर्ट उपलब्ध कराने वाली प्रणाली MIS का पूर्ण रूप है—', o: ['Management Information System', 'Main Information Service', 'Management Integrated Software', 'Multiple Information Storage'], a: 0, e: 'MIS = Management Information System; सरकारी योजनाओं की प्रगति-निगरानी भी MIS पोर्टलों से होती है।' },
    { q: 'बैंक ATM लेन-देन जैसे वास्तविक-समय के अनेक छोटे लेन-देन संभालने वाली प्रणाली OLTP में "T" का अर्थ है—', o: ['Technology', 'Transaction', 'Transfer', 'Table'], a: 1, e: 'OLTP = Online Transaction Processing; जबकि OLAP = Online Analytical Processing (विश्लेषण हेतु)।' },
    { q: 'कॉल सेंटर जैसी सेवाएँ बाहरी कंपनियों से कराने को BPO कहते हैं। BPO का पूर्ण रूप है—', o: ['Business Process Operation', 'Back-office Process Outsourcing', 'Business Process Outsourcing', 'Business Program Organization'], a: 2, e: 'BPO = Business Process Outsourcing; ज्ञान-आधारित उच्च-स्तरीय कार्य (शोध, विश्लेषण) के बाह्य-स्रोतन को KPO कहते हैं।' },
    { q: 'कम्प्यूटर द्वारा मानव भाषा को समझने-बोलने (अनुवाद, चैटबॉट) से संबंधित AI शाखा NLP का पूर्ण रूप है—', o: ['Neural Logic Programming', 'Network Language Protocol', 'New Language Processing', 'Natural Language Processing'], a: 3, e: 'NLP = Natural Language Processing; उदाहरण — Google Translate, भाषिणी (भारत सरकार), वॉयस असिस्टेंट।' },
    { q: 'ChatGPT, Gemini जैसे AI मॉडल LLM कहलाते हैं। LLM का पूर्ण रूप है—', o: ['Large Language Model', 'Logical Learning Machine', 'Linear Language Method', 'Large Learning Memory'], a: 0, e: 'LLM = Large Language Model; विशाल पाठ-डेटा पर प्रशिक्षित, अरबों पैरामीटर वाले AI मॉडल।' },
    { q: 'ChatGPT नाम में "GPT" का पूर्ण रूप है—', o: ['General Purpose Technology', 'Generative Pre-trained Transformer', 'Global Processing Tool', 'Generated Programming Text'], a: 1, e: 'GPT = Generative Pre-trained Transformer; OpenAI द्वारा विकसित। "Transformer" 2017 में प्रस्तुत न्यूरल नेटवर्क संरचना है।' },
    { q: 'मानव मस्तिष्क की तंत्रिकाओं से प्रेरित गणना-संरचना ANN का पूर्ण रूप है—', o: ['Automatic Neural Node', 'Advanced Network Node', 'Artificial Neural Network', 'Applied Numeric Network'], a: 2, e: 'ANN = Artificial Neural Network; कई परतों वाले ANN पर आधारित अधिगम को डीप लर्निंग (DL) कहते हैं।' },
    { q: 'डेटा-एंट्री जैसे दोहराव वाले कार्यों को सॉफ़्टवेयर "बॉट" से स्वचालित करने की तकनीक RPA का पूर्ण रूप है—', o: ['Rapid Program Application', 'Remote Process Access', 'Robotic Program Algorithm', 'Robotic Process Automation'], a: 3, e: 'RPA = Robotic Process Automation; इसमें भौतिक रोबोट नहीं, सॉफ़्टवेयर बॉट कार्य करते हैं।' },
    { q: 'क्लाउड से वर्चुअल सर्वर, भंडारण व नेटवर्क किराए पर लेने का सेवा-मॉडल IaaS कहलाता है। IaaS का पूर्ण रूप है—', o: ['Infrastructure as a Service', 'Internet as a Service', 'Information as a Service', 'Integration as a Service'], a: 0, e: 'IaaS = Infrastructure as a Service; उदाहरण — Amazon EC2, Google Compute Engine। उपयोगकर्ता OS स्वयं प्रबंधित करता है।' },
    { q: 'ऐप विकसित करने हेतु तैयार प्लेटफ़ॉर्म (OS, डेटाबेस, रनटाइम) देने वाला क्लाउड मॉडल PaaS का पूर्ण रूप है—', o: ['Program as a Service', 'Platform as a Service', 'Processing as a Service', 'Portal as a Service'], a: 1, e: 'PaaS = Platform as a Service; उदाहरण — Google App Engine। पदानुक्रम: IaaS (नीचे) → PaaS → SaaS (ऊपर)।' },
    { q: 'लिखे हुए पाठ को पढ़कर सुनाने वाली तकनीक TTS का पूर्ण रूप है—', o: ['Text Transfer System', 'Talk To Speech', 'Text To Speech', 'Typed Text Synthesizer'], a: 2, e: 'TTS = Text To Speech; दृष्टिबाधित उपयोगकर्ताओं हेतु स्क्रीन रीडर इसी पर आधारित। उल्टा = STT (Speech To Text)।' },
    { q: 'इंजीनियरिंग व वास्तु-नक्शे बनाने के सॉफ़्टवेयर (जैसे AutoCAD) में CAD का पूर्ण रूप है—', o: ['Computer Aided Drawing Machine', 'Computer Animated Design', 'Computer Applied Drafting', 'Computer Aided Design'], a: 3, e: 'CAD = Computer Aided Design; इसके डिज़ाइन से मशीन द्वारा निर्माण को CAM (Computer Aided Manufacturing) कहते हैं।' },
    { q: 'IT में संचार (टेलीफ़ोन, नेटवर्क) को जोड़कर बनने वाले व्यापक शब्द ICT का पूर्ण रूप है—', o: ['Information and Communication Technology', 'Internet and Computer Technology', 'Integrated Computer Technology', 'Information and Computing Tools'], a: 0, e: 'ICT = Information and Communication Technology; विद्यालयों में "ICT@School" योजना इसका उदाहरण।' },
    { q: 'तेज़ कम्प्यूटर व धीमे उपकरण की गति के अंतर को संतुलित करने हेतु डेटा को अस्थायी रूप से रखने वाला मेमोरी-क्षेत्र कहलाता है—', o: ['रजिस्टर', 'बफ़र (Buffer)', 'ROM', 'पार्टिशन'], a: 1, e: 'बफ़र = दो गतियों में तालमेल हेतु अस्थायी भंडार (जैसे वीडियो बफ़रिंग, कीबोर्ड बफ़र)। कैश का उद्देश्य बार-बार प्रयुक्त डेटा तक तेज़ पहुँच है।' },
    { q: 'अत्यधिक पेजिंग के कारण कम्प्यूटर का अधिकांश समय RAM व डिस्क के बीच पृष्ठों की अदला-बदली में व्यर्थ होने की स्थिति कहलाती है—', o: ['डेडलॉक', 'स्पूलिंग', 'थ्रैशिंग (Thrashing)', 'बूटिंग'], a: 2, e: 'थ्रैशिंग में CPU उपयोग बहुत गिर जाता है; RAM बढ़ाना या एक साथ चल रहे प्रोग्राम घटाना इसका उपाय है।' },
    { q: 'नेटवर्क में डेटा को स्रोत से गंतव्य तक पहुँचने में लगने वाला विलंब (ping समय) कहलाता है—', o: ['बैंडविड्थ', 'थ्रूपुट', 'बिट रेट', 'लेटेंसी (Latency)'], a: 3, e: 'लेटेंसी मिलीसेकंड में मापी जाती है; ऑनलाइन गेमिंग व वीडियो कॉल में कम लेटेंसी आवश्यक। 5G की विशेषता अत्यंत कम लेटेंसी है।' },
    { q: 'किसी संचार-चैनल की एक सेकंड में अधिकतम डेटा-वहन क्षमता कहलाती है—', o: ['बैंडविड्थ (Bandwidth)', 'लेटेंसी', 'जिटर', 'प्रोटोकॉल'], a: 0, e: 'बैंडविड्थ bps (Kbps, Mbps, Gbps) में मापी जाती है — इसे "सड़क की चौड़ाई" और लेटेंसी को "यात्रा में लगा समय" समझें।' },
    { q: 'हार्डवेयर की ROM/फ़्लैश चिप में स्थायी रूप से लिखा सॉफ़्टवेयर, जो हार्डवेयर को मूल निर्देश देता है (जैसे BIOS), कहलाता है—', o: ['फ़्रीवेयर', 'फ़र्मवेयर (Firmware)', 'शेयरवेयर', 'मैलवेयर'], a: 1, e: 'फ़र्मवेयर हार्डवेयर व सॉफ़्टवेयर के बीच की कड़ी है; राउटर, प्रिंटर, मोबाइल में भी फ़र्मवेयर अपडेट आते हैं।' },
    { q: 'नया प्रिंटर जोड़ने पर ऑपरेटिंग सिस्टम को उस प्रिंटर से संवाद करना सिखाने वाला सॉफ़्टवेयर कहलाता है—', o: ['कम्पाइलर', 'लिंकर', 'डिवाइस ड्राइवर (Device Driver)', 'यूटिलिटी'], a: 2, e: 'डिवाइस ड्राइवर एक सिस्टम सॉफ़्टवेयर है जो OS के सामान्य आदेशों को उपकरण-विशेष आदेशों में बदलता है।' },
    { q: 'जब दो या अधिक प्रक्रियाएँ एक-दूसरे द्वारा रोके गए संसाधनों की प्रतीक्षा में अनिश्चितकाल तक रुकी रहें, तो यह स्थिति कहलाती है—', o: ['थ्रैशिंग', 'ओवरफ़्लो', 'फ़्रैग्मेंटेशन', 'डेडलॉक (Deadlock)'], a: 3, e: 'डेडलॉक की चार आवश्यक शर्तें — परस्पर अपवर्जन, पकड़ो-और-प्रतीक्षा करो, अग्रक्रय-रहित, वृत्ताकार प्रतीक्षा (कॉफ़मैन शर्तें)।' },
    { q: 'किसी फ़ोटो फ़ाइल में खींचने की तिथि, कैमरा मॉडल, आकार जैसी जानकारी "डेटा के बारे में डेटा" होती है। इसे कहते हैं—', o: ['मेटाडेटा (Metadata)', 'बिग डेटा', 'डेटा माइनिंग', 'कूट-पाठ'], a: 0, e: 'मेटाडेटा = data about data; जैसे फ़ाइल गुण (Properties) में दिखने वाला लेखक, बनने की तिथि।' },
    { q: 'डेटाबेस तालिका में प्रत्येक रिकॉर्ड को अद्वितीय रूप से पहचानने वाला फ़ील्ड, जिसमें न दोहराव हो सकता है न रिक्त (NULL) मान, कहलाता है—', o: ['फ़ॉरेन की', 'प्राइमरी की (Primary Key)', 'इंडेक्स', 'क्वेरी'], a: 1, e: 'प्राइमरी की, जैसे छात्र का अनुक्रमांक। दूसरी तालिका में उसी को संदर्भित करने वाला फ़ील्ड फ़ॉरेन की कहलाता है।' },
    { q: 'कीबोर्ड पर दबाई गई प्रत्येक कुंजी को गुप्त रूप से रिकॉर्ड कर पासवर्ड चुराने वाला प्रोग्राम कहलाता है—', o: ['एडवेयर', 'फ़ायरवॉल', 'कीलॉगर (Keylogger)', 'कुकी'], a: 2, e: 'कीलॉगर एक प्रकार का स्पाइवेयर है; वर्चुअल कीबोर्ड व 2FA इससे बचाव में सहायक।' },
    { q: 'SMS के माध्यम से नकली लिंक भेजकर बैंक विवरण/OTP चुराने की धोखाधड़ी कहलाती है—', o: ['विशिंग', 'स्पूफ़िंग', 'फ़ार्मिंग', 'स्मिशिंग (Smishing)'], a: 3, e: 'स्मिशिंग = SMS + Phishing; फ़ोन कॉल द्वारा = विशिंग (Voice + Phishing)।' },
    { q: 'सिस्टम में गहराई से छिपकर हमलावर को प्रशासनिक (Root) नियंत्रण देने वाला और एंटीवायरस से भी स्वयं को छिपाने वाला मैलवेयर कहलाता है—', o: ['रूटकिट (Rootkit)', 'एडवेयर', 'कुकी', 'स्पैम'], a: 0, e: 'रूटकिट का नाम Unix के "root" (सर्वोच्च उपयोगकर्ता) से आया है; इसे हटाने हेतु प्रायः OS दोबारा स्थापित करना पड़ता है।' },
    { q: 'सॉफ़्टवेयर की ऐसी सुरक्षा-कमज़ोरी, जिसका निर्माता को पता चलने से पहले ही दुरुपयोग हो जाए और जिसका सुधार (पैच) अभी उपलब्ध न हो, कहलाती है—', o: ['बैकडोर', 'ज़ीरो-डे (Zero-day)', 'बग बाउंटी', 'सैंडबॉक्स'], a: 1, e: 'ज़ीरो-डे — निर्माता के पास सुधार के लिए "शून्य दिन" मिले हैं। ऐसे आक्रमण सबसे ख़तरनाक माने जाते हैं।' },
    { q: 'सॉफ़्टवेयर की त्रुटि या सुरक्षा-छिद्र को ठीक करने हेतु जारी छोटा सुधार-प्रोग्राम कहलाता है—', o: ['प्लगइन', 'मैक्रो', 'पैच (Patch)', 'बीटा'], a: 2, e: 'पैच/अपडेट नियमित रूप से स्थापित करना साइबर सुरक्षा का मूल नियम है।' },
    { q: 'एक कम्प्यूटर प्रणाली पर दूसरी प्रणाली (जैसे Windows पर Android) के व्यवहार की नकल कर उसके प्रोग्राम चलाने वाला सॉफ़्टवेयर कहलाता है—', o: ['कम्पाइलर', 'डीबगर', 'इंटरप्रेटर', 'एमुलेटर (Emulator)'], a: 3, e: 'एमुलेटर — जैसे Android Studio Emulator, पुराने गेम कंसोल के एमुलेटर।' },
    { q: 'कम्प्यूटर बंद किए बिना उपकरण (जैसे पेन ड्राइव) निकालने या लगाने की सुविधा कहलाती है—', o: ['हॉट स्वैपिंग (Hot Swapping)', 'कोल्ड बूटिंग', 'स्पूलिंग', 'हाइबरनेशन'], a: 0, e: 'USB, SATA (AHCI मोड) हॉट स्वैपिंग का समर्थन करते हैं; प्लग एंड प्ले के साथ मिलकर उपकरण तुरंत उपयोग योग्य होता है।' },
    { q: 'जिस प्रकार पिक्सेल = Picture Element है, उसी प्रकार त्रि-आयामी (3D) चित्र का सबसे छोटा तत्व Voxel किसका संक्षिप्त रूप है?', o: ['Vector Element', 'Volume Element', 'Voltage Pixel', 'Visual Element'], a: 1, e: 'Voxel = Volume Element (Vo + xel); CT/MRI स्कैन व 3D गेम में प्रयुक्त।' },
    { q: 'ऑडियो/वीडियो को संपीडित व विसंपीडित करने वाले प्रोग्राम Codec का नाम किन शब्दों से बना है?', o: ['Code-Decode Compression', 'Compression-Decompression Device', 'Coder-Decoder', 'Computer Decoder'], a: 2, e: 'Codec = Coder-Decoder (Co + Dec); उदाहरण — H.264, HEVC, AAC, MP3।' },
    { q: 'वायरस, वर्म, ट्रोजन आदि सभी हानिकारक प्रोग्रामों के लिए सामूहिक शब्द Malware किन शब्दों से बना है?', o: ['Mail Software', 'Main Hardware', 'Machine Warfare', 'Malicious Software'], a: 3, e: 'Malware = Malicious Software; इसमें वायरस, वर्म, ट्रोजन, रैनसमवेयर, स्पाइवेयर, एडवेयर सभी शामिल हैं।' },
    { q: '"Uniform Resource Identifier" का संक्षिप्त रूप है—', o: ['URI', 'URL', 'URN', 'UID'], a: 0, e: 'URI = Uniform Resource Identifier — किसी संसाधन की पहचान; URL (Locator) इसका वह प्रकार है जो संसाधन का स्थान भी बताता है।' },
    { q: '"Short Message Service" का संक्षिप्त रूप है—', o: ['MMS', 'SMS', 'SMTP', 'SNS'], a: 1, e: 'SMS = Short Message Service (एक संदेश में अधिकतम 160 अक्षर, 7-बिट); चित्र/वीडियो हेतु MMS (Multimedia Messaging Service)।' },
    { q: '"Personal Identification Number" का संक्षिप्त रूप है—', o: ['PAN', 'PIC', 'PIN', 'PID'], a: 2, e: 'PIN = Personal Identification Number; ATM/UPI में 4 या 6 अंकों का गोपनीय कोड। PAN = Permanent Account Number (आयकर)।' },
    { q: 'दुकानों में कार्ड स्वाइप/टैप करके भुगतान लेने वाली मशीन को किस संक्षिप्त रूप से जाना जाता है?', o: ['ATM', 'MFP', 'NFC', 'POS'], a: 3, e: 'POS = Point of Sale; बिक्री के स्थान पर भुगतान लेने वाला टर्मिनल। NFC इसमें प्रयुक्त एक तकनीक है, मशीन का नाम नहीं।' },
    { q: 'मानक कीबोर्ड लेआउट का नाम "QWERTY" किस आधार पर पड़ा है?', o: ['कीबोर्ड की ऊपरी अक्षर-पंक्ति के पहले छह अक्षरों के आधार पर', 'Quick Word Entry Response Typing Yield के संक्षिप्त रूप से', 'इसके आविष्कारक के नाम से', 'Quality Writing Engineering के संक्षिप्त रूप से'], a: 0, e: 'QWERTY किसी शब्द-समूह का संक्षिप्त रूप नहीं है; क्रिस्टोफ़र शोल्स ने टाइपराइटर हेतु यह लेआउट बनाया था।' },
    { q: 'कीबोर्ड की Esc कुंजी किस शब्द का संक्षिप्त रूप है?', o: ['Escort', 'Escape', 'Essential', 'Execute'], a: 1, e: 'Esc = Escape; चालू क्रिया/संवाद-बॉक्स रद्द करने हेतु। Ctrl+Shift+Esc से सीधे Task Manager खुलता है।' },
    { q: 'कीबोर्ड की Alt कुंजी किस शब्द का संक्षिप्त रूप है?', o: ['Alteration', 'Altitude', 'Alternate', 'All Tabs'], a: 2, e: 'Alt = Alternate; Alt+Tab से खुले प्रोग्रामों में बदलना, Alt+F4 से सक्रिय विंडो बंद करना।' },
    { q: 'किसी इंटरनेट कनेक्शन की गति 8 Mbps है। आदर्श स्थिति में इससे अधिकतम डाउनलोड गति लगभग कितनी होगी?', o: ['8 MBps', '64 MBps', '0.8 MBps', '1 MBps'], a: 3, e: 'छोटा b = बिट, बड़ा B = बाइट; 1 बाइट = 8 बिट, अतः 8 Mbps ÷ 8 = 1 MBps।' },
    { q: '1 पेटाबाइट (PB) बराबर होता है—', o: ['1024 TB', '1024 GB', '1024 EB', '1000 MB'], a: 0, e: 'क्रम: KB → MB → GB → TB → PB → EB → ZB → YB, प्रत्येक पिछली इकाई का 1024 गुना। अतः 1 PB = 1024 TB = 2⁵⁰ बाइट।' },
    { q: 'एक्साबाइट (EB) से ठीक अगली (1024 गुनी) बड़ी इकाई है—', o: ['पेटाबाइट', 'ज़ेटाबाइट (ZB)', 'योटाबाइट', 'टेराबाइट'], a: 1, e: 'PB < EB < ZB < YB; 1 ZB = 1024 EB = 2⁷⁰ बाइट। ट्रिक — K-M-G-T-P-E-Z-Y।' },
    { q: 'TCP तथा HTTP के पूर्ण रूपों में "T" अक्षर (TCP का पहला T तथा HTTP का दूसरा T) क्रमशः किन शब्दों के लिए है?', o: ['Transfer, Transmission', 'Transmission, Text', 'Transmission, Transfer', 'Transport, Transfer'], a: 2, e: 'TCP = Transmission Control Protocol; HTTP = HyperText Transfer Protocol (H-T = HyperText, दूसरा T = Transfer)।' },
    { q: 'IEEE का 802.11 मानक किससे संबंधित है?', o: ['ईथरनेट (तार वाला LAN)', 'ब्लूटूथ', 'WiMAX', 'Wi-Fi (बेतार LAN)'], a: 3, e: 'IEEE 802.3 = ईथरनेट, 802.11 = Wi-Fi (WLAN), 802.15 = ब्लूटूथ/WPAN, 802.16 = WiMAX।' },
    { q: 'HTTPS वेबसाइटें डिफ़ॉल्ट रूप से किस पोर्ट संख्या का उपयोग करती हैं?', o: ['443', '80', '21', '25'], a: 0, e: 'HTTPS = 443, HTTP = 80, FTP = 21 (नियंत्रण), SMTP = 25, SSH = 22, DNS = 53।' },
    { q: 'मोबाइल फ़ोन का IMEI नंबर देखने हेतु कौन-सा कोड डायल किया जाता है?', o: ['*99#', '*#06#', '*123#', '#*21#'], a: 1, e: '*#06# डायल करने पर IMEI दिखता है; *99# USSD बैंकिंग सेवा का कोड है।' },
    { q: 'दस्तावेज़ की प्रति टेलीफ़ोन लाइन से भेजने वाली मशीन "Fax" किस शब्द का संक्षिप्त रूप है?', o: ['Fast Access Exchange', 'Federal Access', 'Facsimile', 'Facility Exchange'], a: 2, e: 'Fax = Facsimile (प्रतिकृति); लैटिन "fac simile" = "समान बनाओ"।' },
    { q: 'आधार, UPI, डिजिलॉकर जैसी प्रणालियों को भारत की "DPI" कहा जाता है। इस प्रसंग में DPI का पूर्ण रूप है—', o: ['Digital Payment Interface', 'Data Protection Infrastructure', 'Direct Public Investment', 'Digital Public Infrastructure'], a: 3, e: 'ई-गवर्नेंस में DPI = Digital Public Infrastructure (India Stack)। प्रिंटर/स्कैनर के प्रसंग में DPI = Dots Per Inch।' },
    { q: 'सूचना सुरक्षा के मूल सिद्धांत "CIA त्रय" (CIA Triad) में "A" का अर्थ है—', o: ['Availability (उपलब्धता)', 'Authentication (प्रमाणीकरण)', 'Access (अभिगम)', 'Accuracy (शुद्धता)'], a: 0, e: 'CIA = Confidentiality (गोपनीयता), Integrity (अखंडता), Availability (उपलब्धता); DoS आक्रमण मुख्यतः "उपलब्धता" पर प्रहार करता है।' },
    { q: 'सूची-I (प्रोटोकॉल/तकनीक) को सूची-II (कार्य) से सुमेलित कीजिए —<br>(A) ARP (B) DNS (C) DHCP (D) NAT<br>1. उपकरणों को स्वतः IP पता देना 2. निजी IP पतों को सार्वजनिक IP में बदलना 3. IP पते से MAC पता ज्ञात करना 4. डोमेन नाम को IP पते में बदलना', o: ['A-4, B-3, C-1, D-2', 'A-3, B-4, C-1, D-2', 'A-3, B-4, C-2, D-1', 'A-1, B-4, C-3, D-2'], a: 1, e: 'ARP (Address Resolution Protocol) = IP → MAC; DNS (Domain Name System) = नाम → IP; DHCP (Dynamic Host Configuration Protocol) = IP आवंटन; NAT (Network Address Translation) = निजी → सार्वजनिक IP।' },
    { q: 'सूची-I (तकनीक) को सूची-II (प्रमुख उपयोग) से सुमेलित कीजिए —<br>(A) MICR (B) OMR (C) RFID (D) NFC<br>1. प्रतियोगी परीक्षा की उत्तर-पुस्तिका 2. FASTag 3. मोबाइल से टैप-टू-पे भुगतान 4. बैंक चेक', o: ['A-4, B-1, C-3, D-2', 'A-1, B-4, C-2, D-3', 'A-4, B-1, C-2, D-3', 'A-3, B-1, C-2, D-4'], a: 2, e: 'MICR (Magnetic Ink Character Recognition) = चेक; OMR (Optical Mark Recognition) = उत्तर-पुस्तिका; RFID (Radio Frequency Identification) = FASTag; NFC (Near Field Communication) = कुछ सेमी. दूरी पर संपर्क-रहित भुगतान।' },
    { q: 'सूची-I (SQL भाग) को सूची-II (कमांड) से सुमेलित कीजिए —<br>(A) DDL (B) DML (C) DCL (D) TCL<br>1. COMMIT 2. GRANT 3. UPDATE 4. CREATE', o: ['A-3, B-4, C-2, D-1', 'A-4, B-3, C-1, D-2', 'A-2, B-3, C-4, D-1', 'A-4, B-3, C-2, D-1'], a: 3, e: 'DDL (Data Definition) = CREATE/ALTER/DROP; DML (Data Manipulation) = INSERT/UPDATE/DELETE; DCL (Data Control) = GRANT/REVOKE; TCL (Transaction Control) = COMMIT/ROLLBACK।' },
    { q: 'सूची-I (नेटवर्क) को सूची-II (उदाहरण/विस्तार) से सुमेलित कीजिए —<br>(A) PAN (B) LAN (C) MAN (D) WAN<br>1. एक शहर का केबल टीवी नेटवर्क 2. मोबाइल से जुड़े ब्लूटूथ ईयरफ़ोन 3. देश-विदेश में फैली बैंक शाखाओं का नेटवर्क 4. एक कार्यालय भवन के कम्प्यूटर', o: ['A-2, B-4, C-1, D-3', 'A-4, B-2, C-1, D-3', 'A-2, B-4, C-3, D-1', 'A-2, B-1, C-4, D-3'], a: 0, e: 'आकार का क्रम: PAN (Personal, लगभग 10 मी.) < LAN (Local) < MAN (Metropolitan, शहर) < WAN (Wide, देश/विश्व)।' },
    { q: 'सूची-I (मेमोरी) को सूची-II (विशेषता) से सुमेलित कीजिए —<br>(A) PROM (B) EPROM (C) EEPROM (D) DRAM<br>1. विद्युत संकेत से मिटाई जा सकती है 2. बार-बार रिफ़्रेश करना पड़ता है 3. केवल एक बार प्रोग्राम की जा सकती है 4. पराबैंगनी (UV) प्रकाश से मिटाई जाती है', o: ['A-4, B-3, C-1, D-2', 'A-3, B-4, C-1, D-2', 'A-3, B-1, C-4, D-2', 'A-2, B-4, C-1, D-3'], a: 1, e: 'PROM = एक बार लेखन; EPROM (Erasable) = UV से मिटाना; EEPROM (Electrically Erasable) = विद्युत से मिटाना; DRAM (Dynamic) = संधारित्र आधारित, रिफ़्रेश आवश्यक।' },
    { q: 'सूची-I (भुगतान प्रणाली) को सूची-II (विशेषता) से सुमेलित कीजिए —<br>(A) RTGS (B) UPI (C) AePS (D) NACH<br>1. मोबाइल पर VPA या QR कोड से भुगतान 2. न्यूनतम 2 लाख रुपये का तत्क्षण अंतरण 3. EMI, वेतन जैसे बार-बार होने वाले थोक भुगतान 4. आधार व अंगुली-छाप से माइक्रो-ATM पर लेन-देन', o: ['A-1, B-2, C-4, D-3', 'A-2, B-1, C-3, D-4', 'A-2, B-1, C-4, D-3', 'A-4, B-1, C-2, D-3'], a: 2, e: 'RTGS (Real Time Gross Settlement) = बड़ी राशि; UPI (Unified Payments Interface) = मोबाइल; AePS (Aadhaar enabled Payment System) = आधार-बायोमेट्रिक; NACH (National Automated Clearing House) = आवर्ती थोक भुगतान।' },
    { q: 'सूची-I (सुरक्षा तकनीक) को सूची-II (कार्य) से सुमेलित कीजिए —<br>(A) IDS (B) VPN (C) CAPTCHA (D) PKI<br>1. डिजिटल प्रमाणपत्र व सार्वजनिक-निजी कुंजियों का प्रबंधन 2. मनुष्य व स्वचालित बॉट में अंतर करना 3. सार्वजनिक इंटरनेट पर एन्क्रिप्टेड सुरंग बनाना 4. नेटवर्क में घुसपैठ पहचानकर चेतावनी देना', o: ['A-4, B-2, C-3, D-1', 'A-3, B-4, C-2, D-1', 'A-1, B-3, C-2, D-4', 'A-4, B-3, C-2, D-1'], a: 3, e: 'IDS (Intrusion Detection System) = घुसपैठ-पहचान; VPN (Virtual Private Network) = एन्क्रिप्टेड सुरंग; CAPTCHA = मनुष्य/बॉट जाँच; PKI (Public Key Infrastructure) = प्रमाणपत्र व कुंजी प्रबंधन।' },
    { q: 'सूची-I (संस्था) को सूची-II (संबंधित कार्य) से सुमेलित कीजिए —<br>(A) UIDAI (B) NPCI (C) C-DAC (D) CHiPS<br>1. PARAM सुपरकम्प्यूटर 2. आधार 3. छत्तीसगढ़ की IT व ई-गवर्नेंस नोडल संस्था 4. UPI व RuPay', o: ['A-2, B-4, C-1, D-3', 'A-4, B-2, C-1, D-3', 'A-2, B-4, C-3, D-1', 'A-1, B-4, C-2, D-3'], a: 0, e: 'UIDAI = आधार; NPCI = UPI/RuPay/IMPS; C-DAC (पुणे) = PARAM; CHiPS (Chhattisgarh Infotech Promotion Society) = छत्तीसगढ़ में ई-गवर्नेंस।' },
    { q: 'सूची-I (चित्र प्रारूप) को सूची-II (विशेषता) से सुमेलित कीजिए —<br>(A) JPEG (B) PNG (C) GIF (D) SVG<br>1. वेक्टर आधारित — बड़ा करने पर धुंधला नहीं होता 2. सरल एनिमेशन, अधिकतम 256 रंग 3. हानिरहित संपीडन व पारदर्शिता का समर्थन 4. फ़ोटो हेतु हानिपूर्ण (Lossy) संपीडन', o: ['A-3, B-4, C-2, D-1', 'A-4, B-3, C-2, D-1', 'A-4, B-2, C-3, D-1', 'A-1, B-3, C-2, D-4'], a: 1, e: 'JPEG = Lossy फ़ोटो; PNG (Portable Network Graphics) = Lossless + पारदर्शिता; GIF (Graphics Interchange Format) = 256 रंग, एनिमेशन; SVG (Scalable Vector Graphics) = वेक्टर।' },
    { q: 'सूची-I (शब्द) को सूची-II (मूल शब्द-रूप) से सुमेलित कीजिए —<br>(A) Pixel (B) Modem (C) Bit (D) Codec<br>1. Binary Digit 2. Coder-Decoder 3. Picture Element 4. Modulator-Demodulator', o: ['A-4, B-3, C-1, D-2', 'A-3, B-1, C-4, D-2', 'A-3, B-4, C-1, D-2', 'A-2, B-4, C-1, D-3'], a: 2, e: 'ये चारों शब्द-मिश्रण (Portmanteau) हैं: Pixel = Picture Element, Modem = Modulator-Demodulator, Bit = Binary Digit, Codec = Coder-Decoder।' },
    { q: 'सूची-I (प्रोटोकॉल) को सूची-II (डिफ़ॉल्ट पोर्ट) से सुमेलित कीजिए —<br>(A) HTTP (B) FTP (नियंत्रण) (C) SSH (D) SMTP<br>1. 25 2. 22 3. 21 4. 80', o: ['A-3, B-4, C-2, D-1', 'A-4, B-3, C-1, D-2', 'A-4, B-2, C-3, D-1', 'A-4, B-3, C-2, D-1'], a: 3, e: 'HTTP = 80, FTP = 21 (डेटा हेतु 20), SSH = 22, SMTP = 25; इसके अतिरिक्त HTTPS = 443, DNS = 53।' },
    { q: 'सूची-I (मोबाइल डेटा तकनीक) को सूची-II (पीढ़ी) से सुमेलित कीजिए —<br>(A) GPRS (B) EDGE (C) UMTS (D) LTE<br>1. 2.5G 2. 2.75G 3. 3G 4. 4G', o: ['A-1, B-2, C-3, D-4', 'A-2, B-1, C-3, D-4', 'A-1, B-2, C-4, D-3', 'A-3, B-2, C-1, D-4'], a: 0, e: 'GPRS (General Packet Radio Service) = 2.5G; EDGE (Enhanced Data rates for GSM Evolution) = 2.75G; UMTS = 3G; LTE (Long Term Evolution) = 4G।' },
    { q: 'कौन-सा युग्म (संक्षिप्त रूप — पूर्ण रूप) सही सुमेलित नहीं है?', o: ['SMPS — Switched Mode Power Supply', 'CMOS — Central Metal Oxide Semiconductor', 'SRAM — Static Random Access Memory', 'POST — Power On Self Test'], a: 1, e: 'CMOS = Complementary (पूरक) Metal Oxide Semiconductor, "Central" नहीं। शेष तीनों युग्म सही हैं।' },
    { q: 'कौन-सा युग्म सही सुमेलित नहीं है?', o: ['IMAP — Internet Message Access Protocol', 'ICMP — Internet Control Message Protocol', 'URL — Universal Resource Locator', 'UDP — User Datagram Protocol'], a: 2, e: 'URL = Uniform Resource Locator; "Universal" शब्द-जाल है (USB में Universal होता है)।' },
    { q: 'कौन-सा युग्म सही सुमेलित नहीं है?', o: ['NIC (संस्था) — National Informatics Centre', 'UIDAI — Unique Identification Authority of India', 'NPCI — National Payments Corporation of India', 'IFSC — International Financial System Code'], a: 3, e: 'IFSC = Indian Financial System Code (11 अक्षर), "International" नहीं।' },
    { q: 'कौन-सा युग्म सही सुमेलित नहीं है?', o: ['RISC — Rapid Instruction Set Computer', 'MIPS — Million Instructions Per Second', 'ALU — Arithmetic Logic Unit', 'DMA — Direct Memory Access'], a: 0, e: 'RISC = Reduced (न कि Rapid) Instruction Set Computer।' },
    { q: 'कौन-सा युग्म सही सुमेलित नहीं है?', o: ['GPS — Global Positioning System', 'NFC — Network Field Communication', 'RFID — Radio Frequency Identification', 'IMEI — International Mobile Equipment Identity'], a: 1, e: 'NFC = Near Field Communication — "निकट क्षेत्र" (कुछ सेंटीमीटर) का संचार; "Network" नहीं।' },
    { q: 'कौन-सा युग्म सही सुमेलित नहीं है?', o: ['FOSS — Free and Open Source Software', 'EULA — End User License Agreement', 'OEM — Online Equipment Manufacturer', 'GPL — General Public License'], a: 2, e: 'OEM = Original (मूल) Equipment Manufacturer, "Online" नहीं।' },
    { q: 'कौन-सा युग्म (नेटवर्क — उदाहरण) सही सुमेलित नहीं है?', o: ['PAN — स्मार्टवॉच व मोबाइल का ब्लूटूथ संपर्क', 'LAN — विद्यालय के कम्प्यूटर-कक्ष का नेटवर्क', 'WAN — इंटरनेट', 'MAN — एक ही मेज़ पर रखे दो लैपटॉप का संपर्क'], a: 3, e: 'MAN (Metropolitan Area Network) एक शहर में फैला होता है; एक मेज़ के दो उपकरणों का संपर्क PAN/LAN का उदाहरण है।' },
    { q: 'कौन-सा युग्म (शब्द — अर्थ) सही सुमेलित नहीं है?', o: ['स्पूलिंग — CPU के भीतर स्थित सबसे तेज़ मेमोरी', 'कैश — CPU व RAM के बीच स्थित तीव्र मेमोरी', 'फ़र्मवेयर — ROM/फ़्लैश में स्थायी रूप से लिखा सॉफ़्टवेयर', 'कुकी — वेबसाइट द्वारा ब्राउज़र में रखी छोटी पाठ-फ़ाइल'], a: 0, e: 'CPU के भीतर सबसे तेज़ मेमोरी "रजिस्टर" है। स्पूलिंग (Simultaneous Peripheral Operations On-Line) = प्रिंट आदि कार्यों की डिस्क पर कतार।' },
    { q: 'कौन-सा युग्म (SQL भाग — कमांड) सही सुमेलित नहीं है?', o: ['DDL — CREATE', 'DML — GRANT', 'TCL — ROLLBACK', 'DCL — REVOKE'], a: 1, e: 'GRANT, DCL (Data Control Language) का कमांड है; DML के कमांड INSERT, UPDATE, DELETE, SELECT हैं।' },
    { q: 'कौन-सा युग्म सही सुमेलित नहीं है?', o: ['DoS — Denial of Service', 'MITM — Man-in-the-Middle', 'XSS — Extended Site Security', 'APT — Advanced Persistent Threat'], a: 2, e: 'XSS = Cross-Site Scripting (X = Cross); यह एक आक्रमण है, सुरक्षा तकनीक नहीं।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. EPROM को विद्युत संकेत द्वारा मिटाया जाता है।<br>2. SRAM को बार-बार रिफ़्रेश करना पड़ता है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 3, e: 'कथन 1 गलत — EPROM पराबैंगनी (UV) प्रकाश से मिटती है; विद्युत से EEPROM। कथन 2 गलत — रिफ़्रेश DRAM को चाहिए, SRAM (Static) को नहीं।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. SMTP का प्रयोग ई-मेल भेजने के लिए होता है।<br>2. POP3 ई-मेल को सर्वर पर रखते हुए अनेक उपकरणों में समकालिक (Sync) रखता है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 0, e: 'कथन 1 सही। कथन 2 गलत — यह IMAP की विशेषता है; POP3 सामान्यतः मेल डाउनलोड कर सर्वर से हटा देता है।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. ARP, MAC पते से IP पता ज्ञात करता है।<br>2. DNS, डोमेन नाम को IP पते में बदलता है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 1, e: 'कथन 1 गलत — ARP = IP → MAC; MAC → IP का कार्य RARP करता है। कथन 2 सही।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. GNU एक पुनरावर्ती (Recursive) संक्षिप्त रूप है।<br>2. QWERTY किसी शब्द-समूह का संक्षिप्त रूप नहीं है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 2, e: "दोनों सही — GNU = GNU's Not Unix (पुनरावर्ती); QWERTY कीबोर्ड की ऊपरी पंक्ति के पहले छह अक्षर हैं।" },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. IPv4 पता 64 बिट का होता है।<br>2. MAC पता 32 बिट का होता है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 3, e: 'दोनों गलत — IPv4 = 32 बिट, IPv6 = 128 बिट; MAC पता = 48 बिट (12 हेक्साडेसिमल अंक)।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. आयकर विभाग द्वारा जारी PAN का पूर्ण रूप Permanent Account Number है।<br>2. IFSC 10 अक्षरों का कोड होता है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 0, e: 'कथन 1 सही (PAN 10 अक्षरीय होता है)। कथन 2 गलत — IFSC 11 अक्षरों का होता है।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. OSI संदर्भ मॉडल में कुल 5 परतें होती हैं।<br>2. OSI मॉडल अंतरराष्ट्रीय मानकीकरण संगठन (ISO) ने विकसित किया।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 1, e: 'कथन 1 गलत — OSI में 7 परतें हैं (TCP/IP मॉडल में 4)। कथन 2 सही।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. SaaS मॉडल में उपयोगकर्ता केवल इंटरनेट से तैयार सॉफ़्टवेयर का उपयोग करता है, जैसे Gmail।<br>2. IaaS मॉडल में वर्चुअल सर्वर व भंडारण किराए पर लिए जाते हैं, जैसे Amazon EC2।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 2, e: 'दोनों सही — SaaS (Software as a Service) सबसे ऊपरी स्तर; IaaS (Infrastructure as a Service) सबसे निचला स्तर।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. CERT-In गृह मंत्रालय के अधीन कार्य करता है।<br>2. I4C इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी मंत्रालय (MeitY) के अधीन है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 3, e: 'दोनों गलत — CERT-In, MeitY के अधीन है; I4C (Indian Cyber Crime Coordination Centre) गृह मंत्रालय के अधीन है।' },
    { q: 'निम्नलिखित कथनों पर विचार कीजिए —<br>1. HDMI एक ही केबल से ऑडियो व वीडियो दोनों संकेत भेजता है।<br>2. VGA एक डिजिटल वीडियो पोर्ट है।<br>सही कथन है/हैं —', o: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 न ही 2'], a: 0, e: 'कथन 1 सही (High-Definition Multimedia Interface)। कथन 2 गलत — VGA एनालॉग पोर्ट है; DVI, HDMI, DisplayPort डिजिटल हैं।' },
    { q: 'अभिकथन (A): कैश मेमोरी के प्रयोग से कम्प्यूटर की प्रसंस्करण गति बढ़ती है।<br>कारण (R): कैश, बार-बार प्रयुक्त डेटा व निर्देशों को CPU के निकट तीव्र SRAM में रखती है।', o: ['A और R दोनों सही हैं तथा R, A की सही व्याख्या है', 'A और R दोनों सही हैं परंतु R, A की सही व्याख्या नहीं है', 'A सही है, R गलत है', 'A गलत है, R सही है'], a: 0, e: 'दोनों सही — CPU को धीमी RAM तक बार-बार नहीं जाना पड़ता, इसीलिए गति बढ़ती है; अतः R, A की सही व्याख्या है।' },
    { q: 'अभिकथन (A): DRAM को निश्चित अंतराल पर बार-बार रिफ़्रेश करना पड़ता है।<br>कारण (R): DRAM की प्रत्येक सेल फ़्लिप-फ़्लॉप परिपथ से बनी होती है।', o: ['A और R दोनों सही हैं तथा R, A की सही व्याख्या है', 'A और R दोनों सही हैं परंतु R, A की सही व्याख्या नहीं है', 'A सही है, R गलत है', 'A गलत है, R सही है'], a: 2, e: 'A सही। R गलत — DRAM सेल संधारित्र (Capacitor) + ट्रांजिस्टर से बनी होती है, जिसका आवेश रिसता है; फ़्लिप-फ़्लॉप SRAM में होते हैं।' },
    { q: 'अभिकथन (A): HTTP द्वारा भेजा गया डेटा स्वतः एन्क्रिप्टेड होता है।<br>कारण (R): HTTPS में SSL/TLS एन्क्रिप्शन का प्रयोग होता है।', o: ['A और R दोनों सही हैं तथा R, A की सही व्याख्या है', 'A और R दोनों सही हैं परंतु R, A की सही व्याख्या नहीं है', 'A सही है, R गलत है', 'A गलत है, R सही है'], a: 3, e: 'A गलत — HTTP में डेटा सादे पाठ (Plaintext) में जाता है। R सही — HTTPS (पोर्ट 443) में TLS से एन्क्रिप्शन होता है।' },
    { q: 'अभिकथन (A): BIOS को फ़र्मवेयर कहा जाता है।<br>कारण (R): कम्प्यूटर चालू होने पर BIOS, POST (Power On Self Test) की प्रक्रिया संपन्न करता है।', o: ['A और R दोनों सही हैं तथा R, A की सही व्याख्या है', 'A और R दोनों सही हैं परंतु R, A की सही व्याख्या नहीं है', 'A सही है, R गलत है', 'A गलत है, R सही है'], a: 1, e: 'दोनों सही, परंतु BIOS फ़र्मवेयर इसलिए है क्योंकि वह ROM/फ़्लैश चिप में स्थायी रूप से लिखा होता है — POST करना इसका कारण नहीं।' },
  ]
});
