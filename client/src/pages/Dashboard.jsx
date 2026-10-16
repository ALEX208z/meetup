import { PlusIcon, ShieldCheckIcon } from "lucide-react";
import { dummyStats, dummyUser } from "../assets/asset";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const user = dummyUser;
  const userName = user.fullName;
  const userEmail = user.primaryEmailAddress.emailAddress;
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const stats = dummyStats;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCreateMeeting = () => {

  };
  const handleJoinMeeting = (e) => {

  };

  return (
    <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Actions  */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 pr-6 py-2 rounded-full bg-white/25 text-xs font-medium">
              <ShieldCheckIcon size={16} />
              Secure Peer-to-Peer Encryption
            </div>
            <h1 className="text-4xl sm:text-5xl text-slate-800 leading-tight font-medium">
              High quality video calls <br />
              <span className="text-primary">Built for everyone.</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg max-w-xl leading-relaxed">
              Connect, collaborate and celebrate from anywhere with ultra-low
              latency video, screen sharing and real-time chat.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button onClick={handleCreateMeeting}
              disabled={isCreating}
              className="bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3.5 rounded-full shadow-md shadow-primary/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <PlusIcon className="w-5 h-5" />
                <span>{isCreating ? "Creating..." : "New Meeting"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Graphic & Clock Card  */}
      </div>
    </div>
  );
};

export default Dashboard;
