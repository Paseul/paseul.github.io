---
title: 머신러닝 라이브러리
layout: single
read_time: true
comments: true
related: true
categories: DeepLearning
tags:
- DeepLearning
toc: true
toc_sticky: true
toc_label: 목차
---

## 딥러닝 어플리케이션
* <span style="color:#F9E79F">**지도학습:**</span> 사전에 주어진 정답 데이터를 바탕으로 학습하는 머신러닝 방법, 레이블을 추정하는 분류 문제와 연속 값을 추정하는 외귀 문제 등이 있다
* <span style="color:#F9E79F">**전이학습:** </span>어떤 문제를 풀기 위해서 학습된 모델을 이용해서 다른 문제를 풀 모델을 구축하는 방법의 일종이다
* <span style="color:#F9E79F">**원샷학습(one-shot lerning):**</span> 1개 또는 아주 적은 샘플만을 가지고 학습하는 머신러닝 방법의 하나
* <span style="color:#F9E79F">**GAN:**</span> Generative Adversarial Network(적대적 생성 네트워크)의 약어. 훈련 데이터를 학습하고, 그 데이터와 닮은 새로운 데이터를 생성하는 생성모델의 일종이다
* <span style="color:#F9E79F">**DCGAN:**</span> Deep Convolutional GAN(심층 합성곱 적대적 생성 네트워크)의 약어. GAN 중에서도 특히 여러 층의 합성곱 네트워크를 이용하는 것을 가리킨다. DCGAN으로 고해상도의 이미지 생성이 가능해졌다

## 텐서플로의 특징
<span style="color:yellow">**텐서플로는 구글(Google)이 중심으로 개발하고 있는 OSS(오픈 소스 소프트웨어)의 머신러닝 라이브러리**</span>
* <span style="color:#F9E79F">**방향성 비순환 그래프(DAG: Directed acyclic graph) 기반:**</span> 텐서끼리의 연산(덧셈, 곱셈)결과도 텐서가 되는 성질이 있기 때문에 복잡한 연산도 서로 화살표로 연결된 루프가 없는 네트워크로 표현할 수 있다<br>
* <span style="color:#F9E79F">**다양한 환경에서 동작:**</span> 기본적으로 CPU에서나 GPU에서도 같은 코드로 동작한다. 또, 파이써을 사용해서 구축한 그래프를 저장한 다음 다른 언어에서 호출할 수도 있다
* <span style="color:#F9E79F">**분산 처리:**</span> 일반저으로 분산 처리를 잘 다루려면 매우 높은 기술력이 필요하지만, 텐서플로를 이용하면 간단히 기술할 수 있다
* <span style="color:#F9E79F">**텐서 보드:**</span> 텐서 보드를 통해 손실함수의 경과나 중간층의 모습,  추출한 특징량의 가시화와 같은 기능이 있다
* <span style="color:#F9E79F">**다양한 수준의 API와 에코시스템:**</span> 저수준 API에서부터 고수준 API까지 폭넓게 커버하며, 커뮤니티가 매우 큰 것 또한 장점이다
*케라스의 특징: 간단한 모듈 구성, 구축한 모델이 사이킷런(scikit-learn)과 비슷한 인터페이스를 거쳐서 학습과 평가를 실행할 수 있다 *

## 딥러닝 라이브러리 동향
* <span style="color:#F9E79F">**Define and Run:**</span> 텐서플로처럼 먼저 계산그래프를 정의하고, 한꺼번에 처리하는 것을 말한다. 일반 프로그래밍 언어와 패러다임이 다르기 때문에 *학습 비용이 조금 높다*는 단점이 있지만, 고속화가 쉽다는 장점이 있다
* <span style="color:#F9E79F">**Define by Run:**</span> 사전에 계산 그래프를 정의해 두지 않고, 그래프의 정의와 처리를 동시에 하는것. 처리 결과에 따라 계산 그래프를 동적으로 바꿀 수 있어서 *구현을 단순하게 할 수 있다*는 장점과 *디버깅 시 오류 부분을 파악하기 쉽다*는 장점이 있다 *텐서플로도 r1.5에서 부터 Define by Run으로 기술할 수 있게 되고 있다*
* <span style="color:#F9E79F">**Chainer:**</span> Define by Run을 제창한 라이브러리로 ChanerMN를 이용하여 분산 처리를 지원
* <span style="color:#F9E79F">**Pytorch:**</span> 페이스북이 중심이 되어 개발되었고, 사용하기 쉬워서 매우 인기있는 라이브러리가 되었다
* <span style="color:#F9E79F">**Gluon:**</span> AWS가 지원을 표명한 MXNet의 래퍼 라이브러리다
* <span style="color:#F9E79F">**ONNX:**</span> 딥러닝 모델을 표현하기 위한 공통포맷이다. 아파치 MXNet, Caffe2, CNTK, Pytorch와 같은 딥러닝 라이브러리 간의 상호운용을 가능하게 한다
* <span style="color:#F9E79F">**콜라보레이터리(Colabratory):**</span> 12시간의 제약은 있지만, GPU를 이용해서 딥러닝 모델을 구축하거나 구글 드라이브에서 코드를 공유할 수 있게 됐다
* <span style="color:#F9E79F">**AWS SageMaker:**</span> AWS에서 제공하는 풀 관리 서비스로서 주피터 노프북을 사용한 모델 구축부터 학습, 모델의 호스팅까지 일련의 단계를 매우 쉽게 실행할 수 있다

> 출처:  실전! 딥러닝, "위키북스"