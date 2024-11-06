import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from "@nextui-org/react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    images?: string[];
    tech: string[];
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{project.title}</ModalHeader>
            <ModalBody>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              {project.longDescription && (
                <p className="text-gray-600 dark:text-gray-300 mt-4">{project.longDescription}</p>
              )}
              {project.images && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {project.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-orange-500/20 text-orange-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;