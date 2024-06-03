import { Unit, characterForUnit } from '@/site/unit';
import { GEIST_MONO_FAMILY } from '@/utility/font';
import { FaAward } from 'react-icons/fa';
import colors from 'tailwindcss/colors';

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
      <div style={{
        display: 'flex',
        width: 310,
        padding: '20px 24px 22px 24px',
        lineHeight: 1,
        border: '2px solid',
        borderRadius: 12,
        fontSize: 50,
        fontWeight: 500,
        borderColor: colors.gray[800],
        color: dim ? colors.gray[800] : colors.gray[50],
      }}>
        {text ?? '00:00'}
      </div>
      <div style={{
        fontSize: 26,
        fontWeight: 600,
        color: dim ? colors.gray[800] : colors.gray[50],
        paddingLeft: 24,
      }}>
        {label}
      </div>
    </div>;

  const renderTimeBadge = (text: string, direction: 'left' | 'right') =>
    <span style={{
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      gap: 12,
      top: 0,
      ...direction === 'left' ? { left: -30 } : { right: -30 },
      fontSize: 40,
      color: colors.gray[900],
      backgroundColor: colors.gray[50],
      borderRadius: 100,
      padding: '6px 20px',

    }}>
      <FaAward style={{
        width: 28,
        height: 34,
      }} />
      <span>
        {text}
      </span>
    </span>;

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.gray[50],
        backgroundColor: colors.gray[950],
        fontFamily: GEIST_MONO_FAMILY,
        transform: 'scale(1.1)',
      }}
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
            <span style={{
              color: unit === 'km' ? colors.gray[50] : colors.gray[900],
            }}>
              KM
            </span>
            {timeBadgeLeft && renderTimeBadge(timeBadgeLeft, 'left')}
          </div>
          <span>{characterForUnit(unit)}</span>
          <div style={{
            display: 'flex',
            position: 'relative',
          }}>
            <span style={{
              color: unit === 'mi' ? colors.gray[50] : colors.gray[900],
            }}>
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
