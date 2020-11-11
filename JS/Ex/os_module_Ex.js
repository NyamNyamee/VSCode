const os = require('os');
console.log("하하하\n호호호호");
/*
os.EOL : End Of Line

\n on POSIX
\r\n on Windows
*/
console.log("하하하", os.EOL, "호호호호");

// os.arch() : Node.js 바이너리가 컴파일 된 운영 체제 CPU 아키텍처를 반환합니다.
//             가능한 값은 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32',와 'x64'.
console.log(os.arch());

// os.constants : 오류 코드, 프로세스 신호 등에 일반적으로 사용되는 운영 체제 별 상수를 포함합니다.
// console.log(os.constants);

/*
os.cpus()#
추가 : v0.3.3
반환 : <Object []>
각 논리적 CPU 코어에 대한 정보를 포함하는 객체 배열을 반환합니다.

각 개체에 포함 된 속성은 다음과 같습니다.
model <문자열>
speed <숫자> (MHz 단위)
times <객체>
    user <number> CPU가 사용자 모드에서 소비 한 시간 (밀리 초)입니다.
    nice <number> CPU가 nice 모드에서 보낸 시간 (밀리 초)입니다.
    sys <number> CPU가 sys 모드에서 소비 한 시간 (밀리 초)입니다.
    idle <number> CPU가 유휴 모드에서 소비 한 시간 (밀리 초)입니다.
    irq <number> CPU가 irq 모드에서 소비 한 시간 (밀리 초)입니다.
*/
console.log(os.cpus());

/*
os.endianness()#
추가 : v0.9.4
반환 : <문자열>
Node.js 바이너리가 컴파일 된 CPU의 엔디안을 식별하는 문자열을 반환합니다.
가능한 값은 'BE'빅 엔디안과 'LE'리틀 엔디안입니다.
*/
console.log(os.endianness());

/*
os.freemem()#
추가 : v0.3.3
반환 : <정수>
사용 가능한 시스템 메모리 양 (바이트)을 정수로 반환합니다.
*/
console.log(os.freemem());
/*
os.totalmem()#
추가 : v0.3.3
반환 : <정수>
시스템 메모리의 총량 (바이트)을 정수로 반환합니다.
*/
console.log(os.totalmem());

/*
os.getPriority([pid])#
추가 : v10.10.0
pid <integer> 예약 우선 순위를 검색 할 프로세스 ID입니다. 기본값 0 .
반환 : <정수>
에서 지정한 프로세스의 예약 우선 순위를 반환합니다 pid. 경우 pid제공되지 않았거나 0, 현재 프로세스의 우선 순위가 반환됩니다.

os.setPriority([pid, ]priority)
추가 : v10.10.0
pid <integer> 스케줄링 우선 순위를 설정할 프로세스 ID입니다. 기본값 0 .
priority <integer> 프로세스에 할당 할 예약 우선 순위입니다.
에 지정된 프로세스에 대한 예약 우선 순위를 설정하려고합니다 pid. 경우 pid구비되지 않았거나 0현재의 프로세스의 프로세스 ID가 사용된다.

priority입력 사이의 정수이어야 -20(높은 우선 순위) 및 19 (낮은 우선 순위). Unix 우선 순위 수준과 Windows 우선 순위 클래스의 차이로 인해 
priority는의 6 개 우선 순위 상수 중 하나에 매핑됩니다 os.constants.priority. 
프로세스 우선 순위 수준을 검색 할 때이 범위 매핑으로 인해 반환 값이 Windows에서 약간 다를 수 있습니다. 
혼동을 피하기 위해 priority우선 순위 상수 중 하나로 설정 하십시오.

Windows에서 우선 순위를 PRIORITY_HIGHEST로 설정 하려면 상승 된 사용자 권한 이 필요합니다. 
그렇지 않으면 설정된 우선 순위가 자동으로로 감소됩니다 PRIORITY_HIGH.
*/
console.log(os.getPriority());

/*
os.homedir()#
추가 : v2.3.0
반환 : <문자열>
현재 사용자 홈 디렉토리의 문자열 경로를 반환합니다.
POSIX에서는 $HOME정의 된 경우 환경 변수를 사용합니다 . 그렇지 않으면 유효한 UID 를 사용하여 사용자의 홈 디렉토리를 조회합니다.
Windows에서는 USERPROFILE정의 된 경우 환경 변수를 사용합니다 . 그렇지 않으면 현재 사용자의 프로필 디렉토리 경로를 사용합니다.
*/ 
console.log(os.homedir());
/*
os.tmpdir()#
역사
반환 : <문자열>
임시 파일에 대한 운영 체제의 기본 디렉터리를 문자열로 반환합니다.
*/
console.log(os.tmpdir());

/*
os.hostname()#
추가 : v0.3.3
반환 : <문자열>
운영 체제의 호스트 이름을 문자열로 반환합니다.
*/
console.log(os.hostname());

