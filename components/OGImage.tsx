import { Unit, characterForUnit } from '@/site/unit';
import { FONT_GEIST_MONO_FAMILY } from '@/utility/font';
import clsx from 'clsx/lite';
import { FaAward } from 'react-icons/fa';

export default function OGImage({
  unit,
  valueLeft,
  valueRight,
  labelLeft,
  labelRight,
  timeBadgeLeft,
  timeBadgeRight,
}: {
  unit?: Unit
  valueLeft?: string
  valueRight?: string
  labelLeft: string
  labelRight: string
  timeBadgeLeft?: string
  timeBadgeRight?: string
}) {
  const renderBox = (text = '00:00', dim: boolean, label: string) =>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}>
      <div
        style={{
          display: 'flex',
          width: 310,
          padding: '20px 24px 22px 24px',
          lineHeight: 1,
          borderRadius: 12,
          fontSize: 50,
          fontWeight: 500,
        }}
        tw={clsx(
          dim ? 'text-gray-800' : 'text-gray-50',
          'border-[2px] border-gray-800',
        )}
      >
        {text ?? '00:00'}
      </div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 600,
          paddingLeft: 24,
        }}
        tw={dim ? 'text-gray-800' : 'text-gray-50'}
      >
        {label}
      </div>
    </div>;

  const renderTimeBadge = (text: string, direction: 'left' | 'right') =>
    <span
      style={{
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        gap: 12,
        top: 0,
        ...direction === 'left' ? { left: -30 } : { right: -30 },
        fontSize: 40,
        borderRadius: 100,
        padding: '6px 20px',
      }}
      tw="text-gray-900 bg-gray-50"
    >
      <FaAward style={{
        width: 26,
        height: 34,
      }} />
      <span>
        {text}
      </span>
    </span>;

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_GEIST_MONO_FAMILY,
        transform: 'scale(1.1)',
      }}
      // 950 colors not accessible via "tw"
      tw="text-gray-50 bg-[#030712]"
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        transform: 'translateY(-14px)',
        gap: 4,
      }}>
        <div style={{
          display: 'flex',
          gap: 20,
          fontSize: 200,
          fontWeight: 600,
        }}>
          <div style={{
            display: 'flex',
            position: 'relative',
          }}>
            <span tw={unit === 'km'
              ? 'text-gray-50'
              : 'text-gray-900'}>
              KM
            </span>
            {timeBadgeLeft && renderTimeBadge(timeBadgeLeft, 'left')}
          </div>
          <span>{characterForUnit(unit)}</span>
          <div style={{
            display: 'flex',
            position: 'relative',
          }}>
            <span tw={unit === 'mi'
              ? 'text-gray-50'
              : 'text-gray-900'}>
              MI
            </span>
            {timeBadgeRight && renderTimeBadge(timeBadgeRight, 'right')}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 30, position: 'relative' }}>
          {renderBox(valueLeft, !valueLeft, labelLeft)}
          {renderBox(valueRight, !valueRight, labelRight)}
        </div>
      </div>
    </div>
  );
}
