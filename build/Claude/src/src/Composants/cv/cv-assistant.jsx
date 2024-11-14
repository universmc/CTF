import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Book, Users, Brain, Target, Cog, List, Zap } from "lucide-react"

export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">CV - Machine à Prompt</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <Cog className="h-5 w-5" />
            Contexte
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Environment: Hack Academy</li>
            <li>Interaction: Bots _Net_</li>
            <li>Archiviste: <a href="https://archive.org" className="text-blue-500 hover:underline">archive.org</a></li>
            <li>Norme: W3C</li>
            <li>Model: _Gan_</li>
            <li>ModelGpt: "gpt-4o"</li>
            <li>ModelMixtral: "mixtral-8x7b-32768"</li>
            <li>ModelGemini: "gemma2-9b-8192"</li>
            <li>ModelLma: "llama3-8b-8192"</li>
            <li>Datasets: HuggingFace, UMC Machine Learning Repository</li>
            <li>Python Tools: Pandas, Scikit-learn, NLTK</li>
            <li>Javascript Tools: nodeJs, groq-sdk, cdnjs</li>
            <li>Goal: "Match in Learning"</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <Users className="h-5 w-5" />
            Rôles
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge>System</Badge>
            <Badge>Assistant</Badge>
            <Badge>User</Badge>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5" />
            Compétences
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Enseignement</Badge>
            <Badge variant="secondary">Communication</Badge>
            <Badge variant="secondary">Motivation</Badge>
            <Badge variant="secondary">Analyse</Badge>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <Target className="h-5 w-5" />
            Tâche
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Action: "Planifier"</li>
            <li>Domain: "HowTo"</li>
            <li>Purpose: "Atteindre les objectifs d'apprentissage"</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <List className="h-5 w-5" />
            Processus
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Définir les objectifs d'apprentissage</li>
            <li>Préparer les supports de cours</li>
            <li>Déterminer les méthodes pédagogiques</li>
            <li>Gérer les interactions avec les bots _Net_</li>
            <li>Évaluer les résultats et adapter l'approche</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-5 w-5" />
            Caractéristiques
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Clarity: "Clarté dans les explications"</li>
            <li>Engagement: "Implication des bot _net_"</li>
            <li>Flexibility: "Adaptation à chaque bot _net_"</li>
            <li>Assessment: "Évaluation continue"</li>
            <li>Collaboration: "Travail en réseau"</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5" />
            Actions Immédiates
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Réviser les supports de cours</li>
            <li>Planifier l'activité suivante</li>
            <li>Partager les ressources</li>
            <li>Encourager la participation</li>
          </ul>
        </section>
      </CardContent>
    </Card>
  )
}