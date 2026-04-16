// import styled from '@emotion/styled';

// const MovieHeroWrapper = styled.div`
//   position: relative;

//   width: 100%;
//   height: 60vh;
//   max-height: 520px;

//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;

//   border-radius: 16px;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     z-index: 2;

//     border: 2px solid rgba(255, 255, 255, 0.2);
//     border-radius: 16px;

//     pointer-events: none;
//   }

//   /* затемнение фона */
//   &::after {
//     content: '';
//     position: absolute;
//     inset: 0;
//     z-index: 1;

//     background: linear-gradient(
//       to top,
//       rgba(0, 0, 0, 0.85) 15%,
//       rgba(0, 0, 0, 0.4) 50%,
//       transparent 80%
//     );
//   }

//   .movie-hero__content {
//     position: absolute;
//     z-index: 2;

//     bottom: 24px;
//     left: 24px;

//     display: flex;
//     align-items: flex-end;
//     gap: 24px;
//   }

//   .movie-hero__poster {
//     width: 160px;
//     border-radius: 12px;

//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
//   }

//   /* glass block */
//   .movie-hero__info {
//     /* backdrop-filter: blur(12px);
//     -webkit-backdrop-filter: blur(12px);

//     background: rgba(255, 255, 255, 0.08);

//     border: 1px solid rgba(255, 255, 255, 0.15);
//     border-radius: 16px;

//     padding: 16px 20px;

//     max-width: 400px; */
//   }

//   /* заголовок */
//   .movie-hero__title {
//     color: white;
//   }
// `;

// export { MovieHeroWrapper };
