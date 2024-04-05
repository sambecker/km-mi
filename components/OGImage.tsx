import { Unit, UnitValues, characterForUnit } from '@/site/unit';
import { GEIST_MONO_FAMILY } from '@/utility/font';
import colors from 'tailwindcss/colors';

export default function OGImage({
  unit,
  values,
}: {
  unit?: Unit
  values?: UnitValues,
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
          <span style={{
            color: unit === 'km' ? colors.gray[50] : colors.gray[900],
          }}>KM</span>
          <span>{characterForUnit(unit)}</span>
          <span style={{
            color: unit === 'mi' ? colors.gray[50] : colors.gray[900],
          }}>MI</span>
        </div>
        <div style={{ display: 'flex', gap: 30, position: 'relative' }}>
          {renderBox(values?.km, !values?.km, 'minutes/km')}
          {renderBox(values?.mi, !values?.mi, 'minutes/mile')}
        </div>
      </div>
    </div>
  );
}
