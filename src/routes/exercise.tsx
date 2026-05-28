import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { PhoneShell } from "@/components/PhoneShell";
import { useStore } from "@/lib/store";
import {
  Search,
  X,
  Info,
  ChevronRight,
  Dumbbell,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Check,
  ShieldAlert,
  Sparkles,
  SlidersHorizontal,
  Clock,
  Calendar,
  Heart,
  MessageSquare,
  Bell,
  Award,
  CheckSquare,
  ArrowRight,
  Activity,
  Smile,
  Home as HomeIcon,
  User as UserIcon,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/exercise")({
  head: () => ({ meta: [{ title: "Ai Gym Exercises & Library — PulsePeak" }] }),
  component: ExercisePage,
});

interface ExerciseItem {
  id: string;
  name: string;
  category: string;
  body_part: string;
  equipment: string;
  instructions: {
    en: string;
    tr?: string;
  };
  instruction_steps?: {
    en: string[];
    tr?: string[];
  };
  muscle_group: string;
  secondary_muscles?: string[];
  target: string;
  image: string;
  gif_url: string;
}

interface ExerciseCardProps {
  ex: ExerciseItem;
  onClick: () => void;
  getIcon: (category: string, name: string) => string;
}

function ExerciseCard({ ex, onClick, getIcon }: ExerciseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const thumbUrl = `/exercises/${ex.image}`;
  const gifUrl = `/exercises/${ex.gif_url}`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-zinc-900/60 border border-zinc-805 hover:border-volt rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-volt/10 flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950/80">
        <img
          src={thumbUrl}
          alt={ex.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        {isHovered && (
          <img
            src={gifUrl}
            alt={ex.name}
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
          />
        )}

        <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[8px] font-black text-zinc-400 uppercase tracking-widest border border-zinc-800">
          {ex.category}
        </div>

        <div className="absolute bottom-2.5 right-2.5 bg-zinc-900/85 backdrop-blur-md h-7 w-7 rounded-lg flex items-center justify-center text-sm shadow-md border border-zinc-800">
          {getIcon(ex.category, ex.name)}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col justify-between space-y-1.5">
        <h4 className="text-[10px] font-black text-zinc-200 uppercase tracking-wide line-clamp-2 leading-tight group-hover:text-volt transition-colors">
          {ex.name}
        </h4>

        <div className="flex flex-wrap gap-1">
          <span className="text-[7.5px] font-extrabold uppercase tracking-wide bg-zinc-950 border border-zinc-850 text-zinc-450 px-1.5 py-0.5 rounded-md">
            {ex.equipment}
          </span>
          <span className="text-[7.5px] font-extrabold uppercase tracking-wide bg-volt/10 text-volt px-1.5 py-0.5 rounded-md">
            {ex.target}
          </span>
        </div>
      </div>
    </div>
  );
}