/*
os.type()#
추가 : v0.3.3
반환 : <문자열>
에서 반환 한 운영 체제 이름을 반환합니다 uname(3). 예를 들어 'Linux'Linux, 'Darwin'macOS 및 'Windows_NT'Windows 에서 반환 됩니다 .

다양한 운영 체제 에서 실행되는 출력에 대한 추가 정보는 https://en.wikipedia.org/wiki/Uname#Examples 를 참조 하십시오uname(3) .
*/
console.log(os.type());

/*
os.uptime()#
역사
반환 : <정수>
시스템 가동 시간을 초 단위로 반환합니다.
*/
console.log(os.uptime());

/*
os.userInfo([options])#
추가 : v6.0.0
options <객체>

encoding <string> 결과 문자열을 해석하는 데 사용되는 문자 인코딩입니다. 
경우 encoding로 설정 'buffer'의 username, shell그리고 homedir 값이 될 것입니다 Buffer경우. 기본값 : 'utf8' .
반환 : <객체>
현재 유효한 사용자에 대한 정보를 반환합니다. POSIX 플랫폼에서 이것은 일반적으로 암호 파일의 하위 집합입니다. 
반환 된 객체는 포함 username, uid, gid, shell,와 homedir. Windows에서 uid및 gid필드는 -1, 및 shell입니다 null.

에서 homedir반환 된 값은 os.userInfo()운영 체제에서 제공합니다. 이는 os.homedir()운영 체제 응답으로 돌아 가기 전에
 홈 디렉토리에 대한 환경 변수를 쿼리하는 의 결과와 다릅니다 .

예외없는 SystemError사용자가있는 경우에는 username나 homedir.
*/
console.log(os.userInfo());

/*
os.version()#
추가 : v12.17.0
반환 <문자열>
커널 버전을 식별하는 문자열을 반환합니다.

POSIX 시스템에서 운영 체제 릴리스는를 호출하여 결정됩니다 uname(3). Windows에서는 RtlGetVersion()이 사용되며 사용할 수없는 경우 GetVersionExW()사용됩니다. 자세한 내용은 https://en.wikipedia.org/wiki/Uname#Examples 를 참조하십시오.
*/
console.log(os.version());

/*
os.loadavg()#
추가 : v0.3.3
반환 : <number []>
1, 5, 15 분로드 평균이 포함 된 배열을 반환합니다.

로드 평균은 운영 체제에서 계산 된 시스템 활동의 측정 값이며 분수로 표시됩니다.

로드 평균은 Unix 관련 개념입니다. Windows에서 반환 값은 항상 [0, 0, 0]입니다.
*/
console.log(os.loadavg());

/*
os.networkInterfaces()#
추가 : v0.6.0
반환 : <객체>
네트워크 주소가 할당 된 네트워크 인터페이스가 포함 된 개체를 반환합니다.

반환 된 객체의 각 키는 네트워크 인터페이스를 식별합니다. 연결된 값은 각각 할당 된 네트워크 주소를 설명하는 개체의 배열입니다.

할당 된 네트워크 주소 개체에서 사용할 수있는 속성은 다음과 같습니다.

address <string> 할당 된 IPv4 또는 IPv6 주소
netmask <string> IPv4 또는 IPv6 네트워크 마스크
family <문자열> 중 하나 IPv4또는IPv6
mac <string> 네트워크 인터페이스의 MAC 주소
internal true네트워크 인터페이스가 루프백이거나 원격으로 액세스 할 수없는 유사한 인터페이스 인 경우 <boolean> ; 그렇지 않으면false
scopeid <번호> (때만 지정된 IPv6 수치 범위 ID family 이다 IPv6)
cidr <string> CIDR 표기법의 라우팅 접두사가있는 할당 된 IPv4 또는 IPv6 주소입니다. (가) 경우 netmask무효이며,이 속성으로 설정됩니다 null.
*/
console.log(os.networkInterfaces());

/* 
os.platform()#
추가 : v0.5.0
반환 : <문자열>
운영 체제 플랫폼을 식별하는 문자열을 반환합니다. 값은 컴파일 시간에 설정됩니다. 
가능한 값은 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos',와 'win32'.
반환 값은 process.platform.

'android'Node.js가 Android 운영 체제에서 빌드 된 경우에도 값 이 반환 될 수 있습니다. Android 지원은 실험적 입니다.
*/
console.log(os.platform());

/*
os.release()#
추가 : v0.3.3
반환 : <문자열>
운영 체제를 문자열로 반환합니다.

POSIX 시스템에서 운영 체제 릴리스는를 호출하여 결정됩니다 uname(3). 
Windows에서는 GetVersionExW()이 사용됩니다. 
자세한 내용은 https://en.wikipedia.org/wiki/Uname#Examples 를 참조하십시오.
*/
console.log(os.release());


