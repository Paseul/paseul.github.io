---
title: 우분투 도커 설치
layout: single
read_time: true
comments: true
related: true
categories:
- Ubuntu
tags:
- Ubuntu
- Docker
toc: true
toc_sticky: true
toc_label: 목차
---

# 우분투 도커 설치(이미지 폴더 변경 까지)

우분투 환경에서 도커를 설치하는 방법을 정리해 보고자 한다. 
실행 환경: Ubuntu 18.04(LTS)
도커 버전: 19.03

도커 설치 과정은  [docs.docker.com](https://docs.docker.com/install/linux/docker-ce/ubuntu/) 를 참고하여 순서대로 설명해 보겠다.

## 1. Uninstall old versions
기존에 도커가 설치되어 있다면 도커를 삭제하고 도커 폴더 역시 삭제한다.<br>
```
# 도커 삭제
$ sudo apt-get remove docker docker-engine docker.io containerd runc

# 도커 폴더 삭제
$ sudo rm -rf /var/lib/docker
```

## 2. Set up the repository 
도커 엔진을 설치하기 전에 새로운 기기에 도커 저장소를 설정하여 도커를 설치 및 업데이트 한다<br>

```
# apt 패키지 업데이트
$ sudo apt-get update

# HTTPS를 통해 저장소를 사용하기 쉬운 패키지 설치
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
		
# 도커의 공식 GPG key 추가하기(생략 가능)
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
    
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]

# 안정적인 저장소 설정하기
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

## 3. Install docker-CE
이제 도커를 설치해보자

```
# apt 패키지 업데이트 수행
$ sudo apt-get update

# 최신 도커 설치
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```


### 3.1 Install nvidia-docker2(Option) 
추가적으로 nvidia-docker를 설치한다
```
$ sudo apt-get install nvidia-docker2
$ sudo pkill -SIGHUP dockerd
```
일반적으로 도커를 사용하는데 있어서 위의 절차까지 수행하면 크게 문제가 없다. <br>
**하지만** 도커의 이미지의 크기는 매우 크기 때문에 하드드라이브가 가득 차서 더이상 설치할 수 없게 된다. <br>
그렇게 되지 않기 위하여 **도커를 사용하면서 사용하지 않는 이미지나 컨테이너를 주기적으로 관리**해 주어야 하지만 대부분의 OS가 설치된 하드는 SSD이고 용량이 상대적으로 적기 때문에 **도커 이미지 위치를 HDD로 변경**하여 사용한다 

##  4. Docker default folder change
도커 폴더 변경은 [이곳](https://yookeun.github.io/docker/2018/10/29/docker-change/) 을 참조하였다. <br> 2가지 방법이 나오는데 1번 방법(도커 실행 서비스에서 설정 변경)을 사용하였다

```/lib/systemd/system/docker.service``` 파일을 열고 아래 내용을 수정한다
```
#ExecStart=/usr/bin/dockerd -H fd://
ExecStart=/usr/bin/dockerd -g /media/username/data/docker -H fd://
```
```/media/username/data/docker``` 이 경로를 자신의 폴더 경로로 변경한다

도커를 중지하고 기본 도커 폴더의 내용을 이동
```
# 기본 폴더안의 내용을 옮기기 위해 docker를 중지
$ sudo systemctl stop docker
$ sudo systemctl daemon-reload

# 기존 도커 경로의 파일을 복사
$ sudo rsync -aqxP /var/lib/docker /media/username/data/docker
$ sudo rm -rf /var/lib/docker

# 도커 시작 및 확인
$ sudo systemctl start docker
$ ps -ef | grep docker
root      1442     1  0 11월27 ?      00:00:05 /usr/bin/dockerd -g /media/username/data/docker -H fd://
```

자신이 설정한 경로가 출력되는지 확인한다면 정상적으로 변경되었고 이제 마음것(?) 이미지를 생성할 수 있다!