function ExercisePage() {
  const { state, addExercise } = useStore();

  // Screen Manager State: 'welcome' | 'home' | 'workouts' | 'schedule'
  const [activeTab, setActiveTab] = useState<"welcome" | "home" | "workouts" | "schedule">("welcome");

  // Core Workout toggle in Workouts Tab: 'session' | 'library'
  const [workoutsView, setWorkoutsView] = useState<"session" | "library">("session");

  // Exercise library states
  const [allExercises, setAllExercises] = useState<ExerciseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEquipment, setSelectedEquipment] = useState("All");
  const [selectedTarget, setSelectedTarget] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Active filters drawer
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Voice Search states
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Selected workout modal
  const [selected, setSelected] = useState<ExerciseItem | null>(null);
  const [mediaTab, setMediaTab] = useState<"youtube" | "gif">("youtube");
  const [mins, setMins] = useState(30);
  const [imgSrc, setImgSrc] = useState("");
  const [imageError, setImageError] = useState(false);

  // Speech Synthesizer states
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Timer states
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerIntervalRef = useRef<any>(null);

  // Static target list items matching Mockup Photo
  const scheduleTargets = [
    {
      id: "0032", // Barbell Deadlift
      title: "Deadlift",
      time: "30 Minutes",
      sets: "2 sets x 2 reps",
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "0025", // Barbell Bench Press (mocked as rows)
      title: "Barbell Rows",
      time: "15 Minutes",
      sets: "3 sets x 10 reps",
      img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "0294", // Dumbbell Biceps Curl
      title: "Bicep Curls",
      time: "45 Minutes",
      sets: "3 sets x 12 reps",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=100&auto=format&fit=crop&q=80",
    },
  ];

  // Checklist items
  const [checklist, setChecklist] = useState([
    { id: 1, text: "55 Minutes Legs", checked: true },
    { id: 2, text: "30 Minutes Cardio", checked: false },
    { id: 3, text: "20 Minutes Abs", checked: false },
  ]);

  const uniqueEquipments = [
    "All",
    "body weight",
    "dumbbell",
    "barbell",
    "cable",
    "leverage machine",
    "band",
    "smith machine",
    "kettlebell",
    "stability ball",
    "ez barbell",
  ];

  const uniqueTargets = [
    "All",
    "abs",
    "pectorals",
    "glutes",
    "biceps",
    "lats",
    "delts",
    "hamstrings",
    "quadriceps",
    "triceps",
    "calves",
    "forearms",
    "cardiovascular system",
  ];

  // Initialize Audio & Speech recognition APIs
  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = "en-US";

        rec.onstart = () => setIsListening(true);
        rec.onend = () => setIsListening(false);
        rec.onerror = () => setIsListening(false);
        rec.onresult = (e: any) => {
          const transcript = e.results[0][0].transcript;
          setSearchQuery(transcript);
          setWorkoutsView("library");
          setVisibleCount(12);
          toast.success(`Voice search: "${transcript}"`);
        };
        recognitionRef.current = rec;
      }
    }
  }, []);

  // Fetch exercises from public folder
  useEffect(() => {
    fetch("/exercises/data/exercises.json")
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.json();
      })
      .then((data) => {
        setAllExercises(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load local exercise dataset, loading fallbacks.", err);
        // Clean high quality fallbacks
        setAllExercises([
          {
            id: "0001",
            name: "3/4 sit-up",
            category: "waist",
            body_part: "waist",
            equipment: "body weight",
            instructions: {
              en: "Lie flat on your back with your knees bent and feet flat on the ground. Lift your torso up to a 45-degree angle. Pause, then lower.",
            },
            instruction_steps: {
              en: [
                "Lie flat on your back with your knees bent.",
                "Lift torso to a 45-degree angle.",
                "Pause, then slowly lower.",
              ],
            },
            muscle_group: "abs",
            target: "abs",
            image: "images/0001-2gPfomN.jpg",
            gif_url: "videos/0001-2gPfomN.gif",
          },
          {
            id: "0025",
            name: "barbell bench press",
            category: "chest",
            body_part: "chest",
            equipment: "barbell",
            instructions: {
              en: "Lying flat on a bench, press the barbell up from your chest until your arms are locked.",
            },
            instruction_steps: {
              en: [
                "Lie on the bench flat.",
                "Unrack the barbell.",
                "Lower the bar to your chest.",
                "Push back up explosively.",
              ],
            },
            muscle_group: "pectorals",
            target: "pectorals",
            image: "images/0025-EIeI8Vf.jpg",
            gif_url: "videos/0025-EIeI8Vf.gif",
          },
          {
            id: "0032",
            name: "barbell deadlift",
            category: "upper legs",
            body_part: "upper legs",
            equipment: "barbell",
            instructions: {
              en: "Lift a loaded barbell off the ground to hip level, keeping your back straight and core braced.",
            },
            instruction_steps: {
              en: [
                "Position feet under bar.",
                "Hinge hips and grip bar.",
                "Drive legs down and lift bar to hips.",
                "Lower under control.",
              ],
            },
            muscle_group: "glutes",
            target: "glutes",
            image: "images/0032-ila4NZS.jpg",
            gif_url: "videos/0032-ila4NZS.gif",
          },
          {
            id: "0294",
            name: "dumbbell biceps curl",
            category: "upper arms",
            body_part: "upper arms",
            equipment: "dumbbell",
            instructions: {
              en: "Stand holding dumbbells at your sides. Curl dumbbells up towards shoulders, supinating wrists.",
            },
            instruction_steps: {
              en: [
                "Stand with elbows tucked.",
                "Curl dumbbells up.",
                "Squeeze biceps at the top.",
                "Lower slowly.",
              ],
            },
            muscle_group: "biceps",
            target: "biceps",
            image: "images/0294-NbVPDMW.jpg",
            gif_url: "videos/0294-NbVPDMW.gif",
          },
        ]);
        setLoading(false);
      });
  }, []);

  const [ytVideoId, setYtVideoId] = useState<string | null>(null);
  const [loadingYt, setLoadingYt] = useState(false);

  // Set modal details & dynamic YouTube request
  useEffect(() => {
    if (selected) {
      setImgSrc(`/exercises/${selected.gif_url}`);
      setImageError(false);
      setTimeElapsed(0);
      setTimerRunning(false);
      setYtVideoId(null);
      setMediaTab("youtube");

      const youtubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      if (youtubeKey) {
        setLoadingYt(true);
        const query = `${selected.name} exercise form tutorial`;
        fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(query)}&type=video&key=${youtubeKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            const foundId = data.items?.[0]?.id?.videoId;
            if (foundId) {
              setYtVideoId(foundId);
            } else {
              setMediaTab("gif");
            }
          })
          .catch((err) => {
            console.error("YouTube tutorial search failed:", err);
            setMediaTab("gif");
          })
          .finally(() => setLoadingYt(false));
      } else {
        setMediaTab("gif");
      }

      if (synthRef.current) {
        synthRef.current.cancel();
      }
      setIsSpeaking(false);
    }
  }, [selected]);

  // Cleanups on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);

  // Timer interval loops
  useEffect(() => {
    if (timerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimeElapsed((prev) => {
          const next = prev + 1;
          if (next % 60 === 0) {
            setMins(Math.ceil(next / 60));
          }
          return next;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [timerRunning]);

  const toggleAudioCoach = () => {
    if (!synthRef.current || !selected) {
      toast.error("Audio coach is not supported on this browser.");
      return;
    }

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      toast.info("Audio coach paused.");
    } else {
      const steps = selected.instruction_steps?.en || [selected.instructions.en];
      const textToSpeak = `Starting coach for ${selected.name}. ${steps.join(". ")}. Maintain strict spinal posture.`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      synthRef.current.speak(utterance);
      setIsSpeaking(true);
      toast.success("Audio Coach online! 🎙️");
    }
  };

  const handleVoiceSearch = () => {
    if (!recognitionRef.current) {
      toast.error("Speech recognition is not supported on this browser.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const getExerciseIcon = (category: string, name: string): string => {
    const cat = category.toLowerCase();
    const n = name.toLowerCase();
    if (n.includes("walk")) return "🚶";
    if (n.includes("run") || n.includes("sprint")) return "🏃";
    if (n.includes("cycl") || n.includes("bike")) return "🚴";
    if (n.includes("swim")) return "🏊";
    if (n.includes("jump") || n.includes("skip")) return "🦘";
    if (n.includes("stretch") || n.includes("yoga")) return "🧘";
    if (cat.includes("cardio")) return "🏃";
    if (cat.includes("arm") || cat.includes("biceps") || cat.includes("triceps")) return "💪";
    if (cat.includes("leg") || cat.includes("thigh")) return "🦵";
    if (cat.includes("chest")) return "🦍";
    if (cat.includes("back")) return "🧍";
    if (cat.includes("shoulder")) return "🎽";
    if (cat.includes("waist") || cat.includes("abs")) return "🤸";
    return "🏋️";
  };

  const getExerciseKcalPerMin = (category: string): number => {
    const cat = category.toLowerCase();
    if (cat.includes("cardio")) return 11;
    if (cat.includes("chest")) return 7;
    if (cat.includes("back")) return 7;
    if (cat.includes("leg")) return 8;
    if (cat.includes("arm")) return 6;
    if (cat.includes("shoulder")) return 6;
    if (cat.includes("waist")) return 5;
    return 5;
  };

  // Workout details mapping matching visual styling
  const categoriesList = [
    {
      id: "strength",
      title: "Power Lifting",
      tag: "Overs Range",
      icon: "🏋️",
      category: "Upper Legs",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "cardio",
      title: "Dynamic Cardio",
      tag: "Lenn Range",
      icon: "🏃",
      category: "Cardio",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "waist",
      title: "High Workouts",
      tag: "Earn 3 Range",
      icon: "🤸",
      category: "Waist",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "arms",
      title: "High Perfaxity",
      tag: "Exit Range",
      icon: "💪",
      category: "Upper Arms",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "chest",
      title: "Chest Master",
      tag: "Pect Range",
      icon: "🦍",
      category: "Chest",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: "flexibility",
      title: "Mind & Body",
      tag: "Stretch Range",
      icon: "🧘",
      category: "Back",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop&q=80",
    },
  ];

  // Dynamic filter query on 1,324 exercise dataset
  const filteredExercises = allExercises.filter((ex) => {
    const matchesSearch =
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.equipment.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      ex.category.toLowerCase() === selectedCategory.toLowerCase() ||
      ex.body_part.toLowerCase() === selectedCategory.toLowerCase();

    const matchesEquipment =
      selectedEquipment === "All" ||
      ex.equipment.toLowerCase() === selectedEquipment.toLowerCase();

    const matchesTarget =
      selectedTarget === "All" ||
      ex.target.toLowerCase() === selectedTarget.toLowerCase();

    return matchesSearch && matchesCategory && matchesEquipment && matchesTarget;
  });

  const launchTargetExercise = (exerciseId: string) => {
    const found = allExercises.find((e) => e.id === exerciseId);
    if (found) {
      setSelected(found);
      toast.success(`Loaded target ${found.name}! 🏋️`);
    } else {
      // Fallback details if not fully loaded yet
      const fallbackMap: Record<string, Partial<ExerciseItem>> = {
        "0032": {
          id: "0032",
          name: "barbell deadlift",
          category: "upper legs",
          body_part: "upper legs",
          equipment: "barbell",
          instructions: { en: "Lift loaded barbell from floor keeping back aligned." },
          target: "glutes",
          image: "images/0032-ila4NZS.jpg",
          gif_url: "videos/0032-ila4NZS.gif",
        },
        "0025": {
          id: "0025",
          name: "barbell bench press",
          category: "chest",
          body_part: "chest",
          equipment: "barbell",
          instructions: { en: "Lower bar to chest and drive back up flat." },
          target: "pectorals",
          image: "images/0025-EIeI8Vf.jpg",
          gif_url: "videos/0025-EIeI8Vf.gif",
        },
        "0294": {
          id: "0294",
          name: "dumbbell biceps curl",
          category: "upper arms",
          body_part: "upper arms",
          equipment: "dumbbell",
          instructions: { en: "Curl weights to shoulders while keeping elbows tucked." },
          target: "biceps",
          image: "images/0294-NbVPDMW.jpg",
          gif_url: "videos/0294-NbVPDMW.gif",
        },
      };

      const customFallback = fallbackMap[exerciseId];
      if (customFallback) {
        setSelected(customFallback as ExerciseItem);
        toast.info(`Loaded target session!`);
      } else {
        toast.error("Connecting to local database... Try again.");
      }
    }
  };

  return (
    <PhoneShell>
      {/* Visual CSS Accent Tokens for Volt Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .bg-volt {
          background-color: #ccff00 !important;
        }
        .text-volt {
          color: #ccff00 !important;
        }
        .border-volt {
          border-color: #ccff00 !important;
        }
        .focus-within-volt:focus-within {
          border-color: #ccff00 !important;
          box-shadow: 0 0 14px rgba(204, 255, 0, 0.28) !important;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />

      {/* Screen View Render Pipeline */}
      <div className="flex-grow flex flex-col min-h-0 bg-zinc-950 text-white relative">
        
        {/* ==============================================
            SCREEN 1: WELCOME TAB
            ============================================== */}
        {activeTab === "welcome" && (
          <div 
            className="flex-grow flex flex-col justify-between p-6 relative overflow-hidden bg-cover bg-center animate-fade-in"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 20%, rgba(9,9,11,0.92) 80%), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80')` 
            }}
          >
            {/* Header Branding */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-volt" />
                <span className="font-display text-base font-black italic tracking-widest text-white">
                  FITNEST
                </span>
              </div>
            </div>

            {/* Bottom Actions and Copy */}
            <div className="space-y-6 mb-8 text-left">
              <div className="space-y-2">
                <h1 className="font-display text-4xl font-extrabold tracking-tight leading-tight uppercase italic text-white">
                  Get Stronger <br />
                  Every Day
                </h1>
                <p className="text-[11px] text-zinc-400 max-w-[270px] leading-relaxed">
                  Personalized workouts, live tracking, and trainer support — all in one app.
                </p>
              </div>

              {/* Smartwatch visual dots indicators */}
              <div className="flex gap-1 items-center">
                <span className="h-1 w-3 rounded-full bg-zinc-700" />
                <span className="h-1 w-6 rounded-full bg-volt" />
                <span className="h-1 w-3 rounded-full bg-zinc-700" />
              </div>

              {/* Interactive buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("home");
                    toast.success("Welcome Eugene! Profile loaded ⚡");
                  }}
                  className="w-full bg-volt hover:bg-[#b0db00] text-black py-4 rounded-3xl font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition active:scale-95 shadow-lg cursor-pointer"
                >
                  <span>Start Training</span>
                  <ArrowRight className="h-4 w-4 stroke-[3px]" />
                </button>
                
                <button
                  type="button"
                  onClick={() => toast.success("Connecting with PulsePeak Smartwatch... 📲")}
                  className="w-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-800 py-4 rounded-3xl font-display font-bold text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer"
                >
                  Connect Smartwatch
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================
            SCREEN 2: DASHBOARD HOME
            ============================================== */}
        {activeTab === "home" && (
          <div className="flex-grow flex flex-col min-h-0 bg-zinc-950 overflow-y-auto pb-24 scrollbar-none animate-fade-in">
            {/* Top Navigation & Profile */}
            <div className="px-5 pt-6 pb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Eugene avatar"
                  className="h-10 w-10 rounded-full border border-zinc-800 object-cover"
                />
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Welcome back</p>
                  <p className="text-sm font-black text-white capitalize leading-tight">Eugene</p>
                </div>
              </div>
              <button 
                onClick={() => toast.info("Your notifications are completely up to date! 🔔")}
                className="h-9 w-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <Bell className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Calories Burned visual gauge card */}
            <div className="px-5 mt-3">
              <div className="rounded-3xl bg-volt p-5 text-black relative overflow-hidden flex justify-between items-center shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5">
                    <Activity className="h-4.5 w-4.5 text-black" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-zinc-800">Calories Burned</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-800">Your Daily Calories</p>
                    <p className="text-3xl font-black italic tracking-tighter mt-1">3,250 <span className="text-[11px] font-bold tracking-normal uppercase">kcal</span></p>
                  </div>
                </div>

                {/* Semicircular progress gauge representation using custom styles */}
                <div className="relative h-20 w-32 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-180" viewBox="0 0 100 50">
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#87b000"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="125"
                      strokeDashoffset="35"
                    />
                  </svg>
                  <div className="absolute bottom-1 text-center">
                    <span className="text-[9px] font-black uppercase text-zinc-850">80% Burned</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Heart Rate / Workout Time Row */}
            <div className="px-5 mt-4 grid grid-cols-2 gap-3.5">
              <div className="bg-zinc-900 border border-zinc-850 p-4 rounded-3xl flex flex-col justify-between h-24">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Heart Rate</span>
                  <div className="h-6 w-6 rounded-full bg-volt/10 flex items-center justify-center">
                    <Heart className="h-3 w-3 text-volt fill-volt animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight text-white">112 <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Bpm</span></p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-850 p-4 rounded-3xl flex flex-col justify-between h-24">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Workout Time</span>
                  <div className="h-6 w-6 rounded-full bg-volt/10 flex items-center justify-center">
                    <Clock className="h-3 w-3 text-volt" />
                  </div>
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight text-white">5h 40m <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">this week</span></p>
                </div>
              </div>
            </div>

            {/* Trainer Section */}
            <div className="px-5 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Trainer</h3>
                <button
                  type="button"
                  onClick={() => toast.info("Opening Coaches Panel... 🧑‍🏫")}
                  className="text-[10px] font-bold text-volt uppercase hover:underline cursor-pointer"
                >
                  See All
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-850 rounded-3xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&auto=format&fit=crop&q=80"
                    alt="Coach Alex"
                    className="h-11 w-11 rounded-2xl object-cover border border-zinc-800"
                  />
                  <div>
                    <p className="text-[11px] font-black text-white">Coach Alex</p>
                    <p className="text-[8.5px] font-extrabold text-volt uppercase tracking-wider mt-0.5">New Feedback Available</p>
                  </div>
                </div>
                <button 
                  onClick={() => toast.success("Message Coach Alex: 'Great form today Eugene!' 💬")}
                  className="h-8 w-8 rounded-full bg-volt hover:bg-[#b0db00] flex items-center justify-center text-black shadow active:scale-95 transition"
                >
                  <MessageSquare className="h-3.5 w-3.5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Today Exercise section */}
            <div className="px-5 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Today Exercise</h3>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("workouts");
                    setWorkoutsView("session");
                  }}
                  className="text-[10px] font-bold text-volt uppercase hover:underline cursor-pointer"
                >
                  See All
                </button>
              </div>

              <div className="rounded-3xl border border-zinc-850 bg-gradient-to-r from-zinc-900 to-zinc-950 p-4.5 flex items-center justify-between relative overflow-hidden shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=450&auto=format&fit=crop&q=80')` }}
                />
                <div className="relative z-10 space-y-2.5">
                  <span className="text-[8px] uppercase tracking-widest text-volt font-black bg-volt/10 border border-volt/20 px-2 py-0.5 rounded-md inline-block">
                    Mid-Level
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-black uppercase tracking-wide">Chest Day</h4>
                    <p className="text-[9px] text-zinc-400 mt-0.5 leading-tight">Power and definition in every rep.</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] text-volt font-black uppercase bg-zinc-950/70 py-1 px-2.5 border border-zinc-800 rounded-lg w-max">
                    <Clock className="h-3 w-3" />
                    <span>45 Minutes</span>
                  </div>
                </div>

                <button 
                  onClick={() => launchTargetExercise("0025")}
                  className="h-11 w-11 rounded-full bg-volt hover:bg-[#b0db00] flex items-center justify-center text-black z-10 active:scale-95 transition relative shadow-lg"
                >
                  <Play className="h-4.5 w-4.5 fill-black ml-0.5" />
                </button>
              </div>
            </div>

            {/* Scheduled Section */}
            <div className="px-5 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Scheduled</h3>
                <button
                  type="button"
                  onClick={() => setActiveTab("schedule")}
                  className="text-[10px] font-bold text-volt uppercase hover:underline cursor-pointer"
                >
                  All Schedules
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-850 rounded-3xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-2xl bg-zinc-950 flex items-center justify-center border border-zinc-800 text-volt">
                    <Dumbbell className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-white">Bench Press</p>
                    <p className="text-[8.5px] font-extrabold text-zinc-500 uppercase tracking-widest mt-0.5">Today, 7:00 PM</p>
                  </div>
                </div>
                
                {/* Visual active alarm indicator switch */}
                <button 
                  onClick={() => toast.success("Bench Press Reminder is set active! 🔔")}
                  className="h-8 px-3 rounded-full bg-volt/10 border border-volt/20 text-[9px] font-black text-volt uppercase tracking-wider flex items-center gap-1 active:scale-95 transition"
                >
                  <Bell className="h-3 w-3" />
                  <span>ON</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================
            SCREEN 3: WORKOUT DETAIL / EXERCISES
            ============================================== */}
        {activeTab === "workouts" && (
          <div className="flex-grow flex flex-col min-h-0 bg-zinc-950 overflow-y-auto pb-24 scrollbar-none animate-fade-in">
            {/* Coach Xander Hero Header Banner */}
            <div 
              className="h-56 relative bg-cover bg-center flex flex-col justify-end p-5 shrink-0"
              style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(9,9,11,0.96)), url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=450&auto=format&fit=crop&q=80')` 
              }}
            >
              <div className="flex justify-between items-end relative z-10">
                <div className="space-y-1">
                  <p className="text-[8.5px] text-zinc-500 uppercase tracking-widest font-bold">Coach Xander</p>
                  <h2 className="font-display text-xl font-black uppercase italic tracking-wide text-white">Core Workout</h2>
                  
                  {/* Category Pills */}
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[8px] font-extrabold uppercase bg-zinc-950/70 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5 text-volt" />
                      50 MIN
                    </span>
                    <span className="text-[8px] font-extrabold uppercase bg-volt/15 text-volt border border-volt/20 px-2 py-0.5 rounded-md">
                      Chest, Triceps
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => launchTargetExercise("0001")}
                  className="h-10 w-10 rounded-full bg-volt hover:bg-[#b0db00] flex items-center justify-center text-black active:scale-95 transition shadow-lg shrink-0"
                >
                  <Play className="h-4 w-4 fill-black ml-0.5" />
                </button>
              </div>
            </div>

            {/* Toggle View: Xander Session vs Full Database Library */}
            <div className="px-5 mt-4">
              <div className="bg-zinc-950 p-1.5 rounded-2xl border border-zinc-900 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setWorkoutsView("session")}
                  className={`py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition ${
                    workoutsView === "session"
                      ? "bg-volt text-black"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  📋 Xander's Session
                </button>
                <button
                  type="button"
                  onClick={() => setWorkoutsView("library")}
                  className={`py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition ${
                    workoutsView === "library"
                      ? "bg-volt text-black"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  📚 1,324 Exercises
                </button>
              </div>
            </div>

            {/* View 1: Coach Xander Core Session */}
            {workoutsView === "session" && (
              <div className="px-5 mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">List of Exercise</h3>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">8 sets x 3 reps</span>
                </div>

                {/* Session exercises items matching photo exactly */}
                <div className="space-y-3">
                  <div 
                    onClick={() => launchTargetExercise("0001")}
                    className="bg-zinc-900/60 border border-zinc-850 hover:border-zinc-800 p-2.5 rounded-2xl flex items-center justify-between cursor-pointer group transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="/exercises/images/0001-2gPfomN.jpg"
                        alt="Seated Knee Raise"
                        className="h-12 w-16 rounded-xl object-cover border border-zinc-800"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&auto=format&fit=crop&q=80";
                        }}
                      />
                      <div>
                        <p className="text-[10px] font-black text-white group-hover:text-volt transition-colors">Seated Knee Raise</p>
                        <p className="text-[8.5px] font-bold text-zinc-500 mt-0.5">15 Reps</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-650 group-hover:text-volt transition-colors" />
                  </div>

                  <div 
                    onClick={() => launchTargetExercise("0001")}
                    className="bg-zinc-900/60 border border-zinc-850 hover:border-zinc-800 p-2.5 rounded-2xl flex items-center justify-between cursor-pointer group transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&auto=format&fit=crop&q=80"
                        alt="Side Plank Crunch"
                        className="h-12 w-16 rounded-xl object-cover border border-zinc-800"
                      />
                      <div>
                        <p className="text-[10px] font-black text-white group-hover:text-volt transition-colors">Side Plank Crunch</p>
                        <p className="text-[8.5px] font-bold text-zinc-500 mt-0.5">12 Reps</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-650 group-hover:text-volt transition-colors" />
                  </div>

                  <div 
                    onClick={() => launchTargetExercise("0025")}
                    className="bg-zinc-900/60 border border-zinc-850 hover:border-zinc-800 p-2.5 rounded-2xl flex items-center justify-between cursor-pointer group transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="/exercises/images/0025-EIeI8Vf.jpg"
                        alt="Flat Bench Press"
                        className="h-12 w-16 rounded-xl object-cover border border-zinc-800"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=100&auto=format&fit=crop&q=80";
                        }}
                      />
                      <div>
                        <p className="text-[10px] font-black text-white group-hover:text-volt transition-colors">Bench Chest Press</p>
                        <p className="text-[8.5px] font-bold text-zinc-500 mt-0.5">10 Reps</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-650 group-hover:text-volt transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Complete 1,324 Database search/filter library */}
            {workoutsView === "library" && (
              <div className="px-5 mt-5 space-y-4">
                {/* Search Bar Panel */}
                <div className="relative flex items-center gap-2">
                  <div className="relative flex-1 focus-within-volt rounded-2xl overflow-hidden transition-all duration-200">
                    <Search className="absolute left-4 top-3.5 h-4 w-4 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search 1,324 exercises, equipment..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setVisibleCount(12);
                      }}
                      className="w-full pl-11 pr-10 py-3.5 bg-zinc-900 border border-zinc-805 text-xs text-white placeholder:text-zinc-500 outline-none focus:outline-none transition"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-3.5 text-zinc-500 hover:text-white"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setShowFilterDrawer(true)}
                    className={`p-3.5 rounded-2xl border transition active:scale-95 cursor-pointer ${
                      selectedCategory !== "All" || selectedEquipment !== "All" || selectedTarget !== "All"
                        ? "bg-volt/15 border-volt text-volt"
                        : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-400"
                    }`}
                    title="Filters"
                  >
                    <SlidersHorizontal className="h-4.5 w-4.5" />
                  </button>

                  <button
                    onClick={handleVoiceSearch}
                    className={`p-3.5 rounded-2xl border transition active:scale-95 ${
                      isListening
                        ? "bg-red-500/10 border-red-500/30 text-red-500 animate-pulse"
                        : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-400"
                    }`}
                    title="Voice search"
                  >
                    {isListening ? <MicOff className="h-4.5 w-4.5" /> : <Mic className="h-4.5 w-4.5" />}
                  </button>
                </div>

                {/* Categories selector block */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Categories</h4>
                  <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none">
                    {["All", "Upper Legs", "Cardio", "Waist", "Upper Arms", "Chest", "Back", "Shoulders"].map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setVisibleCount(12);
                          }}
                          className={`px-3.5 py-1.5 rounded-xl border text-[9px] font-black uppercase tracking-wider shrink-0 transition ${
                            isActive
                              ? "bg-volt border-volt text-black"
                              : "bg-zinc-900 border-zinc-850 text-zinc-400"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2-Column Catalog Grid */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-t border-zinc-900 pt-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-450">Exercise Library</h4>
                    <span className="text-[8px] uppercase bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
                      {filteredExercises.length} items
                    </span>
                  </div>

                  {loading ? (
                    <div className="py-12 text-center text-xs text-zinc-500 animate-pulse flex flex-col items-center gap-1">
                      <Sparkles className="h-5 w-5 text-volt animate-spin" />
                      <p>Loading database...</p>
                    </div>
                  ) : filteredExercises.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-zinc-850 bg-zinc-900/30 py-12 text-center text-xs text-zinc-500">
                      No exercises match your queries.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3.5">
                        {filteredExercises.slice(0, visibleCount).map((ex) => (
                          <ExerciseCard
                            key={ex.id}
                            ex={ex}
                            onClick={() => setSelected(ex)}
                            getIcon={getExerciseIcon}
                          />
                        ))}
                      </div>

                      {filteredExercises.length > visibleCount && (
                        <button
                          onClick={() => setVisibleCount((prev) => prev + 12)}
                          className="w-full py-3.5 rounded-2xl border border-zinc-900 bg-zinc-900/40 hover:bg-zinc-900 text-[10px] font-black text-zinc-400 hover:text-volt transition active:scale-95 cursor-pointer uppercase tracking-wider"
                        >
                          Load More ({filteredExercises.length - visibleCount} left)
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==============================================
            SCREEN 4: SCHEDULE TARGETS
            ============================================== */}
        {activeTab === "schedule" && (
          <div className="flex-grow flex flex-col min-h-0 bg-zinc-950 overflow-y-auto pb-24 scrollbar-none animate-fade-in">
            {/* Header */}
            <div className="px-5 pt-6 pb-2.5 flex items-center justify-between">
              <h2 className="font-display text-xl font-black uppercase tracking-wide">Schedule</h2>
              <button 
                onClick={() => toast.success("Opening workout calendar scheduler... 🗓️")}
                className="text-[10px] font-extrabold text-volt uppercase hover:underline tracking-wider cursor-pointer"
              >
                Add Workout
              </button>
            </div>

            {/* Horizontal Day Calendar Picker */}
            <div className="px-5 mt-2.5">
              <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none justify-between">
                {[
                  { day: "18", label: "MON" },
                  { day: "19", label: "TUE" },
                  { day: "20", label: "WED", active: true },
                  { day: "21", label: "THU" },
                  { day: "22", label: "FRI" },
                  { day: "23", label: "SAT" },
                ].map((item) => (
                  <div
                    key={item.day}
                    onClick={() => toast.success(`Switched target view to Wed Sept ${item.day}!`)}
                    className={`h-14 w-11 shrink-0 rounded-2xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                      item.active
                        ? "bg-volt border-volt text-black"
                        : "bg-zinc-900 border-zinc-850 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    <span className="text-[11px] font-black">{item.day}</span>
                    <span className="text-[7.5px] font-black uppercase tracking-widest mt-1 opacity-70">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today Target's header */}
            <div className="px-5 mt-6 space-y-3.5">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-450">Today Target's</h3>
                  <span className="text-[8.5px] text-zinc-500 uppercase tracking-widest font-black block mt-0.5">Wednesday, Sept 20</span>
                </div>
                <button 
                  onClick={() => toast.info("Viewing complete fitness targets catalog... 🏋️")}
                  className="text-[10px] font-bold text-volt uppercase hover:underline cursor-pointer"
                >
                  See All
                </button>
              </div>

              {/* Targets List matching Mockup Screen exactly */}
              <div className="space-y-3">
                {scheduleTargets.map((tgt) => (
                  <div 
                    key={tgt.id}
                    className="bg-zinc-900 border border-zinc-850 p-3.5 rounded-3xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-2xl bg-zinc-950 flex items-center justify-center border border-zinc-800 text-volt">
                        <Dumbbell className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-white capitalize">{tgt.title}</p>
                        <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">{tgt.time} · {tgt.sets}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => launchTargetExercise(tgt.id)}
                      className="bg-volt hover:bg-[#b0db00] text-black text-[9px] font-black px-4.5 py-2.5 rounded-2xl uppercase tracking-wider transition active:scale-95 shadow cursor-pointer"
                    >
                      Start Workout
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps Count Progress Widget */}
            <div className="px-5 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-450">Steps</h3>
                <button 
                  onClick={() => toast.success("Step counter sync complete! 🚶")}
                  className="text-[10px] font-extrabold text-volt uppercase tracking-wider cursor-pointer"
                >
                  See All
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-850 rounded-3xl p-4.5 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-black italic tracking-tighter text-white">11 000 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">/ 15 000</span></span>
                  <span className="text-[8.5px] uppercase tracking-widest font-black text-volt">73% Completed</span>
                </div>
                {/* Volt Steps Progress Bar */}
                <div className="w-full bg-zinc-950 h-3 rounded-full overflow-hidden border border-zinc-850 relative">
                  <div className="bg-volt h-full rounded-full transition-all duration-500" style={{ width: "73%" }} />
                  <span className="absolute top-0.5 right-2 text-[6px] font-black text-white">🚶</span>
                </div>
              </div>
            </div>

            {/* Workout Checklist Widget */}
            <div className="px-5 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-450">Workout Checklist</h3>
                <button 
                  onClick={() => toast.success("Dynamic list updated! Add, complete, and track in real-time.")}
                  className="text-[10px] font-bold text-volt uppercase hover:underline cursor-pointer"
                >
                  See All
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-850 rounded-3xl p-3.5 space-y-2.5">
                {checklist.map((chk) => (
                  <div
                    key={chk.id}
                    onClick={() => {
                      setChecklist(prev =>
                        prev.map((item) => (item.id === chk.id ? { ...item, checked: !item.checked } : item))
                      );
                      toast.success(`Checklist step: '${chk.text}' status updated!`);
                    }}
                    className="flex items-center justify-between p-1.5 hover:bg-zinc-950/30 rounded-xl cursor-pointer transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center border transition-all ${
                        chk.checked ? "bg-volt border-volt text-black" : "border-zinc-700 bg-transparent text-transparent"
                      }`}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className={`text-[10.5px] font-extrabold uppercase tracking-wide transition ${
                        chk.checked ? "text-zinc-550 line-through" : "text-white"
                      }`}>
                        {chk.text}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-zinc-500">⏰ {chk.id === 1 ? "55M" : chk.id === 2 ? "30M" : "20M"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ==============================================
          FIXED FOOTER NAVIGATION TAB BAR
          ============================================== */}
      {activeTab !== "welcome" && (
        <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/92 backdrop-blur-md border-t border-zinc-900 py-3.5 px-6 flex justify-between items-center z-40">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === "home" ? "text-volt scale-105" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <HomeIcon className="h-4.5 w-4.5" />
            <span className="text-[7.5px] font-extrabold uppercase tracking-widest">Home</span>
          </button>

          <button
            onClick={() => setActiveTab("workouts")}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === "workouts" ? "text-volt scale-105" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Dumbbell className="h-4.5 w-4.5" />
            <span className="text-[7.5px] font-extrabold uppercase tracking-widest">Workouts</span>
          </button>

          <button
            onClick={() => setActiveTab("schedule")}
            className={`flex flex-col items-center gap-1 transition ${
              activeTab === "schedule" ? "text-volt scale-105" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Calendar className="h-4.5 w-4.5" />
            <span className="text-[7.5px] font-extrabold uppercase tracking-widest">Schedule</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("welcome");
              toast.info("Welcome details loaded!");
            }}
            className={`flex flex-col items-center gap-1 transition ${
              (activeTab as string) === "welcome" ? "text-volt scale-105" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <UserIcon className="h-4.5 w-4.5" />
            <span className="text-[7.5px] font-extrabold uppercase tracking-widest">Profile</span>
          </button>
        </div>
      )}

      {/* Advanced Filter Drawer slide-up */}
      {showFilterDrawer && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-zinc-950/75 backdrop-blur-sm p-0 animate-fade-in"
          onClick={() => setShowFilterDrawer(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-t-3xl bg-zinc-900 border border-zinc-850 p-5 flex flex-col max-h-[70vh] overflow-y-auto"
          >
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-zinc-800 block" />

            <div className="flex items-center justify-between border-b border-zinc-850 pb-3">
              <h3 className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                <SlidersHorizontal className="h-4 w-4 text-volt" />
                <span>Filter Library</span>
              </h3>
              <button
                onClick={() => setShowFilterDrawer(false)}
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-1.5 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-5">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-2">Equipment Type</p>
                <div className="flex flex-wrap gap-1.5">
                  {uniqueEquipments.map((equip) => {
                    const isActive = selectedEquipment === equip;
                    return (
                      <button
                        key={equip}
                        onClick={() => {
                          setSelectedEquipment(equip);
                          setVisibleCount(12);
                        }}
                        className={`text-[9px] font-extrabold uppercase px-2.5 py-1.5 rounded-lg border transition ${
                          isActive
                            ? "bg-volt text-black border-volt font-black"
                            : "bg-zinc-950 border-zinc-850 text-zinc-450 hover:border-zinc-700"
                        }`}
                      >
                        {equip}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-2">Target Muscle Group</p>
                <div className="flex flex-wrap gap-1.5">
                  {uniqueTargets.map((target) => {
                    const isActive = selectedTarget === target;
                    return (
                      <button
                        key={target}
                        onClick={() => {
                          setSelectedTarget(target);
                          setVisibleCount(12);
                        }}
                        className={`text-[9px] font-extrabold uppercase px-2.5 py-1.5 rounded-lg border transition ${
                          isActive
                            ? "bg-volt text-black border-volt font-black"
                            : "bg-zinc-950 border-zinc-850 text-zinc-450 hover:border-zinc-700"
                        }`}
                      >
                        {target}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowFilterDrawer(false)}
              className="w-full mt-6 rounded-2xl bg-volt text-black py-3.5 font-display font-black text-xs shadow-glow active:scale-95 transition uppercase tracking-wider cursor-pointer"
            >
              Apply Filter Selection
            </button>
          </div>
        </div>
      )}

      {/* Slide-Up Exercise Detail & Log Modal with Video Demonstration */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-zinc-950/75 backdrop-blur-sm p-0 sm:p-4 text-white animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-t-3xl sm:rounded-3xl bg-zinc-900 border border-zinc-800 shadow-glow p-5 flex flex-col max-h-[85vh] overflow-y-auto"
          >
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-zinc-800 block sm:hidden" />

            <div className="flex items-start justify-between">
              <div>
                <span className="text-[8px] uppercase tracking-widest text-volt font-black bg-volt/10 border border-volt/20 px-2.5 py-0.5 rounded-md">
                  {selected.category}
                </span>
                <p className="font-display text-base font-extrabold mt-1.5 capitalize text-white leading-tight">
                  {selected.name}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-1.5 text-zinc-400 hover:text-white active:scale-95 transition cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Media Selector Tabs (YouTube Video vs Animation GIF) */}
            <div className="flex gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-850 mt-4">
              <button
                onClick={() => setMediaTab("youtube")}
                disabled={loadingYt}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition ${
                  mediaTab === "youtube"
                    ? "bg-volt text-black font-black"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                🎥 Video Tutorial
              </button>
              <button
                onClick={() => setMediaTab("gif")}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition ${
                  mediaTab === "gif"
                    ? "bg-volt text-black font-black"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                👾 Animation GIF
              </button>
            </div>

            {/* Media Player Viewport */}
            <div className="mt-3 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center relative shadow-inner">
              {loadingYt ? (
                <div className="flex flex-col items-center gap-2 text-zinc-500 animate-pulse">
                  <Sparkles className="h-8 w-8 text-volt animate-spin" />
                  <p className="text-[10px] font-bold">Searching YouTube tutorials...</p>
                </div>
              ) : mediaTab === "youtube" && ytVideoId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${ytVideoId}`}
                  title="Workout Video demonstration player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : !imageError ? (
                <img
                  src={imgSrc}
                  alt={selected.name}
                  onError={() => {
                    if (imgSrc !== `/exercises/${selected.image}`) {
                      setImgSrc(`/exercises/${selected.image}`);
                    } else {
                      setImageError(true);
                    }
                  }}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-zinc-550 p-4">
                  <ShieldAlert className="h-8 w-8 text-amber-500 animate-bounce" />
                  <p className="text-[10px] font-bold text-center">
                    Video demonstration offline or not found
                  </p>
                </div>
              )}

              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-black text-white uppercase tracking-wider flex items-center gap-1">
                <Play className="h-2.5 w-2.5 fill-volt text-volt" />
                <span>{mediaTab === "youtube" && ytVideoId ? "YouTube Live Demo" : "Animation Demo"}</span>
              </div>
            </div>

            {/* Targets Muscles Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-left">
              <div className="rounded-xl border border-zinc-850 bg-zinc-950/30 p-2.5">
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">
                  Primary Muscles
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="text-[10px] font-black text-volt capitalize">
                    {selected.target}
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-950/30 p-2.5">
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">
                  Synergy / Secondary
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="text-[10px] font-bold text-zinc-300 capitalize truncate">
                    {selected.muscle_group || "none"}
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-2 text-center mt-3 text-white">
              <div className="rounded-xl border border-zinc-850 bg-zinc-950/20 py-2 px-1">
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">
                  Category
                </p>
                <p className="text-xs font-black text-white capitalize mt-0.5 truncate">
                  {selected.category}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-950/20 py-2 px-1">
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">
                  Equipment
                </p>
                <p className="text-xs font-black text-white capitalize mt-0.5 truncate">
                  {selected.equipment}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-850 bg-zinc-950/20 py-2 px-1">
                <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">
                  Burn Rate
                </p>
                <p className="text-xs font-black text-volt mt-0.5 truncate">
                  ~{getExerciseKcalPerMin(selected.category)}/min
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {/* Stepped instructions list */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Info className="h-4 w-4 text-volt" />
                    <span>Instruction Steps:</span>
                  </p>
                  <button
                    onClick={toggleAudioCoach}
                    className={`flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full border transition duration-200 cursor-pointer ${
                      isSpeaking
                        ? "bg-red-500/10 border-red-500/20 text-red-500 font-black animate-pulse"
                        : "bg-volt/10 border-volt/20 text-volt font-black"
                    }`}
                  >
                    {isSpeaking ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                    <span>{isSpeaking ? "Pause Coach" : "Audio Coach"}</span>
                  </button>
                </div>
                <div className="max-h-[120px] overflow-y-auto space-y-2 pr-1 border border-zinc-800 rounded-xl p-3 bg-zinc-950/40 scrollbar-thin">
                  {(selected.instruction_steps?.en || [selected.instructions.en]).map(
                    (step, idx) => (
                      <div
                        key={idx}
                        className="flex gap-2 text-xs text-zinc-400 leading-relaxed items-start"
                      >
                        <span className="flex-shrink-0 grid place-items-center h-4.5 w-4.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-black text-volt">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Stopwatch stopwatch live tracker */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3.5 shadow-inner">
                <div className="flex justify-between items-center mb-2 border-b border-zinc-800 pb-2">
                  <span className="text-[9px] uppercase font-bold text-zinc-500">
                    Live Active Stopwatch
                  </span>
                  {timerRunning && (
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-display text-2xl font-black text-white tracking-tight">
                      {formatTime(timeElapsed)}
                    </span>
                    <span className="text-[8px] text-zinc-500 font-bold uppercase mt-0.5">Elapsed workout time</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setTimerRunning(!timerRunning)}
                      className={`p-2.5 rounded-xl border transition active:scale-95 cursor-pointer ${
                        timerRunning
                          ? "bg-amber-500/15 border-amber-500/20 text-amber-500"
                          : "bg-volt text-black border-volt"
                      }`}
                    >
                      {timerRunning ? (
                        <Pause className="h-4.5 w-4.5" />
                      ) : (
                        <Play className="h-4.5 w-4.5 fill-black" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setTimerRunning(false);
                        setTimeElapsed(0);
                      }}
                      className="p-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-900 text-zinc-450 transition active:scale-95 cursor-pointer"
                    >
                      <RotateCcw className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Range duration slider */}
              <div className="pt-2 border-t border-zinc-850">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-xs font-semibold text-zinc-400">
                    Duration Selector
                  </span>
                  <span className="font-display text-base font-extrabold text-white">
                    {mins}{" "}
                    <span className="text-xs font-medium text-zinc-500">
                      min · {Math.round(getExerciseKcalPerMin(selected.category) * mins)} kcal
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={120}
                  step={5}
                  value={mins}
                  onChange={(e) => setMins(+e.target.value)}
                  className="w-full accent-volt h-1.5 bg-zinc-850 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <button
              onClick={() => {
                const kcalRate = getExerciseKcalPerMin(selected.category);
                addExercise(
                  {
                    id: selected.id,
                    name: selected.name,
                    kcalPerMin: kcalRate,
                    icon: getExerciseIcon(selected.category, selected.name),
                    category: selected.category,
                    target: selected.target,
                    body_part: selected.body_part,
                    equipment: selected.equipment,
                    instructions: selected.instructions,
                  } as any,
                  mins,
                );

                toast.success(`Successfully logged ${mins} min of ${selected.name}! 🏋️`);
                setSelected(null);
              }}
              className="w-full mt-4 rounded-2xl bg-volt text-black py-3.5 font-display font-black text-xs shadow-glow active:scale-95 transition uppercase tracking-wider cursor-pointer"
            >
              Log Workout Progress
            </button>
          </div>
        </div>
      )}
    </PhoneShell>
  );
}
