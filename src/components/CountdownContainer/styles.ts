import PickTurn from '@/types/PickTurn';
import { TeamEnum } from '@/types/Team';
import { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  buttonStyle: {
    fontFamily: 'Exo',
    textTransform: 'capitalize',
    background: "#FB7823",
    borderRadius:'100px',
    fontWeight: '700',
    fontSize:'16px',
    lineHeight: '24px',
    height: '64px',
    width: '194px',
    boxShadow: 'none',
  },
  countdownStyle: {
    fontSize: "62px",
    lineHeight: "72px",
    height: "24px",
    textAlign: "center",
    fontFamily: "Exo",
    fontWeight: "900",
    color: "#FB7823",
    textShadow: "-4px 0px 0px #fff, 4px 0px 0px #fff, 0px -4px 0px #fff, 0px 4px 0px #fff"
  },
  titleCountdown: {
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "PT Sans",
    fontWeight: "400",
    color: "#220A3D",
    marginBottom: 8
  }
}

export function getCountdownTimeContainer (pickTurn: PickTurn): CSSProperties {
  let colorSelected = '#fff'

  switch (pickTurn.team) {
    case TeamEnum.TEAM1:
      colorSelected = '#42287F'
      break

    case TeamEnum.TEAM2:
      colorSelected = '#FB7823'
      break
  }

  return {
    borderColor: colorSelected,
    borderTopWidth: 13,
    margin: 'auto',
    color: '#000',
    width: 520,
    height: 95,
    textAlign: 'center',
    paddingTop: 11,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 64
  }
}