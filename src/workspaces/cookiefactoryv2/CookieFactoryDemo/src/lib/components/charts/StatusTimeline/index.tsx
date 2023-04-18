import { StatusTimeline as Chart } from '@iot-app-kit/react-components';
import type { Except } from 'type-fest';

import { BaseChart, type BaseChartProps } from '@/lib/components/charts';

import styles from './styles.module.css';

export function StatusTimeline(props: Except<BaseChartProps, 'ChartComponent'>) {
  return <BaseChart {...props} ChartComponent={Chart} className={styles.root} />;
}