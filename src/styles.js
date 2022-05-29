import styled from 'styled-components'

export const Game = styled.main`
  width: 100%;
  max-width: 100vw;
  padding: 20px 50px;
  box-sizing: border-box;
`;

export const GameHeader = styled.div`
  display: flex;
`;

export const TurnCounter = styled.div`
  margin-bottom: 30px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Cards = styled.div`

`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CardAddress = styled.div`
  width: 230px;
  font-size: 150px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Merriweather', serif;
`;

export const CardEffect = styled.div`
  background-image: url(/img/${ ({ effect }) => effect }.jpeg);
  width: 300px;
  height: 200px;
  background-position: center;
  background-size: cover;
`;

export const ButtonContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const NextTurnButton = styled.button`
  font-size: 40px;
  font-weight: 700;
`;

export const CityPlans = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 1em;
  margin-left: 50px;
`;

export const CityPlanWrapper = styled.button`
  width: 120px;
  background: transparent;
  border: 1px solid lightblue;
  padding: 0;
`;

export const PlanObjectives = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PlanPoints = styled.div`
  display: flex;
  border-top: 1px solid lightblue;
`;

export const PointsValue = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 60px;
  font-weight: 600;
  letter-spacing: -.1em;
  
  &.first {
    color: brown;
  }
  
  &.second {
    border-left: 1px solid lightblue;
  }
`;

export const Icon = styled.div`
  background-image: url(/img/${ ({ effect }) => effect }.jpeg);
  width: 50px;
  height: 50px;
  background-position: center;
  background-size: cover;
`;

export const EstatesWrapper = styled.div`
  display: flex;
`

export const Estate = styled.div`
  background: black;
  width: 10px;
  height: 10px;
  margin-right: 4px;
  
  &:last-child {
    margin-left: 0;
  }
`;

export const EstateObjective = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-size: 16px;
`;
