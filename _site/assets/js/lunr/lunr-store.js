var store = [{
        "title": "네트워크 1장",
        "excerpt":"Lesson 1 정리     컴퓨터 간의 연결을 컴퓨터 네트워크라고 부른다   인터넷은 전 세계의 큰 네트워크부터 작은 네트워크까지 연결하는 거대한 네트워크다   패킷은 컴퓨터 간의 데이터를 주고받을 때 네트워크를 통해 흘러가는 작은 데이터 조각이다   큰 데이터는 작은 패킷으로 분할한다   Lesson 2 정리     컴퓨터는 0과 1밖에 이해하지 못한다   정보를 나타내는 최소 단위를 비트라고 하며, 비트 여덟 개를 1바이트라고 한다   숫자와 문자의 대응표를 문자코드라고 한다   Lesson 3 정리     건물 안이나 특정 지역을 범위로 하는 네트워크를 랜(Local Area Network, LAN)이라고 한다   인터넷 서비스 제공자(ISP)가 제공하는 서비스를 사용하여 구축한 네트워크를 왠(Wide Area Network, WAN)이라고 한다   랜은 왠보다 범위가 좁고 속도가 빠르며 오류가 발생할 확률이 낮다   왠은 랜보다 버무이가 넓고 속도가 느리며 오류가 발생할 확률이 높다   Lesson 4 정리     우선 인터넷 서비스 제공자와 인터넷회선을 결정하고 계약한다   인터넷 서비스 제공자와 인터넷 공유기로 접속한다   접속 방식에는 유선 랜 방식과 무선 랜 방식이 있다   Lesson 5 정리     DMZ는 외부에 공개하기 위한 네트워크다   외부에 공개하는 서버에는 주로 웹 서버, DNS 서버, 메일 서버가 있다   회사의 서버는 온프레미스나 클라우드로 운영되고 있다   각 서버나 컴퓨터는 스위치나 무선 랜 기능을 사용하여 사내 랜에 접속한다   용어 정리     네트워크: 컴퓨터를 두 대 이상 연결하여 서로 데이터를 전송할 수 있는 통신망   인터넷: TCP/IP 프로토콜을 사용하는 세계 최대 규모의 네트워크다. 전 세계의 컴퓨터를 서로 연결하여 정보를 교환할 수 있도록 만든 하나의 거대한 컴퓨터 통신망이다   패킷: 네트워크 통신을 할 때 사용되는 작게 분할된 데이터 조각으로 네트워크에서 전송하는 데이터의 기본 단위다   비트: 정보의 최소 단위로 0 또는 1을 나타낸다   바이트: 컴퓨터의 정보량 단위로 8비트를 1바이트라고 한다   랜: 비교적 가까운 거리에 위치한 장치들을 서로 연결한 네트워크를 말한다. 집, 사무실, 학교 등의 건물과 같이 가까운 지역을 연결하는 네트워크다   왠: 랜을 다시 하나로 묶은 거대한 네트워크다. 특정 도시, 국가, 대륙과 같이 매우 넓은 범위를 연결하는 네트워크를 말한다. 넓은 지역에 설치된 컴퓨터들 간의 정보와 자원을 공유하기에 적합하도록 설계한 컴퓨터 통신망이다   인터넷 서비스 제공자: 인터넷에 접속하는 수단을 제공하는 주체다. 일반 사용자, 기업체, 기관, 단체 등이 인터넷에 접속하여 인터넷을 이용할 수 있도록 돕는 사업자다. 현재는 KT, U+, SK브로드밴드와 같은 ISP가 인터넷 서비스를 제공한다   서버: 컴퓨터 네트워크에서 다른 컴퓨터에 서비스를 제공하기 위한 컴퓨터 또는 프로그램이다  ","categories": ["Networks"],
        "tags": ["Networks"],
        "url": "http://localhost:4000/networks/network_1/",
        "teaser":null},{
        "title": "네트워크 메인",
        "excerpt":"네트워크와 관련된 내용을 포스팅 해갈 예정입니다   네트워크 1장  ","categories": ["Networks"],
        "tags": ["Networks"],
        "url": "http://localhost:4000/networks/network_main/",
        "teaser":null},{
        "title": "GAN 메인",
        "excerpt":"생산적 적대 신경망(generative adversarial networks, GAN)      두 개 이상의 신경망이 서로를 향하게 하고, 서로 대항하듯이 훈련하게 함으로써, 결과적으로  생성 모델(generative model) 을 산출해 낸다       GAN의 구조는 생성기(generator)와 판별기(discriminator)라고 부르는 두 가지 신경망으로 구성되어 있다     생성기: 잠재 공간(latent space)에서 표본(samples)을 추출해 잠재 공간과 출력 간의 관계를 생성하는 역할   *한 모델 안에서 생성기와 판별기를 서로 연결해 적대 모드(adversarial mode)를 취하게 함으로써 생성기를 훈련   판별기: 생성기를 훈련함으로써 훈련된 판별기와 서로 균형을 잡는 방법을 학습   판별기가 너무 뛰어나면 생성기가 발산(알아보기 힘든 데이터를 생성)   GAN 출력     Style transfer: 입력 이미지에 특정 스타일을 적용시키는 방법으로 적은 사례(examples)을 요구하는 것이 특징   DCGAN(deep convolution GAN): 입력 구문(input phrase)을 통해 출력 이미지를 생성   SimGAN: 모조 이미지(simulated image)를 통해 레이블이 붙은 데이터를 자동으로 생성   네트워크 1장      출처: 실전 예제로 배우는 GAN, “위키북스”   ","categories": ["DeepLearning"],
        "tags": ["Deep Learning","GAN","generative adversarial networks"],
        "url": "http://localhost:4000/deeplearning/gan_main/",
        "teaser":null},{
        "title": "우분투 도커 설치",
        "excerpt":"우분투 도커 설치(이미지 폴더 변경 까지)   우분투 환경에서 도커를 설치하는 방법을 정리해 보고자 한다.  실행 환경: Ubuntu 18.04(LTS) 도커 버전: 19.03   도커 설치 과정은  docs.docker.com 를 참고하여 순서대로 설명해 보겠다.   1. Uninstall old versions  기존에 도커가 설치되어 있다면 도커를 삭제하고 도커 폴더 역시 삭제한다.   # 도커 삭제 $ sudo apt-get remove docker docker-engine docker.io containerd runc  # 도커 폴더 삭제 $ sudo rm -rf /var/lib/docker   2. Set up the repository  도커 엔진을 설치하기 전에 새로운 기기에 도커 저장소를 설정하여 도커를 설치 및 업데이트 한다    # apt 패키지 업데이트 $ sudo apt-get update  # HTTPS를 통해 저장소를 사용하기 쉬운 패키지 설치 $ sudo apt-get install \\     apt-transport-https \\     ca-certificates \\     curl \\     gnupg-agent \\     software-properties-common \t\t # 도커의 공식 GPG key 추가하기(생략 가능) $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - $ sudo apt-key fingerprint 0EBFCD88      pub   rsa4096 2017-02-22 [SCEA]       9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88 uid           [ unknown] Docker Release (CE deb) &lt;docker@docker.com&gt; sub   rsa4096 2017-02-22 [S]  # 안정적인 저장소 설정하기 $ sudo add-apt-repository \\    \"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\    $(lsb_release -cs) \\    stable\"   3. Install docker-CE  이제 도커를 설치해보자   # apt 패키지 업데이트 수행 $ sudo apt-get update  # 최신 도커 설치 $ sudo apt-get install docker-ce docker-ce-cli containerd.io   3.1 Install nvidia-docker2(Option)  추가적으로 nvidia-docker를 설치한다  $ sudo apt-get install nvidia-docker2 $ sudo pkill -SIGHUP dockerd  일반적으로 도커를 사용하는데 있어서 위의 절차까지 수행하면 크게 문제가 없다.   하지만 도커의 이미지의 크기는 매우 크기 때문에 하드드라이브가 가득 차서 더이상 설치할 수 없게 된다.   그렇게 되지 않기 위하여 도커를 사용하면서 사용하지 않는 이미지나 컨테이너를 주기적으로 관리해 주어야 하지만 대부분의 OS가 설치된 하드는 SSD이고 용량이 상대적으로 적기 때문에 도커 이미지 위치를 HDD로 변경하여 사용한다   4. Docker default folder change  도커 폴더 변경은 이곳 을 참조하였다.   2가지 방법이 나오는데 1번 방법(도커 실행 서비스에서 설정 변경)을 사용하였다   /lib/systemd/system/docker.service 파일을 열고 아래 내용을 수정한다  #ExecStart=/usr/bin/dockerd -H fd:// ExecStart=/usr/bin/dockerd -g /media/username/data/docker -H fd://  /media/username/data/docker 이 경로를 자신의 폴더 경로로 변경한다   도커를 중지하고 기본 도커 폴더의 내용을 이동  # 기본 폴더안의 내용을 옮기기 위해 docker를 중지 $ sudo systemctl stop docker $ sudo systemctl daemon-reload  # 기존 도커 경로의 파일을 복사 $ sudo rsync -aqxP /var/lib/docker /media/username/data/docker $ sudo rm -rf /var/lib/docker  # 도커 시작 및 확인 $ sudo systemctl start docker $ ps -ef | grep docker root      1442     1  0 11월27 ?      00:00:05 /usr/bin/dockerd -g /media/username/data/docker -H fd://   자신이 설정한 경로가 출력되는지 확인한다면 정상적으로 변경되었고 이제 마음것(?) 이미지를 생성할 수 있다!  ","categories": ["Ubuntu"],
        "tags": ["Ubuntu","Docker"],
        "url": "http://localhost:4000/ubuntu/ubuntu_docker_install/",
        "teaser":null},{
        "title": "우분투 쿠버네티스 설치",
        "excerpt":"우분투 환경에서 쿠버네티스 설치하기(dashboard 까지)   쿠버네티스를 설치하는 방법은 OS나 사용하는 플랫폼에 따라서 달라진다.   본 포스팅에서는 우분투 환경에서 쿠버네티스를 설치하고 추가적으로 쿠버네티스 대시보드까지 설치해 보도록 하겠다.   실행 환경: Ubuntu 18.04(LTS)   도커 버전: 19.03     쿠버네티스의 한글 문서 에 보면 공식적으로 지원하는 커뮤니티와 생태계를 확인할 수 있다.   윈도우의 경우에는 Docker Desktop 을 설치하면 되겠구나 하는 생각이 들지만 나머지는 어떤걸 설치해야할지 막막해 진다.   모든 생태계 마다 설치하는 방법이 링크를 통해 설명되어 있으니 자신이 원하는 생태계를 선택하면 될 것 같다.   본인은 이중에서 ubuntu.com 에 나온 MicroK8s를 사용하여 설치 해보았다        Install the microk8s snap     $ sudo snap install microk8s --classic           Check the status     $ sudo microk8s.status --wait-ready           Turn on standard services     $ sudo microk8s.enable dns dashboard registry           MicroK8s를 통해 kubectl 명령을 다음과 같이 수행할 수 있다.  $ microk8s.kubectl  이제 kubernetes dashboad를 설치하러 가보자 대시보드 UI는 기본으로 배포되지 않기 때문에 쿠버네티스 대시보드 문서 를 참조하여 설치해 보도록 하겠다      Install kubenetes dashboard     $ microk8s.kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta4/aio/deploy/recommended.yaml           설치가 종료되면 접속을 위한 토큰을 아래 명령을 통해 미리 생성해 둔다     Bearer Token     $ microk8s.kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')          이 명령을 입력하면 아래와 같이 토큰이 나온다         Name:         admin-user-token-v57nw Namespace:    kubernetes-dashboard Labels:       &lt;none&gt; Annotations:  kubernetes.io/service-account.name: admin-user               kubernetes.io/service-account.uid: 0303243c-4040-4a58-8a47-849ee9ba79c1  Type:  kubernetes.io/service-account-token  Data ==== ca.crt:     1066 bytes namespace:  20 bytes token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXY1N253Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIwMzAzMjQzYy00MDQwLTRhNTgtOGE0Ny04NDllZTliYTc5YzEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.Z2JrQlitASVwWbc-s6deLRFVk5DWD3P_vjUFXsqVSY10pbjFLG4njoZwh8p3tLxnX_VBsr7_6bwxhWSYChp9hwxznemD5x5HLtjb16kI9Z7yFWLtohzkTwuFbqmQaMoget_nYcQBUC5fDmBHRfFvNKePh_vSSb2h_aYXa8GV5AcfPQpY7r461itme1EXHQJqv-SN-zUnguDguCTjD80pFZ_CmnSE1z9QdMHPB8hoB4V68gtswR1VLa6mSYdgPwCHauuOobojALSaMc3RH7MmFUumAgguhqAkX3Omqd3rJbYOMRuMjhANqd08piDC3aIabINX6gP5-Tuuw2svnV6NYQ   토큰이 생성되었다면 프록시 명령을 통해 대시보드를 사용할 수 있다     kubectl proxy     $ microk8s.kubectl proxy           그리고 http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/ 에 접속하여 token을 입력하면      짜잔~! 대시보드를 확인할 수 있다  ","categories": ["Ubuntu"],
        "tags": ["Ubuntu","Docker","Kubernetes","Dashboard"],
        "url": "http://localhost:4000/ubuntu/ubuntu_kubernetes_install/",
        "teaser":null},{
        "title": "신경망 아키텍처",
        "excerpt":"신경망 아키텍처  MLP  다층 퍼셉트론(multilayer perceptron, MLP)은 신경망 아키텍처의 가장 기본적인 형태로서 신경 유닛은 층층이 배열되고 인접한 네트워크 층은 전체가 모두 연결된다      Autoencoder  오토인코더 신경망(Autoencoder)의 목표값은 입력값과 동일하게 설정된다. 은닉층당 유닛 수가 점진적으로 증가하기 전에 특정 시점까지 점진적으로 감소하고, 최종 층의 차원은 입력 차원과 동일하다. 은닉층의 앞쪽 절반을 인코더(encoder) 뒤쪽 절반을 디코더(decoder)라고 한다.     VAEs  변분 오토인코더(variational autoencoders, VAEs)의 디코더 부분은 오토 인코더와 동일하고 인코더 부분에서 확률층(noise)를 추가하여 여러 샘플을 얻어서 최대 가능도로 손실함수를 도출한다      GAN  적대적 신경망(Generatice Adversarial Networks, GAN)에는 생성기 신경망과 판별기 신경망이 있다. 생성기 네트워크는 임의의 소음을 입력받아 데이터 샘플을 생성하려고 시도한다. 판별기 네트워크는 생성된 데이터를 실제 데이터와 비교하고 생성된 데이터가 가짜인지 아닌지에 대한 이진 분류 문제를 시그모이드 출력 활성화를 사용해 해결한다.      LeNet  1998년에 설계한 7단계 합성곱 네트워크로, 숫자 분류에 사용된다.      AlexNet  2012년 ILSVRC우승팀의 아키텍처. LeNet과 매우 유사한 아키텍처를 가지고 있지만, 층당 필터가 더 많고 깊다. 또한 항상 대체된 합성곱 풀링 대신 스택 합성곱을 사용한다. 작은 합성곱의 스택은 합성곱층의 하나로 된 커다란 수용 영역보다 낫다. 더 많은 비선형성과 더 적은 파라미터를 도입하기 때문이다.      ZFNet  2013년 ILSVRC 우승팀의 아키텍처. AlexNet을 향상시키기 위해 아키텍처 하이퍼 파라미터를 조정했는데, 특히 중간 합성곱층의 크기를 확장하고 첫 번째 층의 스트라이드와 필터 크기를 작게 함으로써 11x11 스트라이드 4인 AlexNet이 7x7 스트라이드 2인 ZFNet으로 변경됐다. 이렇게 시도한 이유는 첫 번째 합성곱층의 필터 크기가 작으면 많은 원본 픽셀 정보를 유지하는 데 도움이 되기 때문이다. 또한 AlexNet은 1,500만 개의 이미지에 대한 훈련을 받았지만, ZFNet은 130만 개의 이미지에 대해서만 훈련을 받았다      GoogLeNet  2014년 ILSVRC 우승팀의 아키텍처. GoogLeNet은 CNN을 사용해 인셉션층(Inception layer)이라는 새로운 아키텍처의 구성요소를 도입했다. 인셉션 층은 더 큰 합성곱을 사용하고 더 작은 정보의 이미지에도 정밀한 해상도를 유지할 수 있기 때문에 적용되었다.     VGG  2014년 ILSVRC 준우승팀의 아키텍처. VGG 네트워크는 단순함이 그 특징인데, 3x3 합성곱층만 사용해 쌓아올렸다. 부피를 줄이는 것은 Max Pooling으로 처리된다. 마지막에는 4,096개의 노드가 있는 두 개의 전체가 연결된 층에 소프트맥스 층이 이어진다. 입력에 대한 전처리는 훈련 세트에서 계산된 평균 RGB 값을 각 픽셀에서 빼는 것이다. 풀링은 일부 합성곱층을 따르는 Max Pooling에 의해 이루어 진다. 모든 합성곱층 다음에 Max Pooling이 이어지는 것은 아니다. Max Pooling은 스트라이드가 2인 2x2 픽셀 윈도에서 이루어진다. ReLU 활성화는 각각의 은닉층에서 사용된다. 필터의 수는 대부분 VGG 변형에서 깊이에 따라 증가한다. 16층은 VGG-16, 19층은 VGG-19.     ResNet  2015년 ILSVRC 우승팀의 아키텍처. 잔차 신경망(Residual Neural Network: ResNet)은 연결 건너뛰기와 배치 정규화를 사용하는 새로운 CNN 아키텍처로서 이를 통해 VGG 네트워크보다 복잡성이 낮은데도 152층의 신경망을 훈련할 수 있었다.     CapsNet  캡슐 네트워크(CapsNet)는 CNN의 스칼라 출력 함수 감지기를 벡터 출력 캡슐로 대체한다. 또 라우팅별로 Max Pooling을 사용한다     RNN  순환 신경망(recurrent neural Network, RNN)은 시퀀스를 처리하는 데 특화돼 있다. 예를 들어, 주어진 최근 시퀀스로부터 다음 시퀀스에 있는 용어를 예측하거나 한 언어에서 다른 언어로 단어의 시퀀스를 번역하려는 경우, 시퀀스 모델링을 할 필요가 있다. RNN은 아키텍처에 피드백 루프가 있다는 점에서 전방 전달 네트워크와 구별된다. 종종 RNN에는 메모리가 있다고 한다. RNN은 시간이 지남에 따라 순서대로 이전 내용을 잃기 시작한다.     LSTM  LSTM은 일반적으로 입력, 출력 및 망각 게이트를 포함해 3개 또는 4개의 게이트로 구성된다. 입력 게이트는 일반적으로 들어오는 신호 또는 입력을 수용하거나 거부해 메모리 셀 상태를 변경한다. 출력 게이트는 일반적으로 필요에 따라 다른 뉴런에 값을 전달한다. 망각 게이트는 메모리 셀의 자기 반복 연결을 제어해 필요에 따라 이전 상태를 기억하거나 잊어버린다.     NMT  신경망 기반 기계 번역(Neural Machine Translation, NMT) 시스템은 일반적으로 인코더와 디코더 두 모듈로 구성된다. 먼저 인코더로 소스 문장을 읽고 생각 벡터를 만든다. 이 벡터는 문장의 의미를 나타내는 숫자의 시퀀스로 구성된다. 디코더는 문장 벡터를 처리해 다른 타깃 언어로 번역을 출력한다. 이를 인코더-디코더 아키텍처라고 한다.     GRU  게이트 순환 유닛(Gated Recurrent Units, GRU)은 LSTM과 관련이 있다. 둘 다 게이트 정보의 다른 방법을 사용해 기울기 소멸 문제를 방지하고 장기 메모리에 저장한다. GRU에는 두 개의 게이트가 있는데, 리셋 게이트 r과 업데이트 게이트 z다 . 리셋 게이트는 새 입력을 어떻게 이전의 은닉상태와 결합할 것인지 결정하고 업데이트 게이트는 유지할 이전 상태 정보의 양을 정의한다.        출처: 딥러닝 전이학습, “위키북스”   ","categories": ["DeepLearning"],
        "tags": ["Deep Learning"],
        "url": "http://localhost:4000/deeplearning/neural-network-architecture/",
        "teaser":null},{
        "title": "5G 국제 표준의 이해",
        "excerpt":"본 포스팅은 삼성에서 제공한 5G 국제 표준의 이해를 요약 정리한 포스팅 입니다  5G NR(New Radio) 표준  표준의 정의  표준(Standardization)을 통하여 특정 국가나 사업자에게만 특화된 제품이 아니라 전세계에서 통용되는 제품을 생산할 수 있게 된다. 과거에는 국가별, 제조사별, 표준화 단체별로 제품을 개발하여 시장을 많이 점유한 기술이 사실상(De-facto) 국제표준이 되기도 했으나 최근에는 이러한 규격을 표준화하여 국제적으로 합의된 국제 표준을 사용하고 있다.                   국제 표준을 통해       R&amp;D 비용 절감       소비자는                       통신기능 주체간에 정보교환 및 신호 처리가 가능       제조사는 대량생산, 중복투자 방지, 기술이전, 가능       제조사간의 경쟁을 통해 가성비 높은 제품을 확보               Generation 구분:  각 세대를 구분 짓는 것은 새로운 서비스가 아니라, 그런 서비스를 가능하게 한 ‘기술적 혁신’ 새로운 이동통신 기술 혁신들은 바로 각 세대의 “표준”에 의해 정의되어 왔다.   5G 표준    ITU(국제 전기 통신 연합, International Telecommunication Union) 에서 비전 및 목표를 제시하고  국제 표준화 단체(3GPP) 에서 기술 표준 개발 3GPP는 전세계 이동통신 사업자, 장비 제조사, 단말 제조사, 칩 제조사 및 세계 각국의 표준화 단체와 연구기관 등 약 500여개 업체가 참여하는 최대 국제 이동통신 표준화 단체   5G 표준의 특징  1) 초 광대역 서비스 (eMBB: enhanced Mobile Broadband): 사용자당 100Mbps에서 최대 20Gbps까지 훨씬 빠른 데이터 전송속도 제공을 목표  2) 고신뢰/초저지연 통신 (URLLC: Ultra Reliable &amp; Low Latency Communications): 기존 수십 밀리 세컨드 (1ms = 1/1000 초) 걸리던 지연 시간을 1ms 수준으로 최소화하는 것을 목표  3) 대량연결 (mMTC: Machine-Type Communications): 1 km2 면적 당1백만개의 연결(connection)을 지원하는 것을 목표     4G LTE도 초기 상용화 시점(2010년 경) 당시 최대속도가 75Mbps였고 2018년에야 목표성능 1Gbps 상용이 가능 했고 5G도 마찬가지일 것으로 예상된다  4G의 주파수 대역은  6GHz 이하(Below 6GHz)였지만 28GHz와 39GHz 등 밀리미터파(mmWave)로 불리는 초고주파 대역(Above 6GHz)까지 함께 사용하게 된다       빔 포밍 기술: 많은 수의 안테나에 실리는 신호를 각각 정밀하게 제어하여 특정 방향으로 에너지를 집중시키거나 또는 반대로 특정 방향으로는 에너지가 가지 않도록 조절이 가능한 기술. 전파의 에너지를 집중시켜 거리를 늘리고 빔(Beam)간에는 간섭을 최소화 시킬 수 있다. 이렇게 예리한 빔을 계속 정확하게 추적(tracking) 해야 하는 것이 기술적 관건이 된다.         Massive MIMO: 수 많은 안테나 배열(Massive Antenna Array)을 활용하여 같은 무선 자원을 여러명이 동시에 사용하는 기술. 4G에서의 MIMO기술은 1차원(1D) 안테나 배열을 사용하였기 때문에 자유도(degree of freedom)가 낮아 수평방향(horizontal)사용자만 구분 했지만 5G에서는 수십개 이상의 안테나를 2차원(2D)으로 배치해 수직-수평(horizontal &amp; vertical)방향 모두 사용자를 구분할 수 있다.         Network Slicing: 4G에서는 Voice와 Data 서비스로 구분해서 Voice에 대해서만 별도의 Qos(Quality-of-Service)를 제공했지만, 5G에서는 네트워크 슬라이싱을 통해 각각의 Data 서비스들도 독립적인 네트워크 자원 할당이 가능하고 따라서 각 서비스별로 다른 서비스의 영향을 받지 않으면서 품질을 보장할 수 있다. 특히, 시간지연에 민감한 서비스(Mission Critical Service)들의 품질을 보장할수 있게 되어 이동통신 사업자는 특화 서비스에 대한 별도의 과금체계도 도입할 수 있다.         NSA와 SA: NAS(Non-Standalone)는 초기 상용망에 구현괄 것으로 예상되는 구조로, 단말의 이동성(mobility) 관리 등을 제어하는 제어 플레인(control plane)의 동작은 4G LTE 망을 활용하면서 사용자 플레인(User plane/Data plane)에 해당하는 데이터 트래픽은 5G 망으로 주고 받는다. SA(Standalone) 구조는 제어 채널이나 데이터 채널 모두 5G의 자체구조를 사용하는 구조이다.         표준의 Release 개념: Release는 3GPP의 시간 스케쥴이다. 이동통신 국제 표준은 단기간에 1회성으로 정해지는 것이 아니며 장기간에 걸쳐 수 차례 업그레이드 된다. 다음 세대가 나오더라도 수년정도는 이전 세대 기술이 계속 보완하여 발표(Release) 한다.      ","categories": ["Networks"],
        "tags": ["Networks","5G NR","ITU","3GPP","빔 포밍","Massive MIMO","Network Slicing","NSA","SA"],
        "url": "http://localhost:4000/networks/5g-nr-standards/",
        "teaser":null},{
        "title": "머신러닝 라이브러리",
        "excerpt":"딥러닝 어플리케이션     지도학습: 사전에 주어진 정답 데이터를 바탕으로 학습하는 머신러닝 방법, 레이블을 추정하는 분류 문제와 연속 값을 추정하는 외귀 문제 등이 있다   전이학습: 어떤 문제를 풀기 위해서 학습된 모델을 이용해서 다른 문제를 풀 모델을 구축하는 방법의 일종이다   원샷학습(one-shot lerning): 1개 또는 아주 적은 샘플만을 가지고 학습하는 머신러닝 방법의 하나   GAN: Generative Adversarial Network(적대적 생성 네트워크)의 약어. 훈련 데이터를 학습하고, 그 데이터와 닮은 새로운 데이터를 생성하는 생성모델의 일종이다   DCGAN: Deep Convolutional GAN(심층 합성곱 적대적 생성 네트워크)의 약어. GAN 중에서도 특히 여러 층의 합성곱 네트워크를 이용하는 것을 가리킨다. DCGAN으로 고해상도의 이미지 생성이 가능해졌다   텐서플로의 특징  텐서플로는 구글(Google)이 중심으로 개발하고 있는 OSS(오픈 소스 소프트웨어)의 머신러닝 라이브러리다.     방향성 비순환 그래프(DAG: Directed acyclic graph) 기반: 텐서끼리의 연산(덧셈, 곱셈)결과도 텐서가 되는 성질이 있기 때문에 복잡한 연산도 서로 화살표로 연결된 루프가 없는 네트워크로 표현할 수 있다    다양한 환경에서 동작: 기본적으로 CPU에서나 GPU에서도 같은 코드로 동작한다. 또, 파이써을 사용해서 구축한 그래프를 저장한 다음 다른 언어에서 호출할 수도 있다   분산 처리: 일반저으로 분산 처리를 잘 다루려면 매우 높은 기술력이 필요하지만, 텐서플로를 이용하면 간단히 기술할 수 있다   텐서 보드: 텐서 보드를 통해 손실함수의 경과나 중간층의 모습,  추출한 특징량의 가시화와 같은 기능이 있다   다양한 수준의 API와 에코시스템: 저수준 API에서부터 고수준 API까지 폭넓게 커버하며, 커뮤니티가 매우 큰 것 또한 장점이다 *케라스의 특징: 간단한 모듈 구성, 구축한 모델이 사이킷런(scikit-learn)과 비슷한 인터페이스를 거쳐서 학습과 평가를 실행할 수 있다 *   딥러닝 라이브러리 동향     Define and Run: 텐서플로처럼 먼저 계산그래프를 정의하고, 한꺼번에 처리하는 것을 말한다. 일반 프로그래밍 언어와 패러다임이 다르기 때문에 학습 비용이 조금 높다는 단점이 있지만, 고속화가 쉽다는 장점이 있다   Define by Run: 사전에 계산 그래프를 정의해 두지 않고, 그래프의 정의와 처리를 동시에 하는것. 처리 결과에 따라 계산 그래프를 동적으로 바꿀 수 있어서 구현을 단순하게 할 수 있다는 장점과 디버깅 시 오류 부분을 파악하기 쉽다는 장점이 있다 텐서플로도 r1.5에서 부터 Define by Run으로 기술할 수 있게 되고 있다   ONNX: 딥러닝 모델을 표현하기 위한 공통포맷이다. 아파치 MXNet, Caffe2, CNTK, Pytorch와 같은 딥러닝 라이브러리 간의 상호운용을 가능하게 한다   콜라보레이터리(Colabratory): 12시간의 제약은 있지만, GPU를 이용해서 딥러닝 모델을 구축하거나 구글 드라이브에서 코드를 공유할 수 있게 됐다   AWS SageMaker: AWS에서 제공하는 풀 관리 서비스로서 주피터 노프북을 사용한 모델 구축부터 학습, 모델의 호스팅까지 일련의 단계를 매우 쉽게 실행할 수 있다                     라이브러리       개요                       Chainer       ChanerMN를 이용하여 분산 처리를 지원                 Pytorch       페이스북이 중심이 되어 개발됨, 사용하기 쉬움                 Gluon       AWS가 지원을 표명한 MXNet의 래퍼 라이브러리              출처:  실전! 딥러닝, “위키북스”   ","categories": ["DeepLearning"],
        "tags": ["DeepLearning"],
        "url": "http://localhost:4000/deeplearning/ml-library/",
        "teaser":null}]
