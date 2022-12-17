import 'eazychart-css';
import { PieChart, RadialChart, SemiCircleChart } from 'eazychart-react';
import { useState } from 'react';
import { colors, spacing } from '../../styles/styleConstants';
import CalculateResults from '../../utils/calculateResults';
import CompareSlider from '../CompareSlider';
import QueryNavigation from '../QueryNavigation';

// library for charts:

// https://www.npmjs.com/package/eazychart-react
// docs: https://docs.eazychart.com/?path=/story/6--default

function createChartDataObject(data, labels) {
  const chartData = [{}];

  data.map((item, index) => {
    chartData[index] = {
      id: `${index}`,
      name: `${labels[index]}`,
      v: 1,
      value: data[index] * 100,
    };
  });

  return chartData;
}

export default function ScreenResults(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const weightingQualities = props.weightingQualities.map((item: string) => {
    return parseInt(item);
  });

  const weightingComparison1 = props.weightingComparison1.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison2 = props.weightingComparison2.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison3 = props.weightingComparison3.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison4 = props.weightingComparison4.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison5 = props.weightingComparison5.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison6 = props.weightingComparison6.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const weightingComparison7 = props.weightingComparison7.map(
    (item: string) => {
      return parseInt(item);
    },
  );

  const result = CalculateResults(
    weightingQualities,
    props.qualities.length,
    props.alternatives.length,
    weightingComparison1,
    weightingComparison2,
    weightingComparison3,
    weightingComparison4,
    weightingComparison5,
    weightingComparison6,
    weightingComparison7,
  );

  console.log('result: ', result);

  const qualitiesChartData = createChartDataObject(
    result.qualitiesWeighting,
    props.qualities,
  );

  return (
    <>
      <section className="mainSection">
        <div className="container flexColumnCenter">
          <h2 style={{ textAlign: 'center' }}>Results</h2>
          <h3>Weighting of qualities</h3>
          <p>
            In terms of your question, this is how strongly you weighted your
            affected resources / qualities:{' '}
          </p>
          <SemiCircleChart
            colors={['#26547c', '#ef476f', '#ffd166', '#06d6a0', '#06d6d1']}
            data={qualitiesChartData}
            domainKey="value"
            padding={{
              bottom: 100,
              left: 150,
              right: 150,
              top: 100,
            }}
          />

          {/* <PieChart
            colors={['red', 'blue', 'green']}
            valueDomainKey={'value'}
            labelDomainKey={'label'}
            data={[
              { label: 'Alpha', value: 10 },
              { label: 'Beta', value: 20 },
              { label: 'Gamma', value: 30 },
            ]}
          /> */}
          <QueryNavigation
            screen={props.screen}
            setScreen={props.setScreen}
            backButton={true}
          />
        </div>
      </section>
    </>
  );
}
