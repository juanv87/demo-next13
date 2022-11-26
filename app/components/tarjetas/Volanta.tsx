interface VolantaProps {
  volanta?: string;
}
function Volanta({ volanta }: VolantaProps) {
  return (
    <>
      {volanta && <div className="volanta">{volanta}</div>}
      <style jsx>{`
        .volanta {
          text-transform: uppercase;
          color: #fff;
          position: absolute;
          top: 5px;
          left: 5px;
          z-index: 10;
          background-color: #5a5a5a;
          padding: 1px 5px;
          font-size: 12px;
        }
      `}</style>
    </>
  );
}

export default Volanta;
