import React, { useState } from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
    width: 460px;
    overflow: hidden; /* 넘치는 부분 숨김 처리 */
    margin: 0 auto; /* 가운데 정렬 */
    position: relative; /* 부모 요소 기준으로 자식 요소의 위치를 조정하기 위해 */
`;

const SlideWrapper = styled.div`
    display: flex;
    justify-content: center; /* 이미지들을 가운데 정렬 */
    transition: transform 0.3s ease; /* 슬라이드 애니메이션 효과 */
`;

const SlideItemContainer = styled.div`
    width: 45px;
    height: 45px;
    margin-top: 20px;
    margin-right: 15px;
    cursor: pointer;
    border: 2px solid transparent; /* 테두리 설정 */
`;

const SlideItem = styled.img`
    width: 100%;
    height: 100%;
`;

const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`;

const PrevButton = styled(ArrowButton)`
    left: 0;
`;

const NextButton = styled(ArrowButton)`
    right: 0;
`;

const ImageSlider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if (props.images.length <= 5) {
            const newIndex = slideIndex === props.images.length - 1 ? 0 : slideIndex + 1;
            setSlideIndex(newIndex);
            props.onImageClick(props.images[newIndex]);
        } else {
            setSlideIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const prevSlide = () => {
        if (props.images.length <= 5) {
            const newIndex = slideIndex === 0 ? props.images.length - 1 : slideIndex - 1;
            setSlideIndex(newIndex);
            props.onImageClick(props.images[newIndex]);
        } else {
            setSlideIndex((prevIndex) => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
        }
    };

    const handleImageClick = (index) => {
        setSlideIndex(index);
        props.onImageClick(props.images[index]);
    };

    return (
        <SlideContainer>
            <SlideWrapper
                style={{ transform: `translateX(-${slideIndex * 60}px)` }} /* 슬라이드 이동 */
            >
                {props.images.map((image, index) => (
                    <SlideItemContainer 
                        key={index} 
                        onClick={() => handleImageClick(index)}
                        style={{ border: slideIndex === index ? '3px solid yellow' : '3px solid transparent' }}
                    >
                        <SlideItem src={image['itemImgUrl']} alt={`Slide ${index}`} />
                    </SlideItemContainer>
                ))}
            </SlideWrapper>
            {props.images.length >= 5 && (
                <>
                    <PrevButton onClick={prevSlide}>◀</PrevButton>
                    <NextButton onClick={nextSlide}>▶</NextButton>
                </>
            )}
        </SlideContainer>
    );
};

<<<<<<< HEAD
export default ImageSlider;
=======
export default ImageSlider;
>>>>>>> 892f209aad9ce646110b95754a6eb1363dc657df
