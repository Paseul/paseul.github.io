---
title: 신경망 아키텍처
layout: single
read_time: true
comments: true
related: true
categories: DeepLearning
tags:
- Deep Learning
toc: true
toc_sticky: true
toc_label: 목차
---

# 신경망 아키텍처
## MLP
다층 퍼셉트론(multilayer perceptron, MLP)은 신경망 아키텍처의 가장 기본적인 형태로서 신경 유닛은 층층이 배열되고 인접한 네트워크 층은 전체가 모두 연결된다

![출처: https://missinglink.ai/guides/neural-network-concepts/perceptrons-and-multi-layer-perceptrons-the-artificial-neuron-at-the-core-of-deep-learning/](https://missinglink.ai/wp-content/uploads/2018/11/multilayer-perceptron.png)

## Autoencoder
오토인코더 신경망(Autoencoder)의 목표값은 입력값과 동일하게 설정된다. 은닉층당 유닛 수가 점진적으로 증가하기 전에 특정 시점까지 점진적으로 감소하고, 최종 층의 차원은 입력 차원과 동일하다. 은닉층의 앞쪽 절반을 인코더(encoder) 뒤쪽 절반을 디코더(decoder)라고 한다.

![출처: https://en.wikipedia.org/wiki/Autoencoder](https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Autoencoder_structure.png/350px-Autoencoder_structure.png)
## VAEs
변분 오토인코더(variational autoencoders, VAEs)의 디코더 부분은 오토 인코더와 동일하고 인코더 부분에서 확률층(noise)를 추가하여 여러 샘플을 얻어서 최대 가능도로 손실함수를 도출한다

![출처: https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73](https://miro.medium.com/max/1664/1*eRcdr8gczweQHk--1pZF9A@2x.png)

## GAN
적대적 신경망(Generatice Adversarial Networks, GAN)에는 생성기 신경망과 판별기 신경망이 있다. 생성기 네트워크는 임의의 소음을 입력받아 데이터 샘플을 생성하려고 시도한다. 판별기 네트워크는 생성된 데이터를 실제 데이터와 비교하고 생성된 데이터가 가짜인지 아닌지에 대한 이진 분류 문제를 시그모이드 출력 활성화를 사용해 해결한다. 

![출처: https://developers.google.com/machine-learning/gan/discriminator](https://developers.google.com/machine-learning/gan/images/gan_diagram_discriminator.svg)

## LeNet
1998년에 설계한 7단계 합성곱 네트워크로, 숫자 분류에 사용된다. 

![출처: https://notebooks.azure.com/rodolfoferro/projects/KerasMNIST/html/MNIST%20-%20CNN%20Model.ipynb](https://notebooks.azure.com/rodolfoferro/libraries/KerasMNIST/raw/LeNet-5.png)

## AlexNet
2012년 ILSVRC우승팀의 아키텍처. LeNet과 매우 유사한 아키텍처를 가지고 있지만, 층당 필터가 더 많고 깊다. 또한 항상 대체된 합성곱 풀링 대신 스택 합성곱을 사용한다. 작은 합성곱의 스택은 합성곱층의 하나로 된 커다란 수용 영역보다 낫다. 더 많은 비선형성과 더 적은 파라미터를 도입하기 때문이다.

![출처: Alexnet 논문](http://openresearch.ai/uploads/default/original/1X/b25dce7cb47b0a80b3631d10476a630df4b1f2ff.jpg)

## ZFNet
2013년 ILSVRC 우승팀의 아키텍처. AlexNet을 향상시키기 위해 아키텍처 하이퍼 파라미터를 조정했는데, 특히 중간 합성곱층의 크기를 확장하고 첫 번째 층의 스트라이드와 필터 크기를 작게 함으로써 11x11 스트라이드 4인 AlexNet이 7x7 스트라이드 2인 ZFNet으로 변경됐다. 이렇게 시도한 이유는 첫 번째 합성곱층의 필터 크기가 작으면 많은 원본 픽셀 정보를 유지하는 데 도움이 되기 때문이다. 또한 AlexNet은 1,500만 개의 이미지에 대한 훈련을 받았지만, ZFNet은 130만 개의 이미지에 대해서만 훈련을 받았다

![출처: ZFNet 논문](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F9937CC415AED57D7160153)

## GoogLeNet
2014년 ILSVRC 우승팀의 아키텍처. GoogLeNet은 CNN을 사용해 인셉션층(Inception layer)이라는 새로운 아키텍처의 구성요소를 도입했다. 인셉션 층은 더 큰 합성곱을 사용하고 더 작은 정보의 이미지에도 정밀한 해상도를 유지할 수 있기 때문에 적용되었다. 

![출처: GoogLeNet 논문](/assets/images/GoogLeNet.png)

## VGG
2014년 ILSVRC 준우승팀의 아키텍처. VGG 네트워크는 단순함이 그 특징인데, 3x3 합성곱층만 사용해 쌓아올렸다. 부피를 줄이는 것은 Max Pooling으로 처리된다. 마지막에는 4,096개의 노드가 있는 두 개의 전체가 연결된 층에 소프트맥스 층이 이어진다. 입력에 대한 전처리는 훈련 세트에서 계산된 평균 RGB 값을 각 픽셀에서 빼는 것이다. 풀링은 일부 합성곱층을 따르는 Max Pooling에 의해 이루어 진다. 모든 합성곱층 다음에 Max Pooling이 이어지는 것은 아니다. Max Pooling은 스트라이드가 2인 2x2 픽셀 윈도에서 이루어진다. ReLU 활성화는 각각의 은닉층에서 사용된다. 필터의 수는 대부분 VGG 변형에서 깊이에 따라 증가한다. 16층은 VGG-16, 19층은 VGG-19.

![](/assets/images/DeepLearning/VGG16.png)

## ResNet
잔차 신경망(Residual Neural Network: ResNet)

> 출처: 딥러닝 전이학습, "위키북스"