import { CityPlanWrapper, Icon, PlanObjectives, PlanPoints, PointsValue } from "./styles";
import Estates from "./Estates";

const CityPlan = ({plan, level, handleTaken, isTaken}) => {
    const { objectives, points} = plan

    const renderObjectives = () => {
        const {bis, estate, temp, placement} = objectives;

        if (estate) {
            return <Estates estates={estate}/>
        }

        if (placement) return placement

        if (bis) return (
            <>
                <Icon effect="bis"/>
                x
                {bis}
            </>
        );

        if (temp) return (
            <>
                <Icon effect="temp"/>
                x
                {temp}
            </>
        );
    }

    return (
        <CityPlanWrapper onClick={() => handleTaken(level)} data-estate={JSON.stringify(objectives)}>
            {level}
            <PlanObjectives>
                {renderObjectives()}
            </PlanObjectives>
            <PlanPoints>
                <PointsValue className="first">
                    {!isTaken && points[0]}
                    {isTaken && '-'}
                </PointsValue>
                <PointsValue className="second">
                    {points[1]}
                </PointsValue>
            </PlanPoints>
        </CityPlanWrapper>
    )
}

export default CityPlan
