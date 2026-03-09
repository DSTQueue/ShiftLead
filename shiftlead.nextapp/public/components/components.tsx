

interface DayCardProps {
  day: string;
  slots: boolean[];
  onSlotClick: (slotIdx: number) => void;
}

export default function DayCard({ day, slots, onSlotClick }: DayCardProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
      <span style={{ width: 80 }}>{day}</span>
      {slots.map((active, idx) => (
        <div
          key={idx}
          onClick={() => onSlotClick(idx)}
          style={{
            width: '28px',
            height: '28px',
            margin: '0 4px',
            backgroundColor: active ? 'green' : '#111111',
            border: '1px solid #aaa',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          title={active ? 'Available' : 'Unavailable'}
        >
          <span style={{ color: 'lightgray', fontSize: '8px', textAlign: 'center', userSelect: 'none' }}>
            {(idx % 12) + 1}{idx >= 12 ? 'PM' : 'AM'}
          </span>
        </div>
      ))}
    </div>
  );
}