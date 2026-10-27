import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyUser } from '../assets/asset'

const MeetingRoom = () => {
  const {meetingId} = useParams()
  const navigate = useNavigate()
  const userdata = dummyUser;

  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false)

  const handleMeetingEnded = useCallback(() => {
    navigate('/')
  },[navigate])

  const isHost = true;

  const handleLeave = () => {

  }

  const handleEndMeeting = () => {

  }

  return (
    <div>
      
    </div>
  )
}

export default MeetingRoom